(function () {
    "use strict";

    var STORAGE_KEY = "uvatime_lang_pref";
    var LANGS = (window.UVATIME_I18N_LANGS || []).slice();
    var MAP = window.UVATIME_I18N_BROWSER_MAP || {};
    var DICT = window.UVATIME_I18N || {};
    var CODES = LANGS.map(function (l) { return l.code; }).filter(function (c) { return c !== "en"; });

    function normalizePath(pathname) {
        if (!pathname || pathname === "") return "/";
        var p = pathname.split("?")[0].split("#")[0];
        if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
        return p || "/";
    }

    function getLangFromPath(pathname) {
        var parts = normalizePath(pathname).split("/").filter(Boolean);
        if (parts.length && CODES.indexOf(parts[0]) !== -1) return parts[0];
        return "en";
    }

    function stripLangPrefix(pathname) {
        var p = normalizePath(pathname);
        var parts = p.split("/").filter(Boolean);
        if (parts.length && CODES.indexOf(parts[0]) !== -1) {
            parts.shift();
            return parts.length ? "/" + parts.join("/") : "/";
        }
        return p === "" ? "/" : p;
    }

    function localizePath(pathname, lang) {
        if (!pathname) return lang === "en" ? "/" : "/" + lang + "/";
        if (/^(https?:|mailto:|tel:|javascript:)/i.test(pathname)) return pathname;
        if (pathname.charAt(0) === "#") return pathname;

        var hash = "";
        var q = "";
        var pathOnly = pathname;
        var hashIdx = pathOnly.indexOf("#");
        if (hashIdx !== -1) {
            hash = pathOnly.slice(hashIdx);
            pathOnly = pathOnly.slice(0, hashIdx);
        }
        var qIdx = pathOnly.indexOf("?");
        if (qIdx !== -1) {
            q = pathOnly.slice(qIdx);
            pathOnly = pathOnly.slice(0, qIdx);
        }

        var clean = stripLangPrefix(pathOnly);
        if (clean !== "/" && !clean.endsWith("/")) {
            // keep folder-style paths with trailing slash for GitHub Pages dirs
            if (!/\.[a-z0-9]+$/i.test(clean)) clean += "/";
        }
        if (clean === "/") {
            return (lang === "en" ? "/" : "/" + lang + "/") + (q + hash).replace(/^\//, "");
        }
        var prefix = lang === "en" ? "" : "/" + lang;
        return prefix + clean + q + hash;
    }

    function detectBrowserLang() {
        var candidates = [];
        if (navigator.languages && navigator.languages.length) {
            candidates = candidates.concat(Array.prototype.slice.call(navigator.languages));
        }
        if (navigator.language) candidates.push(navigator.language);
        // Build a lowercase lookup so fr-BE / fr-be both match
        var mapLower = {};
        Object.keys(MAP).forEach(function (k) {
            mapLower[String(k).toLowerCase()] = MAP[k];
        });
        for (var i = 0; i < candidates.length; i++) {
            var raw = String(candidates[i] || "").toLowerCase();
            if (!raw) continue;
            if (mapLower[raw]) return mapLower[raw];
            var short = raw.split("-")[0];
            if (mapLower[short]) return mapLower[short];
        }
        return "en";
    }

    function t(key, lang) {
        lang = lang || currentLang;
        var pack = DICT[lang] || {};
        if (pack[key] != null && pack[key] !== "") return pack[key];
        if (DICT.en && DICT.en[key] != null) return DICT.en[key];
        return null;
    }

    function applyTranslations(lang) {
        document.documentElement.lang = lang === "be" ? "nl-BE" : lang;

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var key = el.getAttribute("data-i18n");
            var val = t(key, lang);
            if (val == null) return;
            if (el.hasAttribute("data-i18n-html")) {
                el.innerHTML = val;
            } else {
                el.textContent = val;
            }
        });

        document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
            var spec = el.getAttribute("data-i18n-attr");
            if (!spec) return;
            spec.split(",").forEach(function (pair) {
                var parts = pair.split(":").map(function (s) { return s.trim(); });
                if (parts.length !== 2) return;
                var attr = parts[0];
                var key = parts[1];
                var val = t(key, lang);
                if (val != null) el.setAttribute(attr, val);
            });
        });

        // Title / meta
        var titleKey = document.body.getAttribute("data-i18n-title");
        if (titleKey && t(titleKey, lang)) document.title = t(titleKey, lang);
        var metaKey = document.body.getAttribute("data-i18n-desc");
        if (metaKey && t(metaKey, lang)) {
            var meta = document.querySelector('meta[name="description"]');
            if (meta) meta.setAttribute("content", t(metaKey, lang));
        }
    }

    function rewriteInternalLinks(lang) {
        document.querySelectorAll("a[href]").forEach(function (a) {
            if (a.hasAttribute("data-i18n-skip")) return;
            var href = a.getAttribute("href");
            if (!href || href.charAt(0) === "#" || /^(https?:|mailto:|tel:|javascript:)/i.test(href)) return;
            if (href.indexOf("/assets/") === 0) return;
            // relative asset paths
            if (/^(assets\/|\.\/assets\/)/.test(href)) return;
            a.setAttribute("href", localizePath(href, lang));
        });
    }

    function buildSelector(lang) {
        var existing = document.querySelectorAll(".lang-switch, .mobile-lang-list");
        existing.forEach(function (n) { n.remove(); });

        var current = LANGS.find(function (l) { return l.code === lang; }) || LANGS[0];

        function menuHtml() {
            return LANGS.map(function (l) {
                return (
                    '<a class="lang-switch-option' + (l.code === lang ? " is-active" : "") + '" href="' +
                    localizePath(stripLangPrefix(location.pathname) + location.search + location.hash, l.code) +
                    '" data-lang="' + l.code + '" data-i18n-skip>' +
                    '<span class="flag">' + l.flag + "</span>" +
                    '<span class="meta"><strong>' + l.nativeName + "</strong><span>" + l.code.toUpperCase() + "</span></span>" +
                    "</a>"
                );
            }).join("");
        }

        var wrap = document.createElement("div");
        wrap.className = "lang-switch";
        wrap.innerHTML =
            '<button type="button" class="lang-switch-btn" aria-haspopup="listbox" aria-expanded="false" aria-label="Language">' +
            '<span class="lang-switch-flag">' + current.flag + "</span>" +
            '<span class="lang-switch-code">' + current.code.toUpperCase() + "</span>" +
            '<svg class="lang-switch-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>' +
            "</button>" +
            '<div class="lang-switch-menu" role="listbox">' + menuHtml() + "</div>";

        var navContainer = document.querySelector(".nav-container");
        if (navContainer) {
            var hamburger = navContainer.querySelector(".hamburger");
            if (hamburger) navContainer.insertBefore(wrap, hamburger);
            else navContainer.appendChild(wrap);
        }

        var btn = wrap.querySelector(".lang-switch-btn");
        btn.addEventListener("click", function (e) {
            e.stopPropagation();
            var open = wrap.classList.toggle("is-open");
            btn.setAttribute("aria-expanded", open ? "true" : "false");
        });

        wrap.querySelectorAll(".lang-switch-option").forEach(function (opt) {
            opt.addEventListener("click", function () {
                try { localStorage.setItem(STORAGE_KEY, opt.getAttribute("data-lang")); } catch (e) {}
            });
        });

        document.addEventListener("click", function () {
            wrap.classList.remove("is-open");
            btn.setAttribute("aria-expanded", "false");
        });

        var mobile = document.getElementById("mobileMenu");
        if (mobile) {
            var list = document.createElement("div");
            list.className = "mobile-lang-list";
            list.innerHTML = LANGS.map(function (l) {
                return (
                    '<a href="' + localizePath(stripLangPrefix(location.pathname) + location.search + location.hash, l.code) +
                    '" data-lang="' + l.code + '" data-i18n-skip class="' + (l.code === lang ? "is-active" : "") + '">' +
                    l.flag + " " + l.code.toUpperCase() + "</a>"
                );
            }).join("");
            mobile.appendChild(list);
            list.querySelectorAll("a").forEach(function (a) {
                a.addEventListener("click", function () {
                    try { localStorage.setItem(STORAGE_KEY, a.getAttribute("data-lang")); } catch (e) {}
                });
            });
        }
    }

    function resolveLangAndMaybeRedirect() {
        var pathLang = getLangFromPath(location.pathname);
        var pref = null;
        try { pref = localStorage.getItem(STORAGE_KEY); } catch (e) {}

        // Visiting a locale path always wins and becomes the saved preference
        if (pathLang !== "en") {
            try { localStorage.setItem(STORAGE_KEY, pathLang); } catch (e) {}
            return pathLang;
        }

        // English URL: honor saved non-English preference
        if (pref && pref !== "en" && CODES.indexOf(pref) !== -1) {
            location.replace(localizePath(location.pathname + location.search + location.hash, pref));
            return null;
        }

        // First visit: auto-detect from browser
        if (!pref) {
            var detected = detectBrowserLang();
            if (detected && detected !== "en" && CODES.indexOf(detected) !== -1) {
                try { localStorage.setItem(STORAGE_KEY, detected); } catch (e) {}
                location.replace(localizePath(location.pathname + location.search + location.hash, detected));
                return null;
            }
            try { localStorage.setItem(STORAGE_KEY, "en"); } catch (e) {}
        }

        return "en";
    }

    var currentLang = resolveLangAndMaybeRedirect();
    if (!currentLang) return;

    document.documentElement.classList.add("i18n-pending");

    function boot() {
        applyTranslations(currentLang);
        rewriteInternalLinks(currentLang);
        buildSelector(currentLang);
        document.documentElement.classList.remove("i18n-pending");
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", boot);
    } else {
        boot();
    }

    window.UVATIME_I18N_API = {
        t: t,
        lang: currentLang,
        localizePath: localizePath,
        stripLangPrefix: stripLangPrefix
    };
})();

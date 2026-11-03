# Sync English HTML pages into /de /da /nl /fr /es /it /be path mirrors for GitHub Pages.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$langs = @("de", "da", "nl", "fr", "es", "it", "be")
$pages = @(
    @{ Src = "index.html"; PathKey = "" },
    @{ Src = "shopify-cro-audit\index.html"; PathKey = "shopify-cro-audit/" },
    @{ Src = "shopify-offers\index.html"; PathKey = "shopify-offers/" },
    @{ Src = "privacy-policy\index.html"; PathKey = "privacy-policy/" },
    @{ Src = "terms-and-conditions\index.html"; PathKey = "terms-and-conditions/" }
)

foreach ($lang in $langs) {
    foreach ($page in $pages) {
        $src = Join-Path $root $page.Src
        $destRel = if ($page.PathKey) { Join-Path $lang ($page.PathKey.TrimEnd('/') + "\index.html") } else { Join-Path $lang "index.html" }
        $dest = Join-Path $root $destRel
        $destDir = Split-Path $dest -Parent
        New-Item -ItemType Directory -Force -Path $destDir | Out-Null

        $html = Get-Content -LiteralPath $src -Raw -Encoding UTF8
        $htmlLang = if ($lang -eq "be") { "nl-BE" } else { $lang }
        $html = [regex]::Replace($html, '<html\s+lang="[^"]*"', "<html lang=`"$htmlLang`"")

        # Only rewrite the canonical URL for this locale — leave hreflang alternate block intact
        $canonical = "https://uvatime.com/$lang/$($page.PathKey)"
        $html = [regex]::Replace(
            $html,
            '<link rel="canonical" href="https://uvatime.com/[^"]*"',
            "<link rel=`"canonical`" href=`"$canonical`""
        )

        Set-Content -LiteralPath $dest -Value $html -Encoding UTF8 -NoNewline
        Write-Host "Wrote $destRel"
    }
}

Write-Host "Locale sync complete."

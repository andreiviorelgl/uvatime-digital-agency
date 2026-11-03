const fs = require("fs");
const path = "d:/Work/PRIVATE/uvatime-digital-agency/assets/i18n/translations.js";
eval(fs.readFileSync(path, "utf8"));

const additions = {
  en: {
    "home.productFamiliesBody":
      "Uvatime: Product Families Sync is our public Shopify app — link separate sibling products into ordered families and keep storefront swatches in sync on every product page. Create families manually, in bulk from Admin, or with Auto-Families by title pattern, tag prefix, or metafield. Theme app blocks show image swatches so shoppers jump between related products while each item keeps its own SKU, URL, and inventory. Free for up to 5 families; Pro unlocks unlimited families, CSV, and a REST API.",
    "home.servicesProductFamilies":
      "Our Product: Shopify App — Product Families, Swatches, Auto-Families, Metafield Sync",
  },
  de: {
    "home.productFamiliesBody":
      "Uvatime: Product Families Sync ist unsere öffentliche Shopify-App — verknüpfe verwandte Einzelprodukte zu geordneten Familien und halte Storefront-Swatches auf jeder Produktseite synchron. Familien manuell anlegen, per Bulk aus dem Admin oder mit Auto-Families nach Titelmuster, Tag-Präfix oder Metafield. Theme-App-Blöcke zeigen Bild-Swatches, damit Käufer zwischen verwandten Produkten wechseln — jedes mit eigener SKU, URL und Bestand. Free bis 5 Familien; Pro: unbegrenzt, CSV und REST-API.",
    "home.servicesProductFamilies":
      "Unser Produkt: Shopify-App — Product Families, Swatches, Auto-Families, Metafield-Sync",
  },
  da: {
    "home.productFamiliesBody":
      "Uvatime: Product Families Sync er vores offentlige Shopify-app — forbind søsterprodukter i ordnede familier og hold storefront-swatches synkroniseret på hver produktside. Opret familier manuelt, i bulk fra Admin eller med Auto-Families efter titelpattern, tag-præfiks eller metafield. Theme-app-blokke viser billed-swatches, så kunder hopper mellem relaterede produkter — hver med egen SKU, URL og lager. Free op til 5 familier; Pro: ubegrænset, CSV og REST-API.",
    "home.servicesProductFamilies":
      "Vores produkt: Shopify-app — Product Families, Swatches, Auto-Families, Metafield Sync",
  },
  nl: {
    "home.productFamiliesBody":
      "Uvatime: Product Families Sync is onze publieke Shopify-app — koppel losse sibling-producten tot geordende families en houd storefront-swatches synchroon op elke productpagina. Maak families handmatig, in bulk via Admin of met Auto-Families op titelpatroon, tag-prefix of metafield. Theme-appblokken tonen afbeeldingsswatches zodat shoppers tussen gerelateerde producten springen — elk met eigen SKU, URL en voorraad. Free tot 5 families; Pro: onbeperkt, CSV en REST-API.",
    "home.servicesProductFamilies":
      "Ons product: Shopify-app — Product Families, Swatches, Auto-Families, Metafield Sync",
  },
  fr: {
    "home.productFamiliesBody":
      "Uvatime: Product Families Sync est notre app Shopify publique — reliez des produits frères en familles ordonnées et synchronisez les swatches sur chaque fiche produit. Créez une famille à la main, en masse depuis l'Admin, ou avec Auto-Families (motif de titre, préfixe de tag ou metafield). Les blocs d'app thème affichent des swatches image pour naviguer entre produits liés — chacun garde son SKU, son URL et son stock. Free jusqu'à 5 familles ; Pro : illimité, CSV et API REST.",
    "home.servicesProductFamilies":
      "Notre produit : App Shopify — Product Families, Swatches, Auto-Families, Sync metafields",
  },
  es: {
    "home.productFamiliesBody":
      "Uvatime: Product Families Sync es nuestra app pública de Shopify: vincula productos hermanos en familias ordenadas y sincroniza swatches en cada ficha. Crea familias a mano, en masa desde Admin o con Auto-Families por patrón de título, prefijo de tag o metafield. Los bloques de app del tema muestran swatches de imagen para saltar entre productos relacionados — cada uno con su SKU, URL e inventario. Free hasta 5 familias; Pro: ilimitadas, CSV y API REST.",
    "home.servicesProductFamilies":
      "Nuestro producto: App Shopify — Product Families, Swatches, Auto-Families, Sync de metafields",
  },
  it: {
    "home.productFamiliesBody":
      "Uvatime: Product Families Sync è la nostra app Shopify pubblica: collega prodotti sibling in famiglie ordinate e sincronizza gli swatch su ogni pagina prodotto. Crea famiglie a mano, in blocco da Admin o con Auto-Families per pattern di titolo, prefisso tag o metafield. I blocchi theme app mostrano swatch immagine per passare tra prodotti correlati — ognuno con SKU, URL e inventario propri. Free fino a 5 famiglie; Pro: illimitate, CSV e API REST.",
    "home.servicesProductFamilies":
      "Il nostro prodotto: App Shopify — Product Families, Swatches, Auto-Families, Sync metafield",
  },
  be: {
    "home.productFamiliesBody":
      "Uvatime: Product Families Sync is onze publieke Shopify-app — koppel sibling-producten tot geordende families en houd storefront-swatches synchroon op elke productpagina. Maak families manueel, in bulk via Admin of met Auto-Families op titelpatroon, tag-prefix of metafield. Theme-appblokken tonen afbeeldingsswatches zodat shoppers tussen gerelateerde producten springen — elk met eigen SKU, URL en stock. Free tot 5 families; Pro: onbeperkt, CSV en REST-API.",
    "home.servicesProductFamilies":
      "Ons product: Shopify-app — Product Families, Swatches, Auto-Families, Metafield Sync",
  },
};

for (const lang of Object.keys(additions)) {
  Object.assign(UVATIME_I18N[lang], additions[lang]);
}

function esc(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

const langs = Object.keys(UVATIME_I18N);
let out = "window.UVATIME_I18N = {\n";
langs.forEach((lang, li) => {
  out += `  ${lang}: {\n`;
  const keys = Object.keys(UVATIME_I18N[lang]).sort();
  keys.forEach((k, ki) => {
    out += `    '${k}': '${esc(UVATIME_I18N[lang][k])}'${ki < keys.length - 1 ? "," : ""}\n`;
  });
  out += `  }${li < langs.length - 1 ? "," : ""}\n`;
});
out += "};\n";

fs.writeFileSync(path, out);
eval(fs.readFileSync(path, "utf8"));
console.log("en keys", Object.keys(UVATIME_I18N.en).length);
console.log("pf de ok", Boolean(UVATIME_I18N.de["home.productFamiliesBody"]));

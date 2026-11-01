# Shopify CRO Audit — Delivery Playbook (non-designer guide)

Internal guide for delivering the UVATIME Shopify CRO Audit. You do **not** need to be a visual designer. You need to think like a shopper, spot friction, and mark clear layout changes in Figma that a developer can build.

Inspired by the market offer at [splitdev.com/shopify-cro-audit](https://splitdev.com/shopify-cro-audit/).

---

## 1. What you are selling (in one sentence)

A **3-business-day review** of four Shopify pages (homepage, collection, product, cart) on **desktop + mobile**, delivered as **annotated before/after Figma layouts** + a **priority list** + a **walkthrough call**.

Implementation is **not** included in the audit price — quote it separately after the call.

| Package | Price | Includes |
|---------|-------|----------|
| Early (book by Nov 9, 2026) | **199€** | Figma + notes + priority list + call |
| Standard | **350€** | Same |
| Implementation | Quote after audit | Theme edits to ship the recommendations |

---

## 2. What to offer the customer (promise + boundaries)

### Promise
- We find what blocks first-time buyers on the four money pages.
- Every recommendation is a **layout they can build**, not vague advice (“improve trust”).
- We split work into **ship before Black Friday** vs **plan after**.

### Boundaries (say this clearly)
- No Shopify admin access required (live URL is enough).
- Analytics optional (nice for prioritization).
- Not a full redesign / rebrand.
- Not A/B testing setup (you can offer that later).
- Not guaranteed revenue numbers — you sell **targeted fixes** and a clear build plan.

### Upsell path
1. Audit → 2. Implement top 3–5 fixes before freeze → 3. Larger UX/dev after season → 4. Full Shopify offer packages (`/shopify-offers`).

---

## 3. What “Figma layout” means (plain English)

Figma here is **not art**. It is a **marked-up blueprint** of their current pages.

Think of each frame as a screenshot of their store with sticky notes drawn on it.

### File structure (copy this every time)

```
ClientName — CRO Audit — YYYY-MM
├── 00 Cover (store URL, date, your name)
├── 01 Homepage — Desktop — BEFORE
├── 01 Homepage — Desktop — AFTER
├── 01 Homepage — Mobile — BEFORE
├── 01 Homepage — Mobile — AFTER
├── 02 Collection — Desktop — BEFORE / AFTER
├── 02 Collection — Mobile — BEFORE / AFTER
├── 03 Product — Desktop — BEFORE / AFTER
├── 03 Product — Mobile — BEFORE / AFTER
├── 04 Cart — Desktop — BEFORE / AFTER
├── 04 Cart — Mobile — BEFORE / AFTER
└── 05 Priority list (table frame)
```

### BEFORE frames
1. Open the live store in Chrome.
2. Desktop: ~1440px wide. Mobile: iPhone width (~390px) or Chrome device toolbar.
3. Screenshot the full page (or above-the-fold + key lower sections).
4. Paste into Figma as an image on a frame.
5. Label: `BEFORE — Homepage — Desktop`.

### AFTER frames
You are **not** inventing a new brand. You:

1. Duplicate the BEFORE frame.
2. Rename to `AFTER`.
3. Draw simple rectangles / text for **moved or new UI blocks** (trust bar, sticky ATC, filter chips, order summary).
4. Add numbered markers (1, 2, 3…) next to each change.
5. On the side (or in a sticky note), write for each number:
   - **What changes** (one line)
   - **Why** (shopper friction)
   - **Expected effect** (CVR ↑ or AOV ↑)
   - **Effort** (S / M / L)
   - **When** (Before BF / After BF)

### Annotation style that developers understand
- Red / accent circle with number = change location.
- Short callout: “Add trust bar under hero: Free shipping · 30-day returns · Authenticity”.
- Do **not** polish pixels, fonts, or brand illustrations. Boxes + labels are enough.
- Match their existing colors roughly so it feels like *their* store, not a new theme.

### What each page’s Figma is “standing for”

| Page | The layout stands for… |
|------|-------------------------|
| **Homepage** | First impression: “What is this store?” + clear paths into shop |
| **Collection** | Browse → find product without overwhelm (filters, cards, scroll) |
| **Product (PDP)** | Decide & buy: variants, price, trust, ATC always reachable |
| **Cart** | Confirm & checkout: summary, shipping threshold, trust, upsell |

If a change does not help one of those jobs, cut it.

---

## 4. How to run the review (checklist)

Work as a **first-time shopper**. Phone first if they are fashion/beauty (most holiday traffic is mobile).

### Homepage
- [ ] Above the fold: clear category / product entry (not only one vague “Shop”)?
- [ ] Trust (shipping, returns, authenticity) visible early?
- [ ] Promo / sale without cluttering the path to product?
- [ ] Mobile: can you tap into a collection in one or two taps?

### Collection
- [ ] Product cards show enough info (price, color, badge) without noise?
- [ ] Filters usable on mobile?
- [ ] Empty / low-result states not a dead end?
- [ ] Path to PDP obvious?

### Product page
- [ ] Price + variants + ATC visible without hunting?
- [ ] Shipping / returns near the buy button (not only in footer tabs)?
- [ ] Size guide easy to open?
- [ ] Mobile sticky ATC after scroll?
- [ ] Cross-sell that feels useful (Complete the Look), not spam?

### Cart (drawer or page)
- [ ] Subtotal, shipping estimate, discounts clear?
- [ ] Free-shipping progress bar if they have a threshold?
- [ ] Checkout CTA dominant + trust (“Secure checkout”)?
- [ ] Easy edit quantity / remove?
- [ ] One sensible upsell?

Cap yourself: **aim for 8–15 total recommendations**, not 40. Priority > volume.

---

## 5. Priority list (what customers pay for)

Create a simple table (Figma frame or Google Sheet linked in the file):

| # | Page | Change | Effect (CVR/AOV) | Effort | Ship |
|---|------|--------|------------------|--------|------|
| 1 | PDP | Sticky ATC + size on mobile | CVR | S | Before BF |
| 2 | Home | Trust bar under hero | CVR | S | Before BF |
| 3 | Cart | Order summary + secure CTA | CVR | M | Before BF |
| 4 | Collection | Quick filter chips | CVR | M | Before BF |
| 5 | PDP | Move shipping next to ATC | CVR | S | Before BF |
| 6 | Home | Dual gender CTAs in hero | CVR | S | After BF |

**Before BF** = low risk, theme/section edits, no checkout rewrite.  
**After BF** = redesign-heavy, new apps, Plus checkout customizations.

---

## 6. Delivery workflow (day by day)

### Day 0 — Booking
- Collect: store URL, target market, optional Shopify analytics screenshots (devices, top landing pages, BF last year).
- Confirm deadline and walkthrough call slot.
- Invoice 199€ / 350€.

### Day 1 — Capture & diagnose
- Screenshot all 8 viewport/page combos (4 pages × 2 devices).
- Write a rough finding list in a note doc (no Figma polish yet).
- Pick top issues by: traffic impact × fixability before freeze.

### Day 2 — Figma AFTER layouts
- Build AFTER frames with numbered annotations.
- Fill expected-effect + effort on each note.
- Draft priority table.

### Day 3 — Package & call
- Share Figma link (view access) + short PDF export of priority list if they prefer.
- 30–45 min walkthrough: walk numbers in priority order; agree what UVATIME implements vs their team.
- Send implementation quote within 24h if they want you to build.

---

## 7. Walkthrough call script (15–20 min core)

1. Goal reminder: more revenue from existing traffic before freeze.  
2. Show Priority #1–3 on Figma AFTER (demo the shopper problem on BEFORE first).  
3. Ask: “Who ships these — you or us?”  
4. Confirm freeze date.  
5. Next step: implementation quote or self-serve checklist.

---

## 8. Example findings you can reuse (adapt to their store)

These match common fashion/beauty Shopify patterns (same class of issues as public CRO audit examples):

1. **Hero with one vague CTA** → add clear category entry points.  
2. **Trust only in footer** → trust bar under hero / near ATC.  
3. **Filter toolbar overcrowded** → quick chips + cleaner filter/sort.  
4. **Size/shipping buried in tabs** → group next to price + ATC.  
5. **ATC lost on long PDP** → sticky purchase bar on mobile.  
6. **Cart is a plain button** → summary, threshold, secure checkout, light upsell.

Always rewrite to their brand words and real screenshots — never paste generic stock.

---

## 9. Tools (minimum stack)

- Chrome + device toolbar  
- Figma (free plan is enough for 1 client file)  
- Full-page screenshot: built-in DevTools or GoFullPage  
- Optional: Hotjar/Clarity recordings if client shares (not required)  
- Optional: Shopify Admin → Analytics if they invite you later for implementation

### Figma skills you actually need
- Frames, paste image, rectangle, text, components optional  
- Sticky notes or numbered markers  
- Share link → “can view”

You do **not** need auto-layout mastery, design systems, or illustration.

---

## 10. Quality bar before you hit “send”

- [ ] All 4 pages × 2 devices have BEFORE + AFTER  
- [ ] Every AFTER marker has What / Why / Effect / Effort / When  
- [ ] Priority list has a clear Before BF top 5  
- [ ] Nothing requires a full rebrand to ship  
- [ ] Call booked or proposed with 2 time options  
- [ ] Implementation interest noted for follow-up quote  

---

## 11. Positioning vs full Shopify builds

| | CRO Audit | Shopify Offers (Fastrack / Enhanced / Bespoke) |
|--|-----------|--------------------------------------------------|
| Goal | Fix conversion leaks on live store | Build / rebuild the store |
| Time | 3 days | Weeks |
| Output | Figma annotations + list | Live theme / store |
| Price | 199–350€ | 2.600–6.600€+ |

Use the audit as a **door opener** into implementation and larger retainers.

---

*UVATIME internal — keep this file out of the public site nav.*

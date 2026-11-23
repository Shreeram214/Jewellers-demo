# AURELIA JEWELS — Premium Jewellery Showroom Website (Demo)

**Live demo:** https://aureliajewels-demo.pages.dev

**Timeless Elegance. Crafted to Celebrate.**

A premium, fully responsive one-page website for a fictional jewellery showroom in **Sangli, Maharashtra**. It's built with plain **HTML5, CSS3 and Vanilla JavaScript**: no frameworks, no build step and no backend.

> ⚠️ **Demo content:** AURELIA JEWELS is a fictional brand. All products, descriptions, testimonials, the address, phone number, timings and map location are sample content to be replaced with the client's real business information. No prices or gold rates are shown, and the forms don't send or store anything.

## Run it

Open `index.html` in a browser, or serve the folder locally:

```bash
python -m http.server 8860
```

## Sections

Announcement bar · Sticky header · Hero · About · Collections (8 cards) · Featured designs (8 products, 6 filters, details modal) · Bridal edit · Jewellery for every occasion · Why choose us · Craftsmanship · Buying guide (5 guides in modals) · Custom jewellery enquiry · Testimonials carousel · Gallery · Visit our showroom (map) · FAQ accordion · Contact · Footer

## Features

- Sticky header with active-section highlighting, smooth scrolling and a slide-in mobile menu
- Category filters for the product showcase; "Explore Collection" buttons jump to the showcase with a filter applied
- Product details modal with highlights and clearly labelled *illustrative* material information; closes with the × button, outside click or Esc, and traps focus
- Buying guide modals: gold purity, BIS hallmarking with HUID, choosing diamonds, wedding jewellery and care tips
- Custom-jewellery and contact forms with validation (Indian 10-digit mobile numbers, email, required fields). On success they show a demo confirmation and offer to forward the details on WhatsApp — nothing is sent to a server
- Reusable WhatsApp enquiry builder: product enquiries include the product name, form enquiries include the submitted details
- Testimonial carousel with autoplay, arrows, dots and swipe; FAQ accordion; back-to-top button; scroll-reveal animations; image hover effects
- SEO: title, meta description, keywords, Open Graph tags, semantic HTML and descriptive alt text

## Make it a real client site

Everything to replace is marked as a placeholder on the page. In `js/script.js`, edit the `CONFIG` block:

```js
const CONFIG = {
  brand: "AURELIA JEWELS",
  whatsappNumber: "",   // e.g. "919876543210" (country code, no + or spaces)
  phoneNumber: ""       // e.g. "+919876543210"
};
```

While `whatsappNumber` is empty, WhatsApp buttons open WhatsApp with the message pre-filled and let the visitor choose a contact. Then replace in `index.html`: the address, timings, phone and email placeholders, the Google Maps embed and directions link, social links, the testimonials (with real, permitted reviews) and the product data in `js/script.js`.

## Project structure

```
aurelia-jewels/
├── index.html
├── css/style.css
├── js/script.js
└── assets/images/
```

## Credits

Photos from [Unsplash](https://unsplash.com), used under the Unsplash License. Icons by [Font Awesome](https://fontawesome.com). Fonts: Cormorant Garamond and Jost from Google Fonts.

Demonstration website by CoreWeb AI.

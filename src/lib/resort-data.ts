export const resortAssets = {
  hero: "/__l5e/assets-v1/dfe43b41-833b-459e-9972-2b03ab3ed1b1/hero-resort.webp",
  river: "/__l5e/assets-v1/a5bfba4f-639b-487a-9f63-bb66fa089d6a/hero-river.webp",
  sunset: "/__l5e/assets-v1/95a2445d-53d9-4ff4-9afa-9b92e821b3e1/resort-at-sunset.webp",
  evening: "/__l5e/assets-v1/7fbc8674-d8e1-4d99-84cb-2a05d38eb325/resort-evening.webp",
  pool: "/__l5e/assets-v1/41cb2f6b-17e1-4769-bd2e-f6822cb3ead1/resort-pool.webp",
  about: "/__l5e/assets-v1/06e957bb-e8eb-4dae-a88d-655f7b5a8cff/about.webp",
  room: "/__l5e/assets-v1/89cefc79-849d-4d75-94ba-3c37e2f92b0c/royale-room.jpeg",
  suite: "/__l5e/assets-v1/0497e126-14f4-45f5-a344-58984eda548f/suite.jpg",
  villa: "/__l5e/assets-v1/9ed53ee4-1761-4056-b498-7919c20130c2/villa-room.jpg",
  riverView: "/__l5e/assets-v1/a3221447-2313-466a-97cf-8958238de943/river-view.jpg",
  spa: "/__l5e/assets-v1/0ac03de4-89d2-4f56-9866-f08e441ca9cc/rio-spa.jpg",
  dining: "/__l5e/assets-v1/1e200698-3685-467f-99c9-f6a89c12b843/aur-jalsa-dining.webp",
  wedding: "/__l5e/assets-v1/7a089655-4aff-4f99-b9f4-28f8c8dc70fd/goa-wedding.jpg",
  events: "/__l5e/assets-v1/302f7694-1236-4f58-b656-2c6962c3bc87/events.jpg",
  conference: "/__l5e/assets-v1/2403ceca-8d1d-4389-b00e-24bb4af517f2/conference-hall.jpg",
  logo: "/__l5e/assets-v1/53a141ca-e986-4574-898f-5199d4f3a3db/resort-rio-wordmark.png",
};

export const bookingUrl =
  "https://www.swiftbook.io/inst/#home?propertyId=903MjIpwfdybHpvSGzhN7yy2mGXTaOd7yNgBYdThpSygEN4rEiewNQ==&JDRN=Y";

export const navigationItems = [
  { label: "The stay", to: "/accommodation" as const },
  { label: "Dining", to: "/dining" as const },
  { label: "Wellness", to: "/wellness" as const },
  { label: "Celebrations", to: "/celebrations" as const },
  { label: "Discover", to: "/discover" as const },
];

export const rooms = [
  { name: "Deluxe Room Royale Wing", wing: "Royale Wing", group: "rooms", image: resortAssets.room, href: "https://www.resortrio.com/accommodation/deluxe-room-royale-wing/" },
  { name: "Two Room Luxury Suite Rio Wing", wing: "Rio Wing", group: "suites", image: resortAssets.suite, href: "https://www.resortrio.com/accommodation/two-room-luxury-suite-rio-wing/" },
  { name: "Ultra Luxury Suite Royale Wing", wing: "Royale Wing", group: "suites", image: resortAssets.suite, href: "https://www.resortrio.com/accommodation/ultra-luxury-suite-royale-wing/" },
  { name: "Luxury Suite Rio Wing", wing: "Rio Wing", group: "suites", image: resortAssets.suite, href: "https://www.resortrio.com/accommodation/luxury-suite-rio-wing/" },
  { name: "Luxury Suite Royale Wing", wing: "Royale Wing", group: "suites", image: resortAssets.room, href: "https://www.resortrio.com/accommodation/luxury-suite-royale-wing-view/" },
  { name: "Royale Duplex Suite", wing: "Royale Wing", group: "suites", image: resortAssets.suite, href: "https://www.resortrio.com/accommodation/royale-duplex-suite/" },
  { name: "Two Room Luxury Suite Royale Wing", wing: "Royale Wing", group: "suites", image: resortAssets.suite, href: "https://www.resortrio.com/accommodation/two-room-luxury-suite-royale-wing/" },
  { name: "Two Room Standard Suite Rio Wing", wing: "Rio Wing", group: "suites", image: resortAssets.room, href: "https://www.resortrio.com/accommodation/two-room-standard-suite-rio-wing/" },
  { name: "Ultra Luxury Suite Rio Wing", wing: "Rio Wing", group: "suites", image: resortAssets.suite, href: "https://www.resortrio.com/accommodation/ultra-luxury-suite-rio-wing/" },
  { name: "4 Bedroom Villa with Plunge Pool", wing: "Rio Wing", group: "villas", image: resortAssets.villa, href: "https://www.resortrio.com/accommodation/4-bedroom-with-plunge-pool-rio-wing/" },
  { name: "4 Bedroom Villa", wing: "Rio Wing", group: "villas", image: resortAssets.villa, href: "https://www.resortrio.com/accommodation/4-bedroom-villa-rio-wing/" },
  { name: "3 Bedroom Villa", wing: "Rio Wing", group: "villas", image: resortAssets.villa, href: "https://www.resortrio.com/accommodation/3-bedroom-villa-rio-wing/" },
  { name: "Royal Suite Rio Wing", wing: "Rio Wing", group: "suites", image: resortAssets.suite, href: "https://www.resortrio.com/accommodation/royal-suite-rio-wing/" },
] as const;

export const officialPages = {
  spa: "https://www.resortrio.com/rio-luxury-spa-wellness/",
  dining: "https://www.resortrio.com/aur-jalsa-vegetarian-restaurant/",
  wedding: "https://www.resortrio.com/weddings/",
  conference: "https://www.resortrio.com/rio-world-conference-centre/",
  tours: "https://www.resortrio.com/360-virtual-tour/Resort-Rio-2025/index.htm",
  quickPay: "https://resortrio.hotelpay.co.in/",
  casino: "https://bigb.casino",
  offers: "https://www.resortrio.com/#special-offers",
  hotelBrochure: "https://www.resortrio.com/resortbrochure/",
  weddingBrochure: "https://www.resortrio.com/weddingbrochure/",
  corporateBrochure: "https://www.resortrio.com/corporatebrochure/",
} as const;

export const editorialPages = {
  accommodation: {
    eyebrow: "Room to find your rhythm",
    title: "A stay that feels like exhaling.",
    description: "From a quiet room for two to your own riverfront villa, find the kind of space your Goa escape calls for.",
    image: resortAssets.villa,
    imageAlt: "A private villa at Resort Rio",
    cta: "Find your stay",
    href: "#rooms",
    label: "SUITES & VILLAS",
    paragraphs: ["The Rio Wing and Royale Wing bring their own character to a stay by the Baga River. Settle into a room, spread out in a suite, or bring everyone together in a private villa.", "Explore all 13 accommodation options below, then follow through to Resort Rio for room details and availability."],
  },
  dining: {
    eyebrow: "Gather around the table",
    title: "A little more flavour in every day.",
    description: "Long lunches, slow breakfasts and a table at Aur Jalsa. At Resort Rio, there is always room for one more.",
    image: resortAssets.dining,
    imageAlt: "Dining at Aur Jalsa, Resort Rio",
    cta: "Discover Aur Jalsa",
    href: officialPages.dining,
    label: "DINING & BARS",
    paragraphs: ["Make a meal part of the getaway. Aur Jalsa brings a dedicated vegetarian dining experience to the resort, while restaurants and bars offer more ways to linger over your time in Goa.", "Explore menus and the wider dining collection on the official Resort Rio website."],
  },
  wellness: {
    eyebrow: "A slower kind of afternoon",
    title: "Take a moment, just for you.",
    description: "Let the river set the pace. At Rio Luxury Spa & Wellness, an unhurried hour can become the best part of your day.",
    image: resortAssets.spa,
    imageAlt: "Rio Luxury Spa & Wellness at Resort Rio",
    cta: "Visit Rio Luxury Spa",
    href: officialPages.spa,
    label: "RIO LUXURY SPA & WELLNESS",
    paragraphs: ["Leave a little room in the itinerary to slow down. Rio Luxury Spa & Wellness offers a quieter counterpoint to the colour and energy of North Goa.", "Visit the official spa page for current treatments and booking information."],
  },
  celebrations: {
    eyebrow: "Make room for the moment",
    title: "Big days deserve a beautiful setting.",
    description: "From the first toast to the final dance, bring your people together by the Baga River.",
    image: resortAssets.wedding,
    imageAlt: "A celebration at Resort Rio in Goa",
    cta: "Explore weddings",
    href: officialPages.wedding,
    label: "WEDDINGS & GATHERINGS",
    paragraphs: ["A celebration should feel unmistakably yours. Resort Rio brings its riverside setting, accommodation, dining and event spaces together for weddings and gatherings of all kinds.", "Explore weddings and event possibilities on Resort Rio’s official pages, or request the original wedding brochure."],
  },
  discover: {
    eyebrow: "Outside the ordinary",
    title: "There is more to the moment.",
    description: "A change of scene, a new view, an evening that turns into a story. Follow the day wherever it leads.",
    image: resortAssets.river,
    imageAlt: "The Baga River and Resort Rio in Goa",
    cta: "Take the 360° tour",
    href: officialPages.tours,
    label: "DISCOVER RESORT RIO",
    paragraphs: ["Get a feel for the resort before you arrive with the official 360° virtual tour. Discover the conference centre, browse resort offers, or plan an evening out.", "All links below lead directly to the corresponding official Resort Rio experience."],
  },
} as const;

export type EditorialPageKey = keyof typeof editorialPages;
export const resortAssets = {
  hero: "/images/hero.jpg",
  river: "/images/river-view.jpg",
  sunset: "/images/sunset.jpg",
  evening: "/images/evening.jpg",
  pool: "/images/pool.jpg",
  about: "/images/about.jpg",
  room: "/images/room.jpg",
  suite: "/images/suite.jpg",
  villa: "/images/villa.jpg",
  riverView: "/images/river-view.jpg",
  spa: "/images/spa.jpg",
  dining: "/images/dining.jpg",
  wedding: "/images/wedding.jpg",
  events: "/images/wedding.jpg",
  conference: "/images/conference.jpg",
  logo: "/images/logo-white.png",
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

export const pageStats: Partial<Record<EditorialPageKey, { value: string; label: string }[]>> = {
  celebrations: [
    { value: "60,000", label: "sq. ft. of event space" },
    { value: "1,000+", label: "guests seated" },
    { value: "14", label: "venues & lawns" },
    { value: "13", label: "stay tiers on site" },
  ],
  wellness: [
    { value: "6", label: "signature rituals" },
    { value: "90", label: "minute journeys" },
    { value: "2", label: "couple suites" },
    { value: "1", label: "river to slow you down" },
  ],
  accommodation: [
    { value: "13", label: "rooms, suites & villas" },
    { value: "2", label: "wings · Rio & Royale" },
    { value: "3", label: "private plunge-pool villas" },
    { value: "1", label: "Baga River close by" },
  ],
};

export const pageFeatures: Partial<
  Record<EditorialPageKey, { kicker: string; title: string; items: { name: string; note: string; image: string }[] }>
> = {
  dining: {
    kicker: "THREE WAYS TO LINGER",
    title: "A table for every mood.",
    items: [
      { name: "Aur Jalsa", note: "A dedicated pure-vegetarian restaurant celebrating Goan and Indian flavours, served in a room of painted arches.", image: resortAssets.dining },
      { name: "Poolside & Bar", note: "Slow afternoons by the water — small plates, fresh lime sodas and something colder as the sun drops.", image: resortAssets.pool },
      { name: "In-Room Dining", note: "Breakfast on the balcony, dinner in robe and slippers. The kitchen keeps unhurried hours.", image: resortAssets.room },
    ],
  },
  wellness: {
    kicker: "THE RIO LUXURY SPA MENU",
    title: "Rituals that take their time.",
    items: [
      { name: "Abhyanga Warm Oil", note: "A four-hand warm-oil ritual that loosens the week out of your shoulders.", image: resortAssets.spa },
      { name: "Goan Coconut Wrap", note: "Coconut, rice bran and local botanicals — a wrap that smells like the coast.", image: resortAssets.about },
      { name: "Couple's River Suite", note: "Two tables, one quiet hour, and the Baga moving slowly somewhere beyond the window.", image: resortAssets.riverView },
    ],
  },
  celebrations: {
    kicker: "VENUES THAT HOLD A MOMENT",
    title: "A space for every kind of together.",
    items: [
      { name: "Rio World Conference Centre", note: "A pillar-less ballroom and pre-function lawns for conferences that don't feel like conferences.", image: resortAssets.conference },
      { name: "Riverside Wedding Lawns", note: "Open lawns under the palms for the pheras, the toast and the first dance.", image: resortAssets.wedding },
      { name: "Poolside Evening Deck", note: "String lights, a long table and the pool catching the last of the light.", image: resortAssets.evening },
    ],
  },
  discover: {
    kicker: "BEYOND THE GATE",
    title: "Follow the day a little further.",
    items: [
      { name: "360° Virtual Tour", note: "Walk the wings, the lawns and the river edge before you ever pack a bag.", image: resortAssets.river },
      { name: "Big B Casino", note: "An evening that turns into a story, a short drive from the resort gate.", image: resortAssets.evening },
      { name: "North Goa Detours", note: "Spice farms, Saturday markets and the quiet backroads of Bardez.", image: resortAssets.about },
    ],
  },
};

export const editorialMetadata: Record<EditorialPageKey, { title: string; description: string }> = {
  accommodation: {
    title: "Suites & Villas | Resort Rio, Goa",
    description: "Explore 13 rooms, suites and private villas at Resort Rio in Arpora, North Goa, and find your place by the Baga River.",
  },
  dining: {
    title: "Dining & Aur Jalsa | Resort Rio, Goa",
    description: "Discover dining at Resort Rio in North Goa, including Aur Jalsa, its dedicated vegetarian dining experience.",
  },
  wellness: {
    title: "Rio Luxury Spa & Wellness | Resort Rio, Goa",
    description: "Find a quieter moment at Rio Luxury Spa & Wellness at Resort Rio, Arpora, North Goa.",
  },
  celebrations: {
    title: "Weddings & Events | Resort Rio, Goa",
    description: "Plan a wedding, celebration or conference by the Baga River at Resort Rio, Arpora, North Goa.",
  },
  discover: {
    title: "Discover Resort Rio | Resort Rio, Goa",
    description: "Explore the 360° virtual tour, resort offers and experiences at Resort Rio in North Goa.",
  },
};
export const site = {
  name: "Patty Club",
  tagline: "Your neighborhood burger diner",
  phone: "(202) 555-0148",
  phoneHref: "tel:+12025550148",
  email: "hello@pattyclub.example",
  instagram: "@pattyclub.diner",
  instagramHref: "https://instagram.com/pattyclub.diner",
  address: "24 Foundry Lane, Brookside",
  mapsHref: "https://maps.google.com/?q=24+Foundry+Lane+Brookside",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Find us", href: "#find-us" },
];

export const marqueeItems = [
  "Smashed, not complicated",
  "Always cooked to order",
  "Good food. No fuss.",
];

export const menuTabs = ["Burgers", "Sides & fries", "Shakes", "Drinks"];

export const burgers = [
  {
    badge: "The one that started it",
    name: "The Club Classic",
    price: "$10.50",
    description:
      "Double smash patty, American cheese, pickles, grilled onions & our club sauce.",
    image: "/images/club-classic.jpg",
  },
  {
    badge: "Sweet heat",
    name: "Hot Honey Crunch",
    price: "$12.00",
    description:
      "Crispy buttermilk chicken, hot honey glaze, house slaw & a little kick.",
    image: "/images/hot-honey-crunch.jpg",
  },
  {
    badge: "Plant power",
    name: "Garden Party",
    price: "$11.00",
    description:
      "Crispy chickpea patty, lettuce, tomato, pickled onion & herby green mayo.",
    image: "/images/garden-party.jpg",
  },
];

export const sidekicks = [
  { name: "Skin-on fries", price: "$4.00", note: "Sea salt, crispy to the last bite" },
  { name: "Dirty fries", price: "$6.50", note: "Cheese sauce, onions, club sauce" },
  { name: "Thick shakes", price: "$6.00", note: "Vanilla, chocolate or strawberry" },
  { name: "House lemonade", price: "$4.50", note: "Fresh lemon, a little sparkle" },
];

export const lunchDeal = {
  hours: "Mon-Fri / 12-3pm",
  title: ["Your lunch break.", "Upgraded."],
  description: "The Club Classic + skin-on fries + a fountain drink.\nLess deciding. More enjoying.",
  price: "$15.00",
  image: "/images/lunch-deal.jpg",
};

export const about = {
  eyebrow: "A little about us",
  title: ["Not just a burger.", "Your kind", "of place."],
  paragraphs: [
    "Patty Club is built on a simple idea: the best neighborhood spot feels like it's already yours. A booth for your people, a proper burger, and no reason to rush.",
    "We keep the menu tight, the griddle hot, and the welcome warm. Come as you are. Leave with a new favorite.",
  ],
  caption: "There's always room for one more.",
  image: "/images/about.jpg",
  features: [
    { icon: "flame", title: "Hot off the griddle", text: "Smashed fresh. Made when you order." },
    { icon: "heart", title: "The good stuff", text: "Honest ingredients. Nothing to hide." },
    { icon: "users", title: "Everyone's in the club", text: "Your crew, your family, your solo lunch." },
  ] as const,
};

export const reviews = {
  eyebrow: "Good food gets people talking",
  rating: "4.9",
  ratingNote: "out of 5 · 128 sample ratings",
  items: [
    {
      initials: "JR",
      name: "Jamie R.",
      meta: "The Club Classic · Dine in",
      quote:
        "That first bite of the Club Classic? Crispy edges, proper cheese, perfect bun. Already planning my next lunch break.",
    },
    {
      initials: "AM",
      name: "Alex M.",
      meta: "Hot Honey Crunch · Dine in",
      quote:
        "Came for the hot honey chicken. Stayed for the fries, the playlist, and the feeling that we'd found our new regular spot.",
    },
    {
      initials: "ST",
      name: "Sam T.",
      meta: "Garden Party · Take away",
      quote:
        "Finally, a veggie burger that isn't an afterthought. The Garden Party is the real deal. Get a chocolate shake with it.",
    },
  ],
  disclaimer: "Sample reviews for a fictional restaurant concept.",
};

export const social = {
  eyebrow: "A feed worth getting hungry for",
  title: "This is club life.",
  posts: [
    { caption: "Get your hands on it.", image: "/images/feed-1.jpg", alt: "Person holding a burger" },
    { caption: "Fries before everything.", image: "/images/feed-2.jpg", alt: "Loaded fries" },
    { caption: "Save room for the shake.", image: "/images/feed-3.jpg", alt: "Strawberry shake" },
  ],
};

export const location = {
  eyebrow: "Your next stop",
  title: ["Good food.", "Right here."],
  tagline: "By the park. Just follow the good smell.",
  hoursLabel: "When the griddle's on",
  hours: [
    { days: "Monday–Thursday", time: "12pm–9pm" },
    { days: "Friday–Saturday", time: "12pm–11pm" },
    { days: "Sunday", time: "12pm–8pm" },
  ],
  mapNote: "Designed location preview · fictional address",
};

export const contact = {
  eyebrow: "Got a craving? Got a question?",
  title: "Give us a shout.",
  text: "Takeaway orders, big tables, little questions. We're all ears.",
};

export const footer = {
  title: "Your table's waiting.",
  lines: ["A good burger. A familiar face.", "A little more neighborhood in your day."],
  note: "Fictional restaurant concept. Menu, contact details & reviews are sample content.",
  copyright: "© 2026 Patty Club. Big bites. Good times.",
};

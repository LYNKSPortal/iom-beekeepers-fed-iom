export const SITE = {
  name: "Isle of Man Beekeepers Federation",
  shortName: "IoM Beekeepers",
  email: "iombeekeepers@gmail.com",
  phone: "07624 328032",
  phoneNote: "text messages preferred",
  url: "https://www.iombeekeepers.com",
  social: [
    { label: "Facebook", href: "https://www.facebook.com/IOMbeekeepersFed/" },
    { label: "Instagram", href: "https://www.instagram.com/iombeekeepersfed/" },
    { label: "Twitter / X", href: "https://twitter.com/Beekeepersiom/" },
  ],
};

export const NAV = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "The Federation", href: "/about", blurb: "Who we are and what we do" },
      { label: "Local Associations", href: "/associations", blurb: "Southern, Western and Ramsey & District" },
      { label: "Membership", href: "/membership", blurb: "Join a community of 200 beekeepers" },
      { label: "Events", href: "/events", blurb: "Meetings, shows and conventions" },
    ],
  },
  {
    label: "Learn",
    href: "/getting-started",
    children: [
      { label: "Getting Started", href: "/getting-started", blurb: "Your path into beekeeping" },
      { label: "Courses", href: "/courses", blurb: "The winter beginners course" },
      { label: "Apply for a Course", href: "/courses/apply", blurb: "Reserve your place" },
      { label: "Bee Improvement", href: "/bee-improvement", blurb: "The Manx Bee Improvement Group" },
      { label: "Resources", href: "/resources", blurb: "Guides and useful links" },
      { label: "Downloads", href: "/downloads", blurb: "Documents and forms" },
    ],
  },
  {
    label: "Swarms",
    href: "/swarms",
    children: [
      { label: "Found a Swarm?", href: "/swarms", blurb: "What to do, step by step" },
      { label: "Identify It", href: "/swarms/identify", blurb: "Honeybee, wasp or bumblebee?" },
      { label: "Swarm Collectors", href: "/swarms/collectors", blurb: "Volunteer collectors by area" },
      { label: "Request Collection", href: "/swarms/request", blurb: "Report a settled swarm" },
    ],
  },
  { label: "Local Honey", href: "/honey" },
  {
    label: "News",
    href: "/news",
    children: [
      { label: "Latest articles", href: "/news", blurb: "The full journal, newest first" },
      { label: "Asian hornet watch", href: "/news?cat=Asian Hornets", blurb: "Updates on the invasive threat" },
      { label: "Honey Show", href: "/news?cat=Annual Honey Show", blurb: "Results and announcements" },
      { label: "Bee improvement", href: "/news?cat=Manx Bee Improvement Group", blurb: "Breeding better Manx bees" },
      { label: "Events", href: "/events", blurb: "Meetings, shows and conventions" },
    ],
  },
  {
    label: "Beekeeping",
    href: "/legislation",
    children: [
      { label: "Legislation", href: "/legislation", blurb: "The import ban and your duties" },
      { label: "Bee Health", href: "/bee-health", blurb: "Pests and diseases to report" },
      { label: "Asian Hornets", href: "/asian-hornets", blurb: "The yellow-legged threat" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const OFFICERS = [
  { role: "President", name: "Mike Horne" },
  { role: "Vice President", name: "Gary Clueit" },
  { role: "Secretary", name: "Sarah Corlett" },
  { role: "Education Officer", name: "Steve Bassil" },
  { role: "Bee Inspector", name: "Harry Owens" },
  { role: "Webmaster", name: "Joseph Carcas" },
  { role: "Swarm Coordinator", name: "Roger Putman" },
];

export const ASSOCIATIONS = [
  {
    name: "Ramsey & District Beekeepers",
    short: "Ramsey",
    region: "North",
    chair: "Andy Cooper",
    secretary: "Maggie Hughes",
    blurb:
      "Covering the north of the island, Ramsey, Bride, Andreas, Jurby, Sulby and the northern hills, with meetings often hosted at members' own apiaries.",
  },
  {
    name: "Western Beekeepers",
    short: "Western",
    region: "West & Central",
    chair: "Sharon Sutton",
    secretary: "Mike Horne",
    blurb:
      "From Peel and Glen Maye across to Marown and St Marks, the Western association brings together beekeepers in the island's central belt.",
  },
  {
    name: "Southern District Beekeepers",
    short: "Southern",
    region: "South",
    chair: "Debbie Carcas",
    secretary: "Grizelda Taylor",
    blurb:
      "The south, Castletown, Port St Mary, Port Erin, Colby and Ballasalla, home to a lively programme of apiary visits through the season.",
  },
];

export const SWARM_AREAS = [
  {
    area: "North",
    coverage: "The north of the Island down to north of Kirk Michael and north of Laxey",
    collectors: [
      { name: "Callum McKinlay", phone: "400704", note: "All over the North and further afield if necessary" },
      { name: "Andrew Clague-Hicks", phone: "421986", note: "Ballaugh" },
      { name: "Suellen Daniel", phone: "337437", note: "Sulby" },
      { name: "Michael Dougherty", phone: "457686", note: "Ramsey" },
      { name: "Phil Pullen", phone: "430556", note: "Ramsey" },
      { name: "Robert Kneale", phone: "415900", note: "Jurby" },
      { name: "Roger Phillips", phone: "335116", note: "Bride" },
      { name: "Paul Salmon", phone: "451261", note: "Ramsey" },
      { name: "Richard Smith", phone: "480213", note: "Ballaugh to Laxey" },
      { name: "Ethan Grubb", phone: "291168", note: "Anywhere in the north or central areas" },
    ],
  },
  {
    area: "Central",
    coverage: "From Kirk Michael to Laxey and from Dalby to the bottom of Richmond Hill",
    collectors: [
      { name: "Mike Horne", phone: "482982", note: "Peel" },
      { name: "Geoff Thomas", phone: "492431", note: "Braaid" },
      { name: "Ian Elder", phone: "450542", note: "Laxey" },
      { name: "Andy Scarlett", phone: "426509", note: "Glen Maye" },
      { name: "Nicky Watterson", phone: "490017", note: "Dalby" },
      { name: "Sharon Sutton", phone: "482987", note: "Marown to St Marks" },
      { name: "Henry Bridson", phone: "401998", note: "Dalby and anywhere in the west" },
    ],
  },
  {
    area: "South",
    coverage: "From the top of Richmond Hill across to St Marks and Ronague, covering the whole south",
    collectors: [
      { name: "Matty Appetiti", phone: "240160", note: "Anywhere south of Ballasalla" },
      { name: "Jake Callow", phone: "336082", note: "Anywhere south of Ballasalla" },
      { name: "Gwen Kelly", phone: "459197", note: "Santon" },
      { name: "Geoff Thomas", phone: "492431", note: "Braaid" },
      { name: "Mark Saunders", phone: "471594", note: "Ballabeg" },
      { name: "Bronwyn Ward", phone: "480302", note: "Ballasalla (evenings and weekends)" },
      { name: "John Ward", phone: "480319", note: "Ballasalla" },
      { name: "Alan Macnair", phone: "462553", note: "Castletown" },
      { name: "Joe Stockman", phone: "334502", note: "Colby" },
      { name: "Cilla Platt", phone: "429383", note: "Port St Mary" },
      { name: "Margaret Holmes", phone: "435188", note: "Port St Mary" },
      { name: "Roger Putman", phone: "263498", note: "Port Erin" },
      { name: "Juan Kinley", phone: "486938", note: "Port Erin" },
      { name: "Pauline Stewart", phone: "825153", note: "Castletown (away a lot, but you may be lucky)" },
      { name: "Abbie Waddecar-Duggan", phone: "237234", note: "Port Erin to Santon and across to St John's" },
    ],
  },
];

export const SWARM_COORDINATOR = {
  name: "Roger Putman",
  phone: "263498",
  deputy: { name: "Sarah Corlett", phone: "328032" },
};

export const HONEY_PRODUCTS = ["Honey", "Cut Comb", "Beeswax", "Candles", "Hive Products"] as const;
export type HoneyProduct = (typeof HONEY_PRODUCTS)[number];

export const HONEY_PRODUCERS: {
  name: string;
  location: string;
  area: "North" | "Central" | "South" | "East";
  phone: string;
  products: string[];
}[] = [
  { name: "Robert & Gill Kneale", location: "Ballanelson, Jurby East, IM7 3HD", area: "North", phone: "415900", products: ["Honey"] },
  { name: "Suellen Daniel", location: "Sulby River Farm, Glen Duff, Lezayre, IM7 2AT", area: "North", phone: "337437", products: ["Honey"] },
  { name: "Will Radcliffe", location: "Myrtle Villa, Main Rd, Ballaugh, IM7 5EF", area: "North", phone: "491829", products: ["Honey", "Cut Comb"] },
  { name: "Breeshey Brew", location: "Kerroodhoo, St Judes Road, nr Sulby", area: "North", phone: "308647", products: ["Honey", "Beeswax"] },
  { name: "Bryan Lord", location: "Crooked Corner, Glen Rd, Sulby", area: "North", phone: "896024", products: ["Honey", "Beeswax"] },
  { name: "Ethan Grubb", location: "20 Carrick Park, Sulby", area: "North", phone: "291168", products: ["Honey", "Candles", "Hive Products"] },
  { name: "Harry Owens", location: "Broogh-ny-Hawin, Patrick Rd, St Johns, IM4 3BN", area: "Central", phone: "494246", products: ["Honey", "Beeswax"] },
  { name: "Robert Wright", location: "Crosby", area: "Central", phone: "301362", products: ["Honey", "Beeswax"] },
  { name: "Philip Corlett", location: "14 Victoria Place, Douglas", area: "East", phone: "429615", products: ["Honey"] },
  { name: "Pauline Glennon", location: "1 Port e Chee Ave, Douglas", area: "East", phone: "434958 / 499011", products: ["Honey"] },
  { name: "Jon Burgess", location: "129 Woodbourne Road, Douglas", area: "East", phone: "475876", products: ["Honey", "Beeswax", "Candles"] },
  { name: "Henry Bridson", location: "Ballabridson Cottage, Dalby, IM5 3BR", area: "Central", phone: "401998", products: ["Honey", "Cut Comb", "Beeswax", "Candles"] },
  { name: "Esther Mills", location: "Thie Mwyljyn, Richmond Hill", area: "East", phone: "674389", products: ["Honey", "Beeswax", "Candles"] },
  { name: "Cilla Platt", location: "9 The Quay, Port St Mary, IM9 5EA", area: "South", phone: "429383", products: ["Honey"] },
  { name: "John & Bronnie Ward", location: "Donore, Douglas Road, Ballasalla", area: "South", phone: "480319", products: ["Honey", "Beeswax"] },
  { name: "Pauline Stewart", location: "95 Malew Street, Castletown, IM9 1LX", area: "South", phone: "825153", products: ["Honey"] },
  { name: "Gwen Kelly", location: "Ballashamrock Farm, Port Soderick Glen, IM4 1BE", area: "South", phone: "459197", products: ["Honey", "Hive Products"] },
  { name: "The Childrens Centre", location: "Wallberry Farm, Old Castletown Rd, Douglas, IM4 1AQ", area: "East", phone: "800000", products: ["Honey"] },
  { name: "Alan Macnair", location: "Castletown", area: "South", phone: "462553", products: ["Honey", "Beeswax", "Candles"] },
];

export { POSTS } from "./posts-data";

export const EVENTS = [
  {
    slug: "council-meeting-may-2026",
    title: "Federation Council Meeting",
    date: "2026-05-18",
    time: "7:00 pm",
    location: "St John's Methodist Church",
    category: "Council",
    excerpt: "The next Council meeting, all members welcome.",
    body: "The next Council meeting of the Isle of Man Beekeepers Federation will be held at 7pm on Monday, 18th May, 2026 at St John's Methodist Church. All members are welcome to attend.",
  },
  {
    slug: "council-meeting-march-2026",
    title: "Federation Council Meeting",
    date: "2026-03-23",
    time: "7:00 pm",
    location: "St John's Methodist Church",
    category: "Council",
    excerpt: "The next Council meeting, all members welcome.",
    body: "The next Council meeting of the Isle of Man Beekeepers Federation will be held at 7pm on Monday, 23rd March, 2026 at St John's Methodist Church. All members are welcome to attend.",
  },
  {
    slug: "council-meeting-january-2026",
    title: "Federation Council Meeting",
    date: "2026-01-26",
    time: "7:00 pm",
    location: "St John's Methodist Church",
    category: "Council",
    excerpt: "The next Council meeting, all members welcome.",
    body: "The next Council meeting of the Isle of Man Beekeepers Federation will be held at 7pm on Monday, 26th January, 2026 at St John's Methodist Church. All members are welcome to attend.",
  },
  {
    slug: "honey-show-2025",
    title: "Annual Beekeepers Convention & Honey Show",
    date: "2025-11-01",
    time: "2:00 pm - 6:00 pm",
    location: "Methodist Hall, St Johns",
    category: "Honey Show",
    excerpt:
      "Our flagship annual event, classes in honey, wax, mead, baking and photography, judged for the BBKA Blue Riband Prize.",
    body: "The Annual Beekeepers Convention and Honey Show is the centrepiece of the Federation year. Entries across honey, cut comb, wax, candles, mead, baking and photography are judged for the BBKA Blue Riband Prize for Best Exhibit in Show.\n\nVisitors are welcome during public opening, a perfect first encounter with Manx beekeeping.",
  },
];

export const RESOURCES = [
  { name: "Isle of Man Beekeepers (Facebook group)", href: "https://www.facebook.com/groups/1651364511850857/", blurb: "For novices and experts, advice, chat, and equipment sales/exchange" },
  { name: "Ramsey & District Beekeepers Association", href: "https://www.facebook.com/ramseybeekeepers", blurb: "The northern association's own page" },
  { name: "British Beekeepers Association (BBKA)", href: "https://www.bbka.org.uk/", blurb: "Our parent body, training, insurance, bee health guidance" },
  { name: "BBKA Discussion Forum", href: "https://www.bbka.org.uk/members/forum.php", blurb: "Members' forum for beekeeping questions" },
  { name: "BBKA swarm guidance", href: "https://www.bbka.org.uk/swarm", blurb: "How to tell a honeybee swarm from wasps or bumblebees" },
  { name: "BBKA beekeeping legislation", href: "https://www.bbka.org.uk/beekeeping-legislation", blurb: "Honey regulations and labelling requirements" },
  { name: "Bee Improvement and Bee Breeders Association (BIBBA)", href: "https://bibba.com/", blurb: "Bee improvement and the conservation of native bees" },
  { name: "The Native Irish Honey Bee Society (NIHBS)", href: "http://nihbs.org/", blurb: "Conservation of the native dark honeybee" },
  { name: "National Beekeeping Centre, Wales", href: "http://www.beeswales.co.uk/en-GB/Beekeeping-Courses", blurb: "Courses and resources from Wales" },
  { name: "Manx Biodiversity", href: "http://manxbiodiversity.org/", blurb: "Recording the island's wildlife" },
  { name: "Dave Cushman's website", href: "http://www.dave-cushman.net/", blurb: "A huge archive of practical beekeeping information" },
  { name: "Randy Oliver's Scientific Beekeeping", href: "http://scientificbeekeeping.com/", blurb: "Evidence-based beekeeping research" },
  { name: "DEFA, Environment, Food and Agriculture", href: "https://www.gov.im/about-the-government/departments/environment-food-and-agriculture/", blurb: "The island department responsible for bees" },
  { name: "Isle of Man Government, bees", href: "https://www.gov.im/categories/business-and-industries/agriculture/bees/", blurb: "Register your bee holding with DEFA" },
];

export const DOWNLOADS = [
  { name: "Federation Constitution (2026)", href: "/media/uploads/2026/06/IOMBK-Fed-Constitution-version-2026-04-25.pdf", type: "PDF" },
  { name: "Federation Bylaws (2026)", href: "/media/uploads/2026/06/IOMBK-Fed-Bylaws-Version-2026-04-25.pdf", type: "PDF" },
  { name: "Importation of Bees Order, 1988", href: "/media/uploads/2015/08/Importation-of-Bees-Order-1988.pdf", type: "PDF" },
  { name: "Isle of Man Bees Act, 1989", href: "/media/uploads/2015/08/Bees-Act-1989.pdf", type: "PDF" },
  { name: "Bee Disease and Pest Control Order, 2008", href: "/media/uploads/2015/08/Bee-Disease-Pest-Control-Order-2008.pdf", type: "PDF" },
  { name: "EU Order 2015 confirming the importation ban", href: "http://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=OJ:L:2015:045:FULL&from=E", type: "PDF" },
];

export const COURSE_TOPICS = [
  "What a honey bee looks like, plus a little anatomy",
  "What happens inside and outside the hive through the year",
  "The role of each member of the honey bee family",
  "Swarm prevention and control",
  "Pests and diseases of honey bees",
  "A little history of bees and beekeeping",
  "What to look for when setting up your own apiary",
  "Mistakes new and experienced beekeepers make, and how to avoid them",
];

export const PRACTICAL_TOPICS = [
  "How to open a hive of bees",
  "What you're seeing inside the hive, and what to look for",
  "Understanding swarming: spotting it and controlling it",
  "Harvesting your honey crop",
  "Caring for bees before and during winter",
  "Why holidays in May and June are off the agenda until your artificial swarms are made",
];

export const REPORTABLE_DISEASES = [
  { name: "American Foulbrood", latin: "Paenibacillus larvae", severity: "Destroy", blurb: "Spore-forming bacterial disease killing 100% of infected larvae. Sunken, dark, greasy cappings; the matchstick 'rope' test is diagnostic. Infected colonies must be destroyed completely." },
  { name: "European Foulbrood", latin: "Melissococcus plutonius", severity: "Notifiable", blurb: "Gut pathogen causing larvae to yellow, 'melt' and dry into dark scales. Patchy, erratic brood pattern. Bees can be shook-swarmed onto fresh frames; contaminated comb must be destroyed." },
  { name: "Varroa", latin: "Varroa destructor", severity: "Notifiable, absent from IoM", blurb: "Parasitic mite of brood, vector of deformed wing virus. Flat reddish-brown oval ~1.6mm. If it arrives, we shall all have it within the year, the import ban exists to keep it out." },
  { name: "Tropilaelaps mite", latin: "Tropilaelaps spp.", severity: "Notifiable, absent", blurb: "Fast-running elongated mite native to Asia, reproducing faster than Varroa. Cannot survive long outside sealed brood, a weakness that aids control." },
  { name: "Small Hive Beetle", latin: "Aethina tumida", severity: "Notifiable, absent", blurb: "Black 5 - 7mm beetle that scuttles from the light; larvae eat brood, honey and pollen and ferment honey. Present in Italy, not yet the UK." },
];

export const IMAGES = {
  hero: "/images/bee-flower.jpg",
  beekeeper: "/images/beekeeper.jpg",
  bees: "/images/bees-flying.jpg",
  honey: "/images/honey-jar.jpg",
  forest: "/images/forest.jpg",
  poppies: "/images/poppies.jpg",
  hills: "/images/hills.jpg",
  glen: "/images/glen.jpg",
  flowers: "/images/flowers-yellow.jpg",
  field: "/images/field-sunset.jpg",
  tree: "/images/tree.jpg",
  wisteria: "/images/wisteria.jpg",
};

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

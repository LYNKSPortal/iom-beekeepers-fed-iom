import postsJson from "./posts.json";

export type Post = {
  slug: string;
  title: string;
  date: string;
  categories: string[];
  category: string;
  excerpt: string;
  html: string;
  image: string;
};

const CAT_NAMES: Record<string, string> = {
  "annual-honey-show": "Annual Honey Show",
  "manx-bee-improvement-group": "Manx Bee Improvement Group",
  "asian-hornets": "Asian Hornets",
  "bee-importation-ban": "Bee Importation Ban",
  "bee-education": "Bee Education",
  "bee-health": "Bee Health",
  "bee-inspector": "Bee Inspector",
  "bee-inspections": "Bee Inspections",
  "queen-rearing": "Queen Rearing",
  "roger-patterson": "Roger Patterson",
  "ramsey-district": "Ramsey & District",
  "southern-beekeepers": "Southern Beekeepers",
  "southern-agricultural-show": "Southern Agricultural Show",
  "royal-agricultural-show": "Royal Agricultural Show",
  "visiting-lecturers": "Visiting Lecturers",
  "fed-constitution": "Fed Constitution",
  "fed-history": "Fed History",
  "new-marown-training-apiary": "Marown Training Apiary",
  "manx-lottery-trust": "Manx Lottery Trust",
  "in-the-apiary": "In the Apiary",
  "all-things-wax": "All Things Wax",
  "wax-creations": "Wax Creations",
  "black-bees": "Black Bees",
  "bee-exports": "Bee Exports",
  "import-penalty": "Import Penalty",
  "michael-badger": "Michael Badger",
  "mining-bees": "Mining Bees",
  "monthly-news": "Monthly News",
  "national-honey-show": "National Honey Show",
  "iom-flower-festival": "IoM Flower Festival",
  "iom-food-and-drink-fesitval": "IoM Food & Drink Festival",
  "manuka-honey": "Manuka Honey",
  "presidential-visits": "Presidential Visits",
  "shirrah-ny_ree": "Shirrah-ny-Ree",
  "top-bar-hives": "Top Bar Hives",
  "family-day": "Family Day",
  "honey-sales": "Honey Sales",
  "a-personal-tribute": "A Personal Tribute",
  "ted-talks": "TED Talks",
  "festival-of-trees": "Festival of Trees",
  "vita-honey-bee-health-initiative-awards": "Vita Bee Health Awards",
  "bee-exports-2": "Bee Exports",
  "stuff": "General",
};

function catName(slug: string) {
  const s = slug.replace(/^category-/, "");
  return (
    CAT_NAMES[s] ??
    s
      .split(/[-_]/)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")
  );
}

export const POSTS: Post[] = (postsJson as Omit<Post, "category">[]).map((p) => ({
  ...p,
  category: p.categories.length ? catName(p.categories[0]) : "Federation",
}));

export const POST_CATEGORIES = Array.from(new Set(POSTS.map((p) => p.category))).sort();

import React, { useState } from 'react';
import { Search, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CATEGORIES = ["All Genres", "Sci-Fi", "High Fantasy", "Noir Mystery", "Cyberpunk", "Gothic Horror"];

const BOOKS = [
  {
    id: 1,
    title: "Neon Protocol",
    category: "Sci-Fi",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBN3fwCp7zPyJ19BSYxg2mWj-CZ4QiHOqe1II0JXiWktqjj5m4nZJSsljb3HKXXX1UPa_rk9vh9vDlyvroKdb1FRSu38Jnrg5MPpLBsYaGKgASnei2UenugMbDoI5tsL94l1ig4obWpLkV5kYmPCLJfeXVf40opVL0Pn7JknlulQ_0v_gX8ijsgqxbCBk1M_Ge83FhVPNHue9cA_LWIiE4qJxcfn96tqk6VRz9Doh_wRQYf3qhFOk6Ym3tfK_-8X-Lm-1H6DZV2_9c",
    description: "A world where memories are currency. Build a narrative centered around the last 'pure' human in a city of uploaded consciousness."
  },
  {
    id: 2,
    title: "The Root of All Lore",
    category: "High Fantasy",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEkSZHvySA-K87Aovi8BFNSqw2eFbiXNwZWSPjBcFYixGdEZilztyG04HUjGCR8r8ykajcuOzjtkgO0F8mPnNBwJmY8xpPjEfSS-Lt2reX5tzfmZVSHtLkBga2UTIoZ2vyg2NfnuSZ6Iep9RY3Ae2TIiNjkZhAGOgx3awEahMIVVo20tTfj2QBO1dCHg4ZSOajN4VDCVjjcXA4kO2tW31hMmQsTbpv4mMsbjXp-NZnZgi7r29d3N6tN85gRAw953YOdAkaj1Ut8fo",
    description: "Deep within the Great Tree lies the origin of magic. Craft a quest to reclaim the stolen seeds of reality from the void."
  },
  {
    id: 3,
    title: "Static Whispers",
    category: "Noir Mystery",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeWOAS3UwG5pgRBoCUe4bkVix3YOqiQl5z7Whw_H0gvGUA9g2tnfWjL21r7AG3MN8EYn0glY738eWnQw3qjKEP3jQzMWQ93zSTDCNWxz21YMuA9oOZcYWsl_f4z_sr9SgYxnQyRFTVpEktepq0Q5Z_zqXwiT2NrbAhLBLIaTTlBWiiWa0Ucx5c3dBo-n_1mQp-d1cq6kwZHbUkRoU0mIV29OVpRcexzY5L24UxRl3jAmJVRpnm61W17upmOS28hrusVCS__TMBEzw",
    description: "Every radio in the city is broadcasting the same secret message. Only your protagonist knows how to decode the frequency."
  },
  {
    id: 4,
    title: "Chrome & Rust",
    category: "Cyberpunk",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQczHzP6Tyy5XCv0oRGKvVOSRb0aodwnzlLTLTx-1rkSAnPPlcst3kP-6ZkTV-XaODA6olGUxr3iNGppTn9E1pPwX8pCfLcU5PalX60N5mMS1AnuAZYjuCsyA_xOThVpD8T-DBR1MAGFGAHLOINtgASoqXSYXjE2bsU9rpoRRQBRWsI9_c5TkkaLjxr5vm8Wku9HyQs5xi45P-xEVU4e0xH5Vim2GdMydnaaWmdV8uwF5ILReH-IrU5whEh7LU3IpSm7IRAosl0i0",
    description: "In the underbelly of Sector 7, a rogue AI is granting wishes for a terrible price. You must stop it before it consumes the grid."
  },
  {
    id: 5,
    title: "Blood of the Manor",
    category: "Gothic Horror",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqGce6-d2xLbsWuB2Q7hE-y5y7LKVu71gq1uUvgDzis1fr4JHafBMpu6uI5k-MXqT0v0i0odIYr1CPiFMYSOX9LK_mTDEwZQjsUksoD94ku_J_Nft5diitcEFuexA1SltaqMKXzBpRqz9lMJkG6MLj1977EYNQAEMnIVJD01xYfoac1Iojwb1jxAD05EuMfkhRzRN0JxW_KnTG9mcnKrAG7dFx_GAr3EwRrvlW2_pf3V9Q7xoTxxcI3MAjPte8yLNbDFBmd1X_3C8",
    description: "An inherited estate holds a dark secret in its walls. Survive the night and uncover the curse of your ancestors."
  }
];

export default function Store() {
  const [selectedCategory, setSelectedCategory] = useState("All Genres");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = BOOKS.filter(book => {
    const matchesCategory = selectedCategory === "All Genres" || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          book.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      {/* Search & Header Section */}
      <section className="mb-12">
        <h2 className="font-headline italic text-4xl text-on-surface mb-6 tracking-tight">The Eternal Library</h2>
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="text-outline w-5 h-5" />
          </div>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-surface-container-low border-transparent focus:border-primary/50 focus:ring-0 rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/60 transition-all duration-300 ease-out-expo shadow-sm"
            placeholder="Search story architectures or authors..."
            type="text"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="mb-14">
        <div className="flex gap-3 overflow-x-auto pb-4 pt-1 px-1 -mx-1 no-scrollbar">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium whitespace-nowrap shadow-md transition-all ${
                selectedCategory === category
                  ? 'bg-secondary text-on-secondary'
                  : 'bg-surface-container-high text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Templates Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <Link key={book.id} to="/read" className="group flex flex-col bg-surface-container-low rounded-xl overflow-hidden hover:translate-y-[-8px] transition-all duration-500 ease-out-expo shadow-sm hover:shadow-xl">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={book.title}
                  src={book.image}
                />
                <div className="absolute inset-0 holographic-overlay opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase tracking-widest text-secondary-fixed-dim font-bold mb-1 block">
                    {book.category}
                  </span>
                  <h3 className="font-headline italic text-2xl text-white">{book.title}</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="font-body text-on-surface-variant leading-relaxed mb-6 line-clamp-3">
                  {book.description}
                </p>
                <div className="mt-auto">
                  <div className="w-full bg-secondary text-on-secondary rounded-full py-3 px-6 flex items-center justify-center gap-2 hover:bg-on-secondary-fixed-variant transition-all active:scale-95 duration-300">
                    <Zap className="w-4 h-4 fill-current" />
                    <span className="font-semibold text-sm">Start Building</span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <p className="text-on-surface-variant font-label text-lg">No stories found matching your criteria.</p>
            <button 
              onClick={() => { setSelectedCategory("All Genres"); setSearchQuery(""); }}
              className="mt-4 text-primary font-bold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

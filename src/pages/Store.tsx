import React from 'react';
import { Search, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Store() {
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
            className="w-full bg-surface-container-low border-transparent focus:border-primary/50 focus:ring-0 rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline/60 transition-all duration-300 ease-out-expo shadow-sm"
            placeholder="Search story architectures or authors..."
            type="text"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="mb-14">
        <div className="flex gap-3 overflow-x-auto pb-4 pt-1 px-1 -mx-1 no-scrollbar">
          <button className="px-6 py-2 rounded-full bg-secondary text-on-secondary font-medium whitespace-nowrap shadow-md transition-all">
            All Genres
          </button>
          <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container transition-all whitespace-nowrap">
            Sci-Fi
          </button>
          <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container transition-all whitespace-nowrap">
            High Fantasy
          </button>
          <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container transition-all whitespace-nowrap">
            Noir Mystery
          </button>
          <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container transition-all whitespace-nowrap">
            Cyberpunk
          </button>
          <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container transition-all whitespace-nowrap">
            Gothic Horror
          </button>
        </div>
      </section>

      {/* Featured Templates Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div className="group flex flex-col bg-surface-container-low rounded-xl overflow-hidden hover:translate-y-[-8px] transition-all duration-500 ease-out-expo shadow-sm hover:shadow-xl">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Futuristic cityscape at night with neon holographic structures reflecting in rain-slicked dark streets"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN3fwCp7zPyJ19BSYxg2mWj-CZ4QiHOqe1II0JXiWktqjj5m4nZJSsljb3HKXXX1UPa_rk9vh9vDlyvroKdb1FRSu38Jnrg5MPpLBsYaGKgASnei2UenugMbDoI5tsL94l1ig4obWpLkV5kYmPCLJfeXVf40opVL0Pn7JknlulQ_0v_gX8ijsgqxbCBk1M_Ge83FhVPNHue9cA_LWIiE4qJxcfn96tqk6VRz9Doh_wRQYf3qhFOk6Ym3tfK_-8X-Lm-1H6DZV2_9c"
            />
            <div className="absolute inset-0 holographic-overlay opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] uppercase tracking-widest text-secondary-fixed-dim font-bold mb-1 block">
                Sci-Fi Architecture
              </span>
              <h3 className="font-headline italic text-2xl text-white">Neon Protocol</h3>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <p className="font-body text-on-surface-variant leading-relaxed mb-6 line-clamp-3">
              A world where memories are currency. Build a narrative centered around the last 'pure' human in a city of uploaded consciousness.
            </p>
            <div className="mt-auto">
              <Link to="/read" className="w-full bg-secondary text-on-secondary rounded-full py-3 px-6 flex items-center justify-center gap-2 hover:bg-on-secondary-fixed-variant transition-all active:scale-95 duration-300">
                <Zap className="w-4 h-4 fill-current" />
                <span className="font-semibold text-sm">Start Building</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group flex flex-col bg-surface-container-low rounded-xl overflow-hidden hover:translate-y-[-8px] transition-all duration-500 ease-out-expo shadow-sm hover:shadow-xl">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Ancient stone library hidden inside a massive hollow tree with glowing mystical spores floating in the air"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEkSZHvySA-K87Aovi8BFNSqw2eFbiXNwZWSPjBcFYixGdEZilztyG04HUjGCR8r8ykajcuOzjtkgO0F8mPnNBwJmY8xpPjEfSS-Lt2reX5tzfmZVSHtLkBga2UTIoZ2vyg2NfnuSZ6Iep9RY3Ae2TIiNjkZhAGOgx3awEahMIVVo20tTfj2QBO1dCHg4ZSOajN4VDCVjjcXA4kO2tW31hMmQsTbpv4mMsbjXp-NZnZgi7r29d3N6tN85gRAw953YOdAkaj1Ut8fo"
            />
            <div className="absolute inset-0 holographic-overlay opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] uppercase tracking-widest text-secondary-fixed-dim font-bold mb-1 block">
                High Fantasy
              </span>
              <h3 className="font-headline italic text-2xl text-white">The Root of All Lore</h3>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <p className="font-body text-on-surface-variant leading-relaxed mb-6 line-clamp-3">
              Deep within the Great Tree lies the origin of magic. Craft a quest to reclaim the stolen seeds of reality from the void.
            </p>
            <div className="mt-auto">
              <Link to="/read" className="w-full bg-secondary text-on-secondary rounded-full py-3 px-6 flex items-center justify-center gap-2 hover:bg-on-secondary-fixed-variant transition-all active:scale-95 duration-300">
                <Zap className="w-4 h-4 fill-current" />
                <span className="font-semibold text-sm">Start Building</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group flex flex-col bg-surface-container-low rounded-xl overflow-hidden hover:translate-y-[-8px] transition-all duration-500 ease-out-expo shadow-sm hover:shadow-xl">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Dramatic silhouette of a detective in a trench coat standing under a flickering street lamp in fog"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeWOAS3UwG5pgRBoCUe4bkVix3YOqiQl5z7Whw_H0gvGUA9g2tnfWjL21r7AG3MN8EYn0glY738eWnQw3qjKEP3jQzMWQ93zSTDCNWxz21YMuA9oOZcYWsl_f4z_sr9SgYxnQyRFTVpEktepq0Q5Z_zqXwiT2NrbAhLBLIaTTlBWiiWa0Ucx5c3dBo-n_1mQp-d1cq6kwZHbUkRoU0mIV29OVpRcexzY5L24UxRl3jAmJVRpnm61W17upmOS28hrusVCS__TMBEzw"
            />
            <div className="absolute inset-0 holographic-overlay opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] uppercase tracking-widest text-secondary-fixed-dim font-bold mb-1 block">
                Noir Mystery
              </span>
              <h3 className="font-headline italic text-2xl text-white">Static Whispers</h3>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <p className="font-body text-on-surface-variant leading-relaxed mb-6 line-clamp-3">
              Every radio in the city is broadcasting the same secret message. Only your protagonist knows how to decode the frequency.
            </p>
            <div className="mt-auto">
              <Link to="/read" className="w-full bg-secondary text-on-secondary rounded-full py-3 px-6 flex items-center justify-center gap-2 hover:bg-on-secondary-fixed-variant transition-all active:scale-95 duration-300">
                <Zap className="w-4 h-4 fill-current" />
                <span className="font-semibold text-sm">Start Building</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

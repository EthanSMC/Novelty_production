import React from 'react';
import { Plus, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Bookshelf() {
  return (
    <main className="py-8 px-6 max-w-7xl mx-auto">
      {/* Stories in Progress (Asymmetric Bento Grid) */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-headline text-2xl italic font-semibold">Stories in Progress</h3>
          <span className="h-[1px] flex-grow mx-6 bg-outline-variant opacity-20"></span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Feature Story Card */}
          <Link to="/read" className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low p-1 transition-all duration-500 hover:shadow-xl flex flex-col">
            <div className="relative flex-grow w-full rounded-[calc(1.5rem-4px)] overflow-hidden min-h-[400px]">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Atmospheric mysterious forest at night with bioluminescent plants and floating embers, dark teal and indigo color palette"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOyRnMS2YPbbHf_ErPEdSm5M_foFd0uy1-pblBpvasH9zbEPekxAkUH_aQ18oF6-1WzyZwELzveJcG-hc4OnLkJ_RMlNO5S8rbgXqMJqlbNp49DoSTvkGTq3d2AVmNpGs44R3LChYOpJ4NhCgKRqVuWZbUZsGRCS0euoNFEsMEENHi07SDXJCsNLfXvbRyyJT6-IQ8qPTzZzBkLmOshF7DFHBUItoDnIGB2UuOtwr2GuUEXYViHpKHRbEpREYhhdjhoeDw8pvpyio"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-secondary text-on-secondary font-label text-[10px] tracking-widest uppercase">
                    Chapter 14
                  </span>
                  <span className="font-label text-white/80 text-xs">82% Complete</span>
                </div>
                <h4 className="font-headline text-3xl text-white font-bold mb-2">The Echo of Neon Petals</h4>
                <p className="text-white/70 max-w-md line-clamp-2 italic mb-6">
                  In the heart of the silicon jungle, she found a flower that whispered secrets of a forgotten sun.
                </p>
                <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full w-[82%] rounded-full"></div>
                </div>
              </div>
            </div>
          </Link>

          {/* Secondary Progress Card */}
          <Link to="/read" className="md:col-span-4 group flex flex-col justify-between bg-surface-container-low rounded-xl p-6 transition-all duration-300 hover:bg-surface-container block">
            <div className="aspect-[3/4] w-full rounded-lg overflow-hidden mb-6 shadow-md">
              <img
                className="w-full h-full object-cover"
                alt="Old leather bound book on a rustic wooden table with a single candle flame reflecting in a window, warm cozy lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqGce6-d2xLbsWuB2Q7hE-y5y7LKVu71gq1uUvgDzis1fr4JHafBMpu6uI5k-MXqT0v0i0odIYr1CPiFMYSOX9LK_mTDEwZQjsUksoD94ku_J_Nft5diitcEFuexA1SltaqMKXzBpRqz9lMJkG6MLj1977EYNQAEMnIVJD01xYfoac1Iojwb1jxAD05EuMfkhRzRN0JxW_KnTG9mcnKrAG7dFx_GAr3EwRrvlW2_pf3V9Q7xoTxxcI3MAjPte8yLNbDFBmd1X_3C8"
              />
            </div>
            <div>
              <span className="font-label text-[10px] text-primary tracking-widest uppercase font-bold">Chapter 3 • 15%</span>
              <h4 className="font-headline text-xl font-bold mt-1">Dust & Divinity</h4>
              <p className="font-body text-on-surface-variant text-sm mt-2 line-clamp-2 italic">
                A tale of alchemists and the cost of eternal life.
              </p>
            </div>
          </Link>

          {/* Third Progress Card */}
          <Link to="/read" className="md:col-span-4 group bg-surface-container-low rounded-xl p-6 transition-all duration-300 hover:bg-surface-container block">
            <div className="flex gap-4 items-start">
              <div className="w-24 h-32 flex-shrink-0 rounded-md overflow-hidden shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  alt="Surreal clock melting over a desert landscape with dramatic shadows, Dali inspired digital art"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjRmCvAG4g_O0346kIIflcu3rRVbxUFsdIq8RO_nDdCrXQp9AtrEumtFDMu5-TMfHhA6PcFaUBeQWuliwGIQWCtivQX8rVhPOb92HDztxFOcxxFSSMSw4qHDr2EDZ4QsSbd_DOOzqM_XX1J15Nb6pu771hsY2Hfpl2Xf9_RJ1VUR888lTm47dZxdOAPFfH--SRLH2MK3KV3f8G8qyldZg7RVFZ5SI3qPcikSd4Nh_p28BjWfQ0-Iz1WOATJ2A5E9zK_N7XELWiYHk"
                />
              </div>
              <div className="flex-grow">
                <span className="font-label text-[10px] text-tertiary tracking-widest uppercase font-bold">Chapter 8 • 45%</span>
                <h4 className="font-headline text-lg font-bold mt-1 leading-tight">Chronos Protocol</h4>
                <div className="mt-4 w-full bg-outline-variant/20 h-1 rounded-full overflow-hidden">
                  <div className="bg-tertiary h-full w-[45%]"></div>
                </div>
              </div>
            </div>
          </Link>

          {/* AI Suggestion Card */}
          <div className="md:col-span-8 bg-primary-container/20 rounded-xl p-8 border border-primary/10 flex items-center gap-8 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]"></div>
            <div className="relative z-10 hidden sm:block">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary">
                <BrainCircuit className="w-8 h-8" />
              </div>
            </div>
            <div className="relative z-10">
              <h4 className="font-headline text-xl font-bold text-on-primary-container">Writer's Block?</h4>
              <p className="font-body text-on-primary-container/80 mt-1">
                The Muse suggests a plot twist for <span className="italic font-semibold">"Dust & Divinity"</span> involving a hidden chamber.
              </p>
              <Link to="/read" className="inline-block mt-4 px-5 py-2 rounded-full bg-primary text-on-primary font-label text-xs font-bold tracking-wide uppercase hover:scale-105 transition-transform duration-300 ease-out-expo">
                Continue Writing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Finished Masterpieces */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-headline text-2xl italic font-semibold">Finished Masterpieces</h3>
          <span className="h-[1px] flex-grow mx-6 bg-outline-variant opacity-20"></span>
          <Link to="/store" className="font-label text-xs font-bold text-primary uppercase tracking-widest hover:opacity-70 transition-opacity">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {/* Book Item 1 */}
          <Link to="/read" className="group cursor-pointer block">
            <div className="aspect-[2/3] w-full bg-surface-container-highest rounded-lg overflow-hidden mb-3 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
              <img
                className="w-full h-full object-cover"
                alt="Elegant classic book cover with gold foil lettering and minimalist design on deep navy background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDvkHWwqnl_SBjjOwfjziR_-c6T-5pccMoVpXP1zfY-IyOWqA9R9-RH_cHYk_nqYc4aSSEnqatGdG7-EhVU0BUWF-MvlAXHRRq-GaYG4MaYRkBtnrYMU1OTahMsaZVFDFR4pOCwX6SIE0ePi1Z36HgeREvq3kTylBsYPS4QrIOdgRn-gcD2oVPm3ySn-62pnWea7U3pmd-7ZPYP-C0NWkFANHswdv4jgJWrS5uEKRkpazuFPRb-ykTXg7BiZD3k0z553MnJLdFnDs"
              />
            </div>
            <h5 className="font-headline font-bold text-on-surface group-hover:text-primary transition-colors">The Last Librarian</h5>
            <p className="font-label text-[10px] text-on-surface-variant opacity-60 uppercase tracking-tighter">Completed Oct 2023</p>
          </Link>

          {/* Book Item 2 */}
          <Link to="/read" className="group cursor-pointer block">
            <div className="aspect-[2/3] w-full bg-surface-container-highest rounded-lg overflow-hidden mb-3 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
              <img
                className="w-full h-full object-cover"
                alt="Fantasy landscape with floating islands and waterfalls at sunset, vivid purple and orange tones"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFx3fvVjgEV8QXqmP5V5QqmetrkA0e-rCUmzfwBONdTLG8ZPX1Rj1lwnRqo973iJtNyLW5DFqeC7r6Cf9QPZw_7I3nGEUnRm1PdOHqRXmyjypsK8wMTylPUVILtBO5HttkRMGZ4ZBhJpiZP5tkYcXKJUiBRTDZHoO5sf2t4nPfzJegsCvWXKlqTyafwTAIneMXcRKU46X5z_jCAFIDA_JngGA2e7wwrg7Ukos1BEaIcKiNR10PaP-EHpUZi2pf2gge9DDPxueADBo"
              />
            </div>
            <h5 className="font-headline font-bold text-on-surface group-hover:text-primary transition-colors">Beyond Aether</h5>
            <p className="font-label text-[10px] text-on-surface-variant opacity-60 uppercase tracking-tighter">Completed Aug 2023</p>
          </Link>

          {/* Book Item 3 */}
          <Link to="/read" className="group cursor-pointer block">
            <div className="aspect-[2/3] w-full bg-surface-container-highest rounded-lg overflow-hidden mb-3 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
              <img
                className="w-full h-full object-cover"
                alt="Dramatic mountain peak under a starry sky with a bright moon, monochrome black and white photography"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXLxm3MDDnhIoRD8FDPKqjMG8a0pnd7zTSUtRaqQdgGk--gM1gWWGaPQU8vbWUtlFfKWhbE88I8K6SpJeK9EFkIQ9BsnWCdUz4WajPvE_TKtCEbhroYgbX1VGbHOXS4a0tdcNopH0RUclV6gOZsM1_5_77PcDLcWocS-DkBmbUDWnohGFNWSimz05m2fN0gnNWMFYyLm_2Yr94bBwFccFWRrkYVSKbCdK73dNIAsxP59bB6IrPZz_7eKHzqug3XxT1nrBYIB9SDH8"
              />
            </div>
            <h5 className="font-headline font-bold text-on-surface group-hover:text-primary transition-colors">Summit of Silence</h5>
            <p className="font-label text-[10px] text-on-surface-variant opacity-60 uppercase tracking-tighter">Completed Jun 2023</p>
          </Link>

          {/* Book Item 4 */}
          <Link to="/read" className="group cursor-pointer block">
            <div className="aspect-[2/3] w-full bg-surface-container-highest rounded-lg overflow-hidden mb-3 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
              <img
                className="w-full h-full object-cover"
                alt="Abstract watercolor wash of soft blues and teals with gold leaf accents, dreamy texture"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIiZ6fjBOirI_ChoaUj1oh8RGWVrTmnbCNhz1GDKlqWAyceXziJj30h9VRFoNxR6XCKaj3QPy4Ll41OyAtnXF0-b4wFbmTAQrXEAiBZD6bK1TW2ZJxIH6p9O5h9qjqEB7W1p0dEzHVV2CBmrejMBC9nVS4nBDNGYnLQ_5iaLEDQ6tlhhi9E1_7jCymrOTtAr_F-y4uqyUXM3Zbl6zFKpSwU8LoOfY6ErErR8oJEoMNHsWeEJBq76I6iBEc08WxThC4z1yqZgPCbZc"
              />
            </div>
            <h5 className="font-headline font-bold text-on-surface group-hover:text-primary transition-colors">Tides of Thought</h5>
            <p className="font-label text-[10px] text-on-surface-variant opacity-60 uppercase tracking-tighter">Completed May 2023</p>
          </Link>

          {/* Book Item 5 */}
          <Link to="/read" className="group cursor-pointer block">
            <div className="aspect-[2/3] w-full bg-surface-container-highest rounded-lg overflow-hidden mb-3 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
              <img
                className="w-full h-full object-cover"
                alt="Cyberpunk city street with rain-slicked pavement and neon signs, electric blue and hot pink lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQczHzP6Tyy5XCv0oRGKvVOSRb0aodwnzlLTLTx-1rkSAnPPlcst3kP-6ZkTV-XaODA6olGUxr3iNGppTn9E1pPwX8pCfLcU5PalX60N5mMS1AnuAZYjuCsyA_xOThVpD8T-DBR1MAGFGAHLOINtgASoqXSYXjE2bsU9rpoRRQBRWsI9_c5TkkaLjxr5vm8Wku9HyQs5xi45P-xEVU4e0xH5Vim2GdMydnaaWmdV8uwF5ILReH-IrU5whEh7LU3IpSm7IRAosl0i0"
              />
            </div>
            <h5 className="font-headline font-bold text-on-surface group-hover:text-primary transition-colors">Neon Genesis</h5>
            <p className="font-label text-[10px] text-on-surface-variant opacity-60 uppercase tracking-tighter">Completed Mar 2023</p>
          </Link>

          {/* Book Item 6 */}
          <Link to="/read" className="group cursor-pointer block">
            <div className="aspect-[2/3] w-full bg-surface-container-highest rounded-lg overflow-hidden mb-3 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
              <img
                className="w-full h-full object-cover"
                alt="Macro photo of ancient rusted clockwork gears, warm metallic tones and shallow depth of field"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0ousLWEJNWd_wNTYj2I6F6hj7xpwQfmH9o28ulzVvci3lXrPp20f5JkYDfEpaC_3gA4aduGl-IRfk7FadJJP8AGtkS2c-D2joDsnuH7Sak4XIJFWCmD1TL136ddJJRK55B1zXaQHlO1cXIjuqvkmUUOly04DUFkEKGQHgPJ7_Ysj6MyQrru3ohHVVP6FM8q4gaEKXN5JEJ_GK_e8-0o-pp7BvyjpxSXIu30BFCDpxZp5zlijaDQkszCLChP-AxnkAVWuONPsN7wM"
              />
            </div>
            <h5 className="font-headline font-bold text-on-surface group-hover:text-primary transition-colors">Brass & Bone</h5>
            <p className="font-label text-[10px] text-on-surface-variant opacity-60 uppercase tracking-tighter">Completed Jan 2023</p>
          </Link>
        </div>
      </section>

      {/* Floating Action Button */}
      <Link to="/store" className="fixed right-6 bottom-24 z-50 w-16 h-16 bg-secondary text-on-secondary rounded-full shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 ease-out-expo flex items-center justify-center group">
        <Plus className="w-8 h-8" />
        <span className="absolute right-full mr-4 px-4 py-2 bg-inverse-surface text-inverse-on-surface text-xs font-label rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          New Story
        </span>
      </Link>
    </main>
  );
}

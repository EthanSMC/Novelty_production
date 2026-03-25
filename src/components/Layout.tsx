import React, { useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Search, UserCircle, Library, Store } from 'lucide-react';
import clsx from 'clsx';

export default function Layout() {
  const location = useLocation();
  const isReading = location.pathname.startsWith('/read');

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      document.body.classList.add('is-scrolling');
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove('is-scrolling');
      }, 3000);
    };

    // Use capture phase to detect scroll events from any scrollable child
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-background text-on-surface font-label selection:bg-primary-container selection:text-on-primary-container">
      {/* TopAppBar */}
      <header className="flex-none bg-surface flex justify-between items-center w-full px-6 py-4 z-50 relative">
        <Link to="/" className="flex items-center gap-3 group">
          <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 text-on-surface group-hover:opacity-70 transition-opacity">
            {/* Top edges */}
            <path d="M 6 10 L 20 13 L 34 10" />
            {/* Bottom edges */}
            <path d="M 6 30 L 20 33 L 34 30" />
            {/* Side edges */}
            <path d="M 6 10 L 6 30" />
            <path d="M 34 10 L 34 30" />
            {/* Center Spine */}
            <path d="M 20 13 L 20 33" />
            
            {/* Left Page Diagonal */}
            <path d="M 6 10 L 20 33" />

            {/* Right Page Diagonal */}
            <path d="M 34 10 L 20 33" />
          </svg>
          <div className="flex flex-col justify-center">
            <span className="font-label font-light text-xl text-on-surface tracking-[0.2em] uppercase leading-none">
              Novelty
            </span>
          </div>
        </Link>

        {isReading && (
          <div className="hidden md:flex items-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Currently Reading</span>
              <span className="font-headline italic text-lg text-on-surface">The Alchemist's Shadow</span>
            </div>
          </div>
        )}

        <div className="flex items-center gap-4">
          {!isReading && (
            <button className="p-2 rounded-full hover:bg-surface-container transition-all duration-300 ease-out-expo">
              <Search className="text-primary w-5 h-5" />
            </button>
          )}

          {isReading && (
            <div className="flex flex-col items-end mr-2">
              <div className="w-32 h-1 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-primary"></div>
              </div>
              <span className="text-[10px] mt-1 text-on-surface-variant tracking-wider uppercase">75% Complete</span>
            </div>
          )}

          <div className="w-10 h-10 rounded-full bg-surface-container-high border-2 border-primary-container overflow-hidden">
            <img
              alt="User Profile Avatar"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfI5AbRFUIenVg2BxtngYscoP_bL0_1r_mjqF_fL89_haqlJqMHbxvxfxiSO0CGbB895nWWSOzylwyRoqujyvNxd0cAcaKoXSr-p8CZ1f-IOnGwog0GfoseB7dS-WM7PWguw7Jp9M3AJPtHo0hvecGmYIx1Tx0rWKXwzBUVY_W8pVvzG5Vg23_qVWegLJXc4VhU10yL_4RVqxQO-Y-Q7sV5E5mAiCQ7bmGqOgk6EMlPL2jJBLMjcd211dZ7YcVscMEqKtDDWCjaAQ"
            />
          </div>
        </div>
      </header>

      <div className="flex-none bg-outline-variant h-[1px] w-full opacity-30 z-50 relative"></div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto relative w-full">
        <Outlet />
      </div>

      {/* BottomNavBar */}
      {!isReading && (
        <nav className="flex-none w-full z-50 flex justify-around items-center pb-6 pt-3 bg-surface/90 backdrop-blur-xl border-t border-outline-variant/20 shadow-[0px_-10px_30px_rgba(0,0,0,0.02)] relative">
          <Link
            to="/bookshelf"
            className="flex flex-col items-center justify-center flex-1 py-1 group"
          >
            <div className={clsx(
              "w-16 h-8 flex items-center justify-center rounded-full mb-1 transition-all duration-300",
              location.pathname === '/bookshelf'
                ? "bg-secondary-container text-on-secondary-container"
                : "bg-transparent text-on-surface-variant group-hover:text-secondary"
            )}>
              <Library className="w-6 h-6" strokeWidth={2} />
            </div>
            <span className={clsx(
              "font-label text-[10px] uppercase tracking-widest transition-colors duration-300 font-semibold",
              location.pathname === '/bookshelf'
                ? "text-on-secondary-container"
                : "text-on-surface-variant group-hover:text-secondary"
            )}>Bookshelf</span>
          </Link>
          <Link
            to="/store"
            className="flex flex-col items-center justify-center flex-1 py-1 group"
          >
            <div className={clsx(
              "w-16 h-8 flex items-center justify-center rounded-full mb-1 transition-all duration-300",
              (location.pathname === '/store' || location.pathname === '/')
                ? "bg-secondary-container text-on-secondary-container"
                : "bg-transparent text-on-surface-variant group-hover:text-secondary"
            )}>
              <Store className="w-6 h-6" strokeWidth={2} />
            </div>
            <span className={clsx(
              "font-label text-[10px] uppercase tracking-widest transition-colors duration-300 font-semibold",
              (location.pathname === '/store' || location.pathname === '/')
                ? "text-on-secondary-container"
                : "text-on-surface-variant group-hover:text-secondary"
            )}>Store</span>
          </Link>
          <Link
            to="/profile"
            className="flex flex-col items-center justify-center flex-1 py-1 group"
          >
            <div className={clsx(
              "w-16 h-8 flex items-center justify-center rounded-full mb-1 transition-all duration-300",
              location.pathname === '/profile'
                ? "bg-secondary-container text-on-secondary-container"
                : "bg-transparent text-on-surface-variant group-hover:text-secondary"
            )}>
              <UserCircle className="w-6 h-6" strokeWidth={2} />
            </div>
            <span className={clsx(
              "font-label text-[10px] uppercase tracking-widest transition-colors duration-300 font-semibold",
              location.pathname === '/profile'
                ? "text-on-secondary-container"
                : "text-on-surface-variant group-hover:text-secondary"
            )}>Profile</span>
          </Link>
        </nav>
      )}
    </div>
  );
}

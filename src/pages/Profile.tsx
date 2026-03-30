import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pencil, Settings, BrainCircuit, CreditCard, BookTemplate, LogOut, ChevronRight } from 'lucide-react';

export default function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <main className="py-8 px-6 max-w-2xl mx-auto space-y-8">
      {/* Profile Hero Section */}
      <section className="flex flex-col items-center text-center space-y-4">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-secondary rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <img
            alt="Profile Picture"
            className="relative w-32 h-32 rounded-full object-cover ring-4 ring-surface"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuByRL68Z7xNzXJgvGapKlgaiatZaifi8nIE244qTN1kWe5END7_xg_jX7LwfNu6lw69GKmhzS18UG5TKSBnx4TVoTzzR2tSRnwhMSbaWRm4eydfU4xa8lj-ES1o6OJwiD_As4pPXMyS0Czieip5KymIqVBwB4Ls5rDJ4RkGrSp_-lS4APn72PkajwGLRB7hKqz3BzKiBCQe2qT3aL6P8DFpcqUf8Rlb-ZXDbkztFyh23e6oQmoWEdxePrSog9dwR7xkap1c3ZzGof0"
          />
          <button className="absolute bottom-1 right-1 bg-secondary text-on-secondary p-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            <Pencil className="w-4 h-4" />
          </button>
        </div>
        <div>
          <h2 className="font-headline text-3xl font-semibold tracking-tight text-on-surface">Julian Thorne</h2>
          <p className="text-on-surface-variant font-label text-sm tracking-wide uppercase">Premier Curator</p>
        </div>
      </section>

      {/* Stats Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-surface-container-low p-6 rounded-xl flex flex-col items-center justify-center space-y-2 border-b-2 border-transparent hover:bg-surface-container transition-colors duration-300">
          <span className="text-primary font-headline text-4xl font-bold">12</span>
          <span className="text-on-surface-variant text-[10px] uppercase tracking-widest font-medium">Stories Built</span>
        </div>
        <div className="bg-surface-container-low p-6 rounded-xl flex flex-col items-center justify-center space-y-2 border-b-2 border-transparent hover:bg-surface-container transition-colors duration-300">
          <span className="text-primary font-headline text-4xl font-bold">142k</span>
          <span className="text-on-surface-variant text-[10px] uppercase tracking-widest font-medium">Words Generated</span>
        </div>
        <div className="bg-surface-container-low p-6 rounded-xl flex flex-col items-center justify-center space-y-2 border-b-2 border-transparent hover:bg-surface-container transition-colors duration-300">
          <span className="text-primary font-headline text-4xl font-bold">843</span>
          <span className="text-on-surface-variant text-[10px] uppercase tracking-widest font-medium">Choices Made</span>
        </div>
      </section>

      {/* Menu Items */}
      <section className="space-y-3">
        <h3 className="font-headline text-xl text-on-surface px-2">Account Management</h3>
        <div className="space-y-1">
          <button className="w-full flex items-center justify-between p-4 bg-surface-container-low hover:bg-surface-container-highest rounded-xl transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Settings className="w-5 h-5" />
              </div>
              <span className="font-label text-sm font-medium">Settings</span>
            </div>
            <ChevronRight className="w-5 h-5 text-outline-variant" />
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-surface-container-low hover:bg-surface-container-highest rounded-xl transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <span className="font-label text-sm font-medium">AI Preferences</span>
            </div>
            <ChevronRight className="w-5 h-5 text-outline-variant" />
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-surface-container-low hover:bg-surface-container-highest rounded-xl transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
                <CreditCard className="w-5 h-5" />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-label text-sm font-medium">Subscription</span>
                <span className="text-[10px] text-tertiary font-bold uppercase tracking-wider">Verse Pro</span>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-outline-variant" />
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-surface-container-low hover:bg-surface-container-highest rounded-xl transition-all duration-300 group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-dim group-hover:scale-110 transition-transform">
                <BookTemplate className="w-5 h-5" />
              </div>
              <span className="font-label text-sm font-medium">My Templates</span>
            </div>
            <ChevronRight className="w-5 h-5 text-outline-variant" />
          </button>
        </div>
      </section>

      {/* Logout Section */}
      <section className="pt-4">
        <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 p-4 rounded-xl text-error bg-error/5 hover:bg-error/10 transition-colors duration-300 border border-error/10">
          <LogOut className="w-5 h-5" />
          <span className="font-label text-sm font-semibold uppercase tracking-widest">Logout</span>
        </button>
      </section>
    </main>
  );
}

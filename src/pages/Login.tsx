import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('reader@novelty.com');
  const [password, setPassword] = useState('password123');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem('isAuthenticated', 'true');
      setIsLoading(false);
      navigate('/store');
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-on-surface font-label relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] z-0">
        <img
          className="w-full h-full object-cover grayscale"
          alt="Subtle texture"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvE1qYK72sMx6QqrOZDMbP4R1apZU0EZr47zcRuORijy4kWg7aAO1C9ikWYiKEJBlreMusvxeCxUXSMxnu2wpIEmLAQWzj77EHyDIBJ_1zXyWqBQ4iCA9HkOy4eE-7WqqGdWHvvdt-iEkJ3IJv38paZK40zk5momKjDP5T6iK0KFirSMgrCR7qQhmS5Ncaxi3_ds45YncpUc6Z_pZ2CAH-TM8xSnWSx5KTlK0k4iY_MBzxEkPyzDGzaUkX1crwglEI2hDZI6gMrOo"
        />
      </div>

      <div className="z-10 w-full max-w-md px-8 py-12 bg-surface-container-low rounded-3xl shadow-2xl border border-outline-variant/10 relative">
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>

        <div className="flex flex-col items-center mb-10">
          <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
            <Sparkles className="w-6 h-6 text-on-primary" />
          </div>
          <h1 className="font-headline text-4xl text-on-surface mb-2 tracking-tight">Welcome Back</h1>
          <p className="text-sm text-on-surface-variant tracking-wide">Enter the world of interactive stories</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Email</label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 bg-surface rounded-xl border border-outline-variant/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-on-surface placeholder:text-on-surface-variant/50"
              placeholder="reader@novelty.com"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 bg-surface rounded-xl border border-outline-variant/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-on-surface placeholder:text-on-surface-variant/50"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-8 group relative px-6 py-4 bg-primary text-on-primary rounded-xl font-bold tracking-wide shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin"></div>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs text-on-surface-variant">
            Don't have an account? <button className="text-primary font-bold hover:underline">Sign up</button>
          </p>
        </div>
      </div>
    </div>
  );
}

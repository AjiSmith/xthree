import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';

export default function Navbar({ auth }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isAccountOpen, setIsAccountOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('#account-dropdown-container')) {
                setIsAccountOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-slate-darker/90 backdrop-blur-md shadow-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 md:w-13 md:h-10 flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                        <img src="images/rlogo.png" />
                    </div>
                    <span className="text-white font-black text-lg md:text-xl tracking-tighter italic">
                        X TKJ-3
                    </span>
                </Link>

                <div id="account-dropdown-container" className="relative">
                    <button 
                        onClick={() => setIsAccountOpen(!isAccountOpen)}
                        className={`flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-300 border ${
                            isAccountOpen 
                            ? 'bg-white text-slate-darker border-white' 
                            : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                        }`}
                    >
                        <span>Account</span>
                        <svg className={`w-4 h-4 transition-transform duration-300 ${isAccountOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    <div className={`absolute right-0 mt-3 w-48 bg-slate-800 border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-top-right ${
                        isAccountOpen ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'
                    }`}>
                        <div className="p-2 space-y-1">
                            {auth && auth.user ? (
                                <>
                                    <div className="px-4 py-2 border-b border-white/5 mb-1">
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Signed in as</p>
                                        <p className="text-sm font-black text-white truncate">{auth.user.name}</p>
                                    </div>
                                    <Link 
                                        href={route('dashboard')} 
                                        className="flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium"
                                    >
                                        Dashboard
                                    </Link>
                                    <Link 
                                        href={route('logout')} 
                                        method="post" as="button"
                                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-rose-400 hover:text-rose-300 hover:bg-rose-400/10 rounded-xl transition-colors font-medium text-left"
                                    >
                                        Logout
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link 
                                        href={route('login')} 
                                        className="flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium"
                                    >
                                        Log-in
                                    </Link>
                                    <Link 
                                        href={route('register')} 
                                        className="flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
}

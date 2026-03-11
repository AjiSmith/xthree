import React from 'react';

export default function Footer() {
    return (
        <footer className="relative bg-[#0b0d17]/80 backdrop-blur-md px-6 py-4">
            {/* Electric Line Decorator */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-[electric_3s_linear_infinite]"></div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                
                {/* Brand & Copy */}
                <div className="flex items-center gap-3">
                    <span className="text-white font-black italic tracking-tighter text-sm uppercase">
                        X TKJ <span className="text-indigo-500">3</span>
                    </span>
                    <span className="h-4 w-[1px] bg-slate-800"></span>
                    <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest leading-none">
                        &copy; 2026 XThree • <span className="text-slate-300">Azimas Perwata Saputra</span>
                    </p>
                </div>

                {/* Tech Stack - Hidden on Mobile to save space, or very small */}
                <div className="hidden lg:flex items-center gap-2">
                    {['Laravel 11', 'React', 'Inertia', 'Tailwind'].map((tech) => (
                        <span key={tech} className="text-[8px] text-slate-600 border border-white/4 px-2 py-0.5 rounded-md font-bold uppercase tracking-tighter">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Social Links & Version */}
                <div className="flex items-center gap-6">
                    <div className="flex gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <a href="https://instagram.com/x_tkj.threee" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">Instagram</a>
                        <a href="https://instagram.com/smth.bndz" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">Dev</a>
                    </div>
                    <span className="text-[9px] text-slate-700 font-mono italic">v0.4s</span>
                </div>
            </div>

            {/* Injected Style Fix for React Standard */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes electric {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}} />
        </footer>
    );
}
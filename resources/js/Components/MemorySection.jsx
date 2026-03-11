import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function MemorySection() {
    const [rotation, setRotation] = useState(0);
    
    const photos = [
        { id: 1, src: '/images/landscape1.jpg', title: 'Class Trip' },
        { id: 2, src: '/images/portrait1.jpg', title: 'Programming' },
        { id: 3, src: '/images/landscape2.jpg', title: 'Workshop' },
        { id: 4, src: '/images/portrait2.jpg', title: 'Daily Life' },
        { id: 5, src: '/images/landscape3.jpg', title: 'Final Project' },
    ];

    const angleStep = 360 / photos.length;
    const rotateNext = () => setRotation(prev => prev - angleStep);
    const rotatePrev = () => setRotation(prev => prev + angleStep);

    return (
        <section className="py-32 bg-slate-darker overflow-hidden border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center">
                    
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                            Memorial <span className="text-blue-500 italic text-5xl md:text-6xl">Section.</span>
                        </h2>
                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.5em]">
                            X TKJ-3 Digital Archives
                        </p>
                    </div>

                    <div className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center [perspective:1500px]">
                        
                        <motion.div 
                            className="relative w-60 h-72 md:w-72 md:h-96 [transform-style:preserve-3d]"
                            animate={{ rotateY: rotation }}
                            transition={{ type: "spring", stiffness: 40, damping: 20 }}
                        >
                            {photos.map((photo, index) => {
                                const angle = index * angleStep;
                                return (
                                    <motion.div
                                        key={photo.id}
                                        className="absolute inset-0 bg-slate-900 border-2 border-slate-800 p-1.5 rounded-2xl shadow-2xl overflow-hidden [backface-visibility:hidden]"
                                        style={{
                                            transform: `rotateY(${angle}deg) translateZ(${window.innerWidth < 768 ? '250px' : '400px'})`,
                                        }}
                                    >
                                        <div className="w-full h-full relative group bg-slate-800">
                                            <img 
                                                src={photo.src} 
                                                alt={photo.title} 
                                                className="w-full h-full object-cover rounded-xl transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 grayscale hover:grayscale-0"
                                            />
                                            
                                            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90">
                                                <p className="text-[9px] text-blue-400 font-black uppercase tracking-widest mb-0.5">Memories</p>
                                                <p className="text-white font-bold text-xs truncate uppercase tracking-tighter">{photo.title}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:-mx-20 pointer-events-none">
                            <button onClick={rotatePrev} className="pointer-events-auto w-12 h-12 bg-slate-900/80 border border-slate-800 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-all shadow-2xl">
                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
                            </button>
                            <button onClick={rotateNext} className="pointer-events-auto w-12 h-12 bg-slate-900/80 border border-slate-800 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-all shadow-2xl">
                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
                            </button>
                        </div>
                    </div>

                    <div className="mt-20 flex flex-col items-center gap-4">
                         <div className="flex gap-1">
                            {photos.map((_, i) => (
                                <div key={i} className={`h-1 w-4 rounded-full transition-all ${Math.abs(rotation / angleStep) % photos.length === i ? 'bg-blue-500 w-8' : 'bg-slate-800'}`}></div>
                            ))}
                         </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
import React from 'react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-darker">
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/background.png"
                    className="w-full h-full object-cover blur-sm opacity-40 scale-105"
                    alt="Class Memory"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-darker/30 via-slate-darker/10 to-slate-darker"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-4xl font-black text-white tracking-tighter mb-1 animate-fade-in">
                    Website Classroom of
                </h1>
                <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-10 animate-fade-in">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-white to-slate-400 bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">Teknik Komputer Jaringan III</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
                    Tidak akan disebut gagal bagi mereka yang menikmati perjuangan.<br />
                    <span className="text-white font-bold underline decoration-slate-500">Selamat datang di tempat berkembangnya pria kuat</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#schedule" className="px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-all transform hover:scale-105">
                        Jadwal Pelajaran
                    </a>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-gray to-transparent"></div>
        </section>
    );
}
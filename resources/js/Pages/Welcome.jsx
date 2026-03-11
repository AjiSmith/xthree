import React from 'react';
import { Head } from '@inertiajs/react';
import Hero from '@/Components/Hero';
import SubHero from '@/Components/SubHero';
import ClassInfo from '@/Components/ClassInfo';
import MemorySection from '@/Components/MemorySection';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';

export default function Welcome(auth) {
    return (
        <>
            <Head title="Home Page" />

            <div className="bg-slate-darker min-h-screen selection:bg-white selection:text-black relative">
                
                <Navbar auth={auth} />

                <Hero />

                <SubHero />

                <div className="h-32 bg-gradient-to-b from-slate-darker to-slate-gray"></div>

                <ClassInfo/>

                <div className="h-32 bg-gradient-to-b from-slate-gray to-slate-darker"></div>

                <MemorySection />

                <Footer />
            </div>
        </>
    );
}
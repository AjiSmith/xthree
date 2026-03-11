import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-slate-950 overflow-hidden px-4">
            
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full"></div>

            <div className="relative z-10 mb-8 transition-transform duration-500 hover:scale-110">
                <Link href="/" className="flex flex-col items-center gap-2">
                    <div className="p-4 shadow-2xl">
                        <ApplicationLogo className="h-12 w-12 fill-current text-blue-500" />
                    </div>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] mt-2">
                        XTHREE SYSTEM
                    </span>
                </Link>
            </div>

            <div className="relative z-10 w-full sm:max-w-md">
                <div className="w-full">
                    {children}
                </div>
            </div>

            <div className="relative z-10 mt-12 text-center">
                <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest opacity-50">
                    Identitas Ter-enkripsi
                </p>
            </div>
        </div>
    );
}
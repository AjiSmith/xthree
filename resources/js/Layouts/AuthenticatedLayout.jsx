import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function AuthenticatedLayout({ header, children }) {
    const { auth } = usePage().props;
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [openDropdown, setOpenDropdown] = useState(route().current('attendance.*') ? 'Absensi' : null);

    const user = auth?.user;

    if (!user) {
        return (
            <div className="flex h-screen items-center justify-center bg-[#0b0d17]">
                <div className="text-indigo-500 animate-pulse font-mono uppercase tracking-[0.3em] text-xs">
                    Initializing Secure Session...
                </div>
            </div>
        );
    }

    const navItems = [
        { name: 'Home', href: '/dashboard', active: route().current('dashboard'), icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
        {
            name: 'Absensi',
            href: '#',
            active: route().current('attendance.*'),
            icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
            isDropdown: true,
            children: [
                {
                    name: 'Isi Kehadiran',
                    href: route('attendance.index'),
                    active: route().current('attendance.index')
                },
                ...(user?.role === 'walikelas' ? [
                    {
                        name: 'Rekap Absensi',
                        href: route('attendance.report'),
                        active: route().current('attendance.report')
                    }
                ] : []),
            ]
        },

    ];

    if (user?.role === 'walikelas' || user?.role === 'developer') {
        navItems.push({ name: 'Data', href: route('students.index'), active: route().current('students.*'), icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' });
    }
    if (user?.role === 'developer') {
        navItems.push({ name: 'User Panel', href: route('users.index'), active: route().current('users.*'), icon: 'M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z M13.5 1.5a7.5 7.5 0 00-7.5 7.5h7.5V1.5z' });
        navItems.push({ name: 'Password Logs', href: route('password-resets.index'), active: route().current('password-resets.*'), icon: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z' });
    }

    return (
        <div className="min-h-screen bg-[#0b0d17] flex flex-col md:flex-row text-slate-300 relative font-sans">

            <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>

            <aside className={`${isSidebarOpen ? 'w-72' : 'w-24'} bg-[#16192c]/60 backdrop-blur-xl border-r border-white/5 transition-all duration-500 ease-in-out hidden md:flex flex-col z-50 sticky top-0 h-screen`}>
                <div className="p-8 flex items-center gap-3">
                    {isSidebarOpen && (
                        <h1 className="text-lg font-black tracking-tighter text-white uppercase italic truncate">
                            Dashboard<span className="text-indigo-400"> PANEL</span>
                        </h1>
                    )}
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    {navItems.map((item) => (
                        <div key={item.name}>
                            {item.isDropdown ? (
                                <div className="flex flex-col">
                                    <button
                                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                                        className={`flex w-full items-center justify-between p-4 rounded-2xl transition-all duration-300 group ${item.active
                                            ? 'bg-indigo-500/10 text-indigo-400 shadow-[inset_0_0_20px_rgba(99,102,241,0.1)] border border-indigo-500/20'
                                            : 'hover:bg-white/5 text-slate-500 hover:text-slate-200 border border-transparent'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <svg className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${item.active ? 'scale-110' : 'group-hover:scale-110'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                                            </svg>
                                            {isSidebarOpen && <span className="font-bold text-sm tracking-tight truncate">{item.name}</span>}
                                        </div>
                                        {isSidebarOpen && (
                                            <svg className={`w-4 h-4 transition-transform duration-300 ${openDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${openDropdown === item.name && isSidebarOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                        <div className="flex flex-col pl-4 space-y-1">
                                            {item.children.map(child => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    className={`p-3 pl-10 rounded-xl transition-all duration-300 text-sm font-medium ${child.active
                                                        ? 'text-indigo-400 bg-indigo-500/5'
                                                        : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
                                                        }`}
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group ${item.active
                                        ? 'bg-indigo-500/10 text-indigo-400 shadow-[inset_0_0_20px_rgba(99,102,241,0.1)] border border-indigo-500/20'
                                        : 'hover:bg-white/5 text-slate-500 hover:text-slate-200 border border-transparent'
                                        }`}
                                >
                                    <svg className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${item.active ? 'scale-110' : 'group-hover:scale-110'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                                    </svg>
                                    {isSidebarOpen && <span className="font-bold text-sm tracking-tight truncate">{item.name}</span>}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="p-6 border-t border-white/5">
                    <Link method="post" href={route('logout')} as="button" className="flex items-center gap-4 w-full p-4 text-slate-500 hover:text-rose-400 hover:bg-rose-500/5 rounded-2xl transition-all duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                        {isSidebarOpen && <span className="text-[10px] font-black uppercase tracking-widest truncate text-inherit">Terminate</span>}
                    </Link>
                </div>
            </aside>

            <nav className="md:hidden fixed bottom-4 left-4 right-4 h-16 bg-[#16192c]/80 backdrop-blur-2xl border border-white/10 rounded-2xl flex items-center justify-around px-2 z-[100] shadow-2xl">
                {navItems.map((item) => (
                    <div key={item.name} className="relative flex flex-col items-center">
                        {item.isDropdown ? (
                            <>
                                <button
                                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                                    className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 ${item.active ? 'text-indigo-400 scale-110' : 'text-slate-500'}`}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                                    </svg>
                                    <span className="text-[9px] font-black uppercase tracking-tighter">{item.name}</span>
                                </button>

                                {openDropdown === item.name && (
                                    <div className="absolute bottom-[120%] mb-2 flex flex-col bg-[#16192c] border border-white/10 rounded-xl overflow-hidden shadow-2xl w-32 pb-1 pt-1 z-[110] animate-in slide-in-from-bottom-5 fade-in">
                                        {item.children.map(child => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className={`px-4 py-3 text-xs font-bold text-center transition-colors ${child.active ? 'bg-indigo-500/10 text-indigo-400' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
                                                onClick={() => setOpenDropdown(null)}
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            <Link
                                href={item.href}
                                className={`flex flex-col items-center justify-center gap-1 transition-all duration-300 ${item.active ? 'text-indigo-400 scale-110' : 'text-slate-500'}`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                                </svg>
                                <span className="text-[9px] font-black uppercase tracking-tighter">{item.name}</span>
                            </Link>
                        )}
                    </div>
                ))}
                <Link method="post" href={route('logout')} as="button" className="flex flex-col items-center justify-center gap-1 text-rose-500 opacity-70">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                    <span className="text-[9px] font-black uppercase tracking-tighter">Exit</span>
                </Link>
            </nav>

            <div className="flex-1 flex flex-col min-w-0 relative z-10 overflow-hidden">

                <header className="h-16 md:h-20 bg-[#0b0d17]/30 backdrop-blur-md flex items-center justify-between px-6 md:px-10 border-b border-white/5 sticky top-0 z-40">
                    <div className="flex items-center gap-4 md:gap-6">
                        <button
                            onClick={() => setSidebarOpen(!isSidebarOpen)}
                            className="hidden md:block text-slate-500 hover:text-white transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h12m-12 6h16" /></svg>
                        </button>
                        <div>
                            <p className="text-[8px] md:text-[10px] font-bold text-indigo-500/80 uppercase tracking-[0.3em] mb-0.5">Control Panel</p>
                            <h2 className="font-bold text-sm md:text-xl text-white tracking-tight truncate max-w-[150px] md:max-w-none">{header}</h2>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 md:gap-4 bg-[#16192c]/80 p-1 md:p-1.5 pr-3 md:pr-5 rounded-xl md:rounded-2xl border border-white/10 shadow-xl scale-90 md:scale-100">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black shadow-lg shadow-indigo-500/20 text-xs md:text-base flex-shrink-0">
                            {user.name.charAt(0)}
                        </div>
                        <div className="text-left hidden xs:block">
                            <p className="text-[10px] md:text-xs font-black text-white leading-none mb-1 uppercase truncate max-w-[80px] md:max-w-none">{user.name}</p>
                            <div className="flex items-center gap-1.5">
                                <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
                                <p className="text-[8px] md:text-[9px] text-slate-500 font-bold uppercase tracking-widest">{user.role || 'Student'}</p>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="p-5 md:p-10 flex-1 overflow-y-auto custom-scrollbar pb-24 md:pb-10">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
    .custom-scrollbar::-webkit-scrollbar {
        width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
        background: transparent;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(99, 102, 241, 0.2);
        border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: rgba(99, 102, 241, 0.4);
    }
` }} />
        </div>
    );
}
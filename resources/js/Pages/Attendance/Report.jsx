import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';

export default function AttendanceReport({ auth, reports = [], currentMonth, currentYear }) {
    
    const months = [
        "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
        "Jul", "Agu", "Sep", "Okt", "Nov", "Des"
    ];

    const handleFilter = (month) => {
        router.get(route('attendance.report'), { month, year: currentYear }, { preserveState: true });
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Rekapitulasi Absensi Siswa">
            <Head title="Rekap Absensi" />

            <div className="py-12 bg-slate-950 min-h-screen px-4">
                <div className="max-w-4xl mx-auto">
                    
                    <div className="flex justify-start md:justify-between items-center gap-3 md:gap-0 mb-10 overflow-x-auto no-scrollbar py-2 border-b border-slate-800/50">
                        {months.map((m, index) => (
                            <button
                                key={m}
                                onClick={() => handleFilter(index + 1)}
                                className={`px-4 py-2 text-[11px] font-black transition-all relative
                                    ${currentMonth === index + 1 
                                        ? 'text-blue-500 scale-110' 
                                        : 'text-slate-600 hover:text-slate-400'}`}
                            >
                                {m}
                                {currentMonth === index + 1 && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="bg-slate-900 rounded-[3rem] border border-slate-800/50 overflow-hidden shadow-2xl">
                        
                        <div className="p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                                <h2 className="text-2xl font-black text-white tracking-tighter italic">REKAPITULASI.</h2>
                                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">
                                    Tahun Ajaran {currentYear}/{currentYear + 1}
                                </p>
                            </div>
                            <div className="bg-slate-800/50 px-5 py-2 rounded-2xl border border-slate-700/50">
                                <span className="text-blue-500 font-black text-sm">{reports.length}</span>
                                <span className="text-slate-500 text-[10px] font-bold ml-2 uppercase">Siswa Terdata</span>
                            </div>
                        </div>

                        <div className="px-4 pb-8">
                            <div className="bg-slate-950/50 rounded-[2rem] border border-slate-800/50 divide-y divide-slate-900">
                                {reports.length > 0 ? (
                                    reports.map((r) => (
                                        <div key={r.id} className="p-5 flex items-center justify-between group hover:bg-slate-800/10 transition-all">
                                            <div className="flex items-center gap-4">
                                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-black text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                                    {r.name.substring(0, 2).toUpperCase()}
                                                </div>
                                                <div>
                                                    <p className="text-slate-200 font-bold text-xs tracking-tight">{r.name}</p>
                                                    <p className="text-slate-600 text-[9px] font-mono tracking-tighter">{r.nisn || 'NO-ID'}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3 md:gap-6">
                                                <MiniStat label="H" value={r.hadir} activeColor="text-green-500" />
                                                <MiniStat label="S" value={r.sakit} activeColor="text-yellow-500" />
                                                <MiniStat label="I" value={r.izin} activeColor="text-blue-400" />
                                                <MiniStat label="A" value={r.alfa} activeColor="text-red-500" />
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="py-20 text-center text-slate-600 text-[11px] uppercase font-black tracking-widest">
                                        Kosong.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

function MiniStat({ label, value, activeColor }) {
    return (
        <div className="flex flex-col items-center min-w-[20px]">
            <span className={`text-[10px] font-black ${value > 0 ? activeColor : 'text-slate-800'}`}>
                {value}
            </span>
            <span className={`text-[8px] font-bold ${value > 0 ? activeColor : 'text-slate-700'} uppercase`}>{label}</span>
        </div>
    );
}
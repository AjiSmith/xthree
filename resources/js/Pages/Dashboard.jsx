import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Dashboard({ stats, current_schedule, failed_logins }) {
    const { auth } = usePage().props;
    const user = auth.user;

    return (
        <AuthenticatedLayout 
            header={<span className="text-white font-black uppercase tracking-[0.3em] text-xs">System Overview</span>}
        >
            <Head title="Dashboard" />
            <div className="space-y-6">             
                <div className="bg-[#16192c] p-6 lg:p-8 rounded-[2rem] border border-white/5 flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden">
                    <div className="w-24 h-24 rounded-[1.5rem] bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-4xl font-black text-indigo-400 shrink-0">
                        {user.name.charAt(0)}
                    </div>
                    
                    <div className="text-center md:text-left flex-1">
                        <h1 className="text-2xl lg:text-2xl font-bold text-white tracking-tight mb-2 uppercase">
                            Selamat Datang, {user.name}
                        </h1>
                        <p className="text-slate-400 text-sm mb-4">Dashboard Panel ini dibuat untuk memudahkan manajemen kelas.</p>
                        
                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                            <div className="flex flex-col bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Peran Anda</span>
                                <span className="text-xs font-black text-white uppercase">{user.role || 'Personnel'}</span>
                            </div>
                            
                            <div className="flex flex-col bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Status Akun</span>
                                <span className={`text-xs font-black uppercase ${user.is_suspended ? 'text-red-400' : 'text-green-400'}`}>
                                    {user.is_suspended ? 'Suspended' : 'Active'}
                                </span>
                            </div>

                            <div className="flex flex-col bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">ID Akun</span>
                                <span className="text-xs font-mono font-bold text-indigo-400">
                                    #{user.id} <span className="text-slate-500 text-[10px] ml-1">(Absen: {user.absen_number || '-'})</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { label: 'Akun Terdaftar', value: stats.total_siswa, unit: 'akun', color: 'text-white', bg: 'bg-[#16192c]' },
                        { label: 'Persentase Kehadiran', value: `${stats.attendance_rate}%`, color: 'text-green-400', bg: 'bg-[#16192c]' },
                        { label: 'Mata Pelajaran', value: stats.total_subjects, unit: 'mapel', color: 'text-indigo-400', bg: 'bg-[#16192c]' }
                    ].map((stat, i) => (
                        <div key={i} className={`${stat.bg} p-6 rounded-[2rem] border border-white/5 flex flex-col justify-between hover:bg-white/[0.02] transition-colors`}>
                            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">{stat.label}</p>
                            <div className="flex items-end gap-2">
                                <span className={`text-3xl lg:text-4xl font-black tracking-tighter ${stat.color}`}>{stat.value}</span>
                                <span className="text-slate-600 text-[10px] lg:text-xs font-bold uppercase mb-1">{stat.unit}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-[#16192c] rounded-[2rem] border border-white/5 overflow-hidden">
                        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                            <h3 className="text-xs font-black text-white uppercase tracking-[0.3em]">Operational Schedule</h3>
                            <span className="text-[10px] font-bold text-slate-400 uppercase bg-black/20 px-3 py-1 rounded-lg">Today</span>
                        </div>
                        
                        <div className="divide-y divide-white/5">
                            {current_schedule.map((item, index) => (
                                <div key={index} className="p-5 flex items-center gap-6 hover:bg-white/[0.02] transition-colors">
                                    <div className="bg-[#0b0d17] border border-white/5 w-16 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <span className="text-[10px] font-mono text-indigo-400 font-bold">{item.time}</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-white uppercase italic tracking-tight">{item.subject}</p>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">{item.room}</p>
                                    </div>
                                </div>
                            ))}
                            {current_schedule.length === 0 && (
                                <div className="p-8 text-center text-slate-500 text-sm font-medium">
                                    No schedule blocks initialized for today.
                                </div>
                            )}
                        </div>
                    </div>

                    {user.role === 'developer' && (
                    <div className="bg-[#16192c] rounded-[2rem] border border-white/5 overflow-hidden">
                        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                            <h3 className="text-xs font-black text-white uppercase tracking-[0.3em]">Security Logs</h3>
                            <span className="text-[10px] font-bold text-red-400 uppercase bg-red-400/10 px-3 py-1 rounded-lg">Failed Attempts</span>
                        </div>
                        
                        <div className="divide-y divide-white/5">
                            {failed_logins.map((log, index) => (
                                <div key={index} className="p-5 flex items-center gap-4 hover:bg-white/[0.02] transition-colors">
                                    <div className="bg-red-500/10 border border-red-500/20 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <i className="fas fa-shield-alt text-red-500 text-xs"></i>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-black text-white uppercase tracking-tight">{log.email}</p>
                                        <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">IP: {log.ip_address}</p>
                                    </div>
                                    <span className="text-[9px] font-mono text-slate-500 font-bold">
                                        {new Date(log.created_at).toLocaleString()}
                                    </span>
                                </div>
                            ))}
                            {failed_logins.length === 0 && (
                                <div className="p-8 text-center text-slate-500 text-sm font-medium">
                                    No suspicious login activity detected.
                                </div>
                            )}
                        </div>
                    </div>
                    )}
                </div>

            </div>
        </AuthenticatedLayout>
    );
}
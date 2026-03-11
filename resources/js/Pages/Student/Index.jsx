import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function StudentIndex({ auth, students }) {
    const { data, setData, post, delete: destroy, processing, reset } = useForm({
        nisn: '',
        name: '',
        gender: '',
        address: '',
        phone: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('students.store'), { onSuccess: () => reset() });
    };

    return (
        <AuthenticatedLayout user={auth.user} header="Management Data Siswa">
            <Head title="Data Siswa" />

            <div className="py-12 bg-slate-950 min-h-screen" >
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6">
                    
                    <div className="w-full md:w-1/3">
                        <div className="bg-slate-900 p-6 rounded-[2rem] border border-slate-800 sticky top-6">
                            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                Tambah Siswa Baru
                            </h3>
                            <form onSubmit={submit} className="space-y-4">
                                <div>
                                    <label className="text-[10px] font-black text-slate-500 uppercase ml-2">NISN (Opsional)</label>
                                    <input type="text" className="w-full bg-slate-800 border-none rounded-2xl text-white mt-1 text-sm focus:ring-2 focus:ring-blue-500" 
                                        value={data.nisn} onChange={e => setData('nisn', e.target.value)} />
                                </div>
                                <div>
                                    <label className="text-[10px] font-black text-slate-500 uppercase ml-2">Nama Lengkap</label>
                                    <input type="text" required className="w-full bg-slate-800 border-none rounded-2xl text-white mt-1 text-sm focus:ring-2 focus:ring-blue-500" 
                                        value={data.name} onChange={e => setData('name', e.target.value)} />
                                </div>
                                <div>
                                    <label className="text-[10px] font-black text-slate-500 uppercase ml-2">Jenis Kelamin</label>
                                    <select required className="w-full bg-slate-800 border-none rounded-2xl text-white mt-1 text-sm focus:ring-2 focus:ring-blue-500"
                                        value={data.gender} onChange={e => setData('gender', e.target.value)}>
                                        <option value="">Pilih</option>
                                        <option value="L">Laki-laki</option>
                                        <option value="P">Perempuan</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-[10px] font-black text-slate-500 uppercase ml-2">Nomor HP</label>
                                    <input type="text" className="w-full bg-slate-800 border-none rounded-2xl text-white mt-1 text-sm focus:ring-2 focus:ring-blue-500" 
                                        value={data.phone} onChange={e => setData('phone', e.target.value)} />
                                </div>
                                <button disabled={processing} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-xs uppercase transition-all shadow-lg shadow-blue-500/20">
                                    Simpan Data Siswa
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 space-y-4">
                        {/* Mobile view */}
                        <div className="grid grid-cols-1 md:hidden gap-4">
                            {students.map((student) => (
                                <div key={student.id} className="bg-slate-900 border border-slate-800 p-5 rounded-2xl relative shadow-sm">
                                    <div className="flex justify-between items-start mb-3 border-b border-slate-800 pb-3">
                                        <div>
                                            <p className="text-white font-bold text-sm tracking-tight">{student.name}</p>
                                            <p className="text-slate-500 text-[10px] uppercase font-mono mt-0.5">NISN: {student.nisn || '-'}</p>
                                        </div>
                                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${student.gender === 'L' ? 'bg-blue-500/10 text-blue-500' : 'bg-pink-500/10 text-pink-500'}`}>
                                            {student.gender === 'L' ? 'Laki' : 'Pr'}
                                        </span>
                                    </div>
                                    <div className="space-y-1 mb-4">
                                        <p className="text-xs text-slate-400">Kontak: <span className="text-white font-mono">{student.phone || '-'}</span></p>
                                    </div>
                                    <div className="flex justify-end border-t border-slate-800 pt-3 mt-3">
                                        <button 
                                            onClick={() => confirm('Hapus siswa ini?') && destroy(route('students.destroy', student.id))}
                                            className="text-red-500 hover:text-red-400 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 bg-red-500/10 rounded-lg transition-colors"
                                        >
                                            Hapus Siswa
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Desktop view */}
                        <div className="hidden md:block bg-slate-900 rounded-[2rem] border border-slate-800 overflow-hidden w-full overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="bg-slate-800/50">
                                        <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Nama Siswa</th>
                                        <th className="p-5 text-[10px] font-black text-slate-400 uppercase text-center tracking-widest">L/P</th>
                                        <th className="p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Kontak</th>
                                        <th className="p-5 text-[10px] font-black text-slate-400 uppercase text-right tracking-widest">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800">
                                    {students.map((student) => (
                                        <tr key={student.id} className="hover:bg-slate-800/30 transition-colors">
                                            <td className="p-5">
                                                <p className="text-white font-bold text-sm">{student.name}</p>
                                                <p className="text-slate-500 text-[10px] font-mono mt-0.5">NISN: {student.nisn || '-'}</p>
                                            </td>
                                            <td className="p-5 text-center">
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${student.gender === 'L' ? 'bg-blue-500/10 text-blue-500' : 'bg-pink-500/10 text-pink-500'}`}>
                                                    {student.gender}
                                                </span>
                                            </td>
                                            <td className="p-5 text-slate-400 text-xs font-mono">{student.phone || '-'}</td>
                                            <td className="p-5 text-right">
                                                <button 
                                                    onClick={() => confirm('Hapus siswa ini?') && destroy(route('students.destroy', student.id))}
                                                    className="text-rose-500 hover:text-rose-400 text-[10px] font-black uppercase tracking-widest px-4 py-2 hover:bg-rose-500/10 rounded-xl transition-all"
                                                >
                                                    Hapus
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {students.length === 0 && (
                                <div className="p-20 text-center text-slate-500 italic text-sm">Belum ada data siswa.</div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
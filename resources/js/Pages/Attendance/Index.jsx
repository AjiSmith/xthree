import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function AttendanceIndex({ auth, students, attendances, selectedDate }) {
    const initialAttendance = {};
    students.forEach(s => {
        const existing = attendances.find(a => a.student_id === s.id);
        initialAttendance[s.id] = existing ? existing.status : 'Hadir';
    });

    const { data, setData, post, processing } = useForm({
        date: selectedDate,
        attendance: initialAttendance
    });

    const handleStatusChange = (studentId, status) => {
        setData('attendance', { ...data.attendance, [studentId]: status });
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('attendance.store'));
    };

    const statusOptions = [
        { label: 'H', value: 'Hadir', color: 'bg-green-500' },
        { label: 'S', value: 'Sakit', color: 'bg-yellow-500' },
        { label: 'I', value: 'Izin', color: 'bg-blue-500' },
        { label: 'A', value: 'Alfa', color: 'bg-red-500' },
    ];

    return (
        <AuthenticatedLayout user={auth.user} header="Management Absensi Siswa">
            <Head title="Absensi Kelas" />

            <div className="py-12 bg-slate-950 min-h-screen px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-slate-900 rounded-[2.5rem] border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="p-8 border-b border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                            <div>
                                <h2 className="text-xl font-black text-white uppercase tracking-widest">Absensi Digital</h2>
                                <p className="text-slate-500 text-xs mt-1">Total: {students.length} Siswa Terdaftar</p>
                            </div>
                            <input 
                                type="date" 
                                className="bg-slate-800 border-none rounded-2xl text-white text-sm focus:ring-2 focus:ring-blue-500"
                                value={data.date}
                                onChange={e => window.location.href = route('attendance.index', { date: e.target.value })}
                            />
                        </div>

                        <form onSubmit={submit}>
                            <div className="divide-y divide-slate-800/50">
                                {students.map((student) => (
                                    <div key={student.id} className="p-5 flex items-center justify-between hover:bg-slate-800/20 transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 font-bold text-xs">
                                                {student.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-white font-bold text-sm">{student.name}</p>
                                                <p className="text-slate-500 text-[10px] uppercase font-mono">{student.nisn || 'Tanpa NISN'}</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                                            {statusOptions.map((opt) => (
                                                <button
                                                    key={opt.value}
                                                    type="button"
                                                    onClick={() => handleStatusChange(student.id, opt.value)}
                                                    className={`w-10 h-10 rounded-xl text-[10px] font-black transition-all border-2 
                                                        ${data.attendance[student.id] === opt.value 
                                                            ? `${opt.color} border-transparent text-white scale-110 shadow-lg shadow-${opt.color}/20` 
                                                            : 'bg-transparent border-slate-800 text-slate-500 hover:border-slate-600'}`}
                                                >
                                                    {opt.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-8 bg-slate-900/50 border-t border-slate-800">
                                <button 
                                    disabled={processing}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-xs uppercase transition-all tracking-widest"
                                >
                                    Simpan Absensi Hari Ini
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
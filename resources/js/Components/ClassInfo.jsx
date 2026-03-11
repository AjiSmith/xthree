import React from 'react';

export default function ClassInfo() {
    const structures = [
        { position: "Ketua Kelas", name: "Farhan Dwi Prayogi" },
        { position: "Wakil Ketua", name: "Muhammad Rafa Caina" },
        { position: "Sekretaris", name: "Azimas Perwata Saputra" },
        { position: "Bendahara", name: "M. Hafizh Nayaka" },
    ];

    const allSchedules = {
        "Senin": [
            { subject: "Matematika", teacher: "Bpk. Budi", time: "07:00 - 08:30" },
            { subject: "B. Indonesia", teacher: "Ibu Siti", time: "08:30 - 10:00" },
        ],
        "Selasa": [
            { subject: "Fisika", teacher: "Bpk. Andi", time: "07:00 - 09:00" },
            { subject: "Olahraga", teacher: "Bpk. Jaka", time: "09:00 - 10:30" },
        ],
        "Rabu": [
            { subject: "Pencolian", teacher: "Witri si tobrut", time: "06:00 - 02:00"}
        ]
    };

    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const today = days[new Date().getDay()];
    const todaySchedule = allSchedules[today] || [];

    return (
        <section id="schedule" className="py-24 bg-slate-950 px-6">
            <div className="max-w-7xl mx-auto">
                
                <div className="mb-20 text-center">
                    <h2 className="text-3xl font-black text-white mb-12 uppercase italic">Struktur Organisasi</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {structures.map((item, i) => (
                            <div key={i} className="p-8 bg-slate-900/50 rounded-[2.5rem] border border-slate-800">
                                <p className="text-[10px] text-blue-400 uppercase font-black mb-1">{item.position}</p>
                                <p className="text-white font-bold text-lg">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-900/30 rounded-[3rem] border border-slate-800 overflow-hidden">
                    <div className="p-8 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
                        <h2 className="text-xl font-black text-white uppercase tracking-widest">
                            Jadwal Hari Ini ({today})
                        </h2>
                        <span className="px-4 py-1 bg-orange-500/10 text-orange-500 text-[10px] font-bold rounded-full uppercase">
                            Un-Optimized
                        </span>
                    </div>
                    
                    <div className="p-6">
                        {todaySchedule.length > 0 ? (
                            <div className="space-y-4">
                                {todaySchedule.map((s, index) => (
                                    <div key={index} className="flex justify-between items-center p-4 bg-slate-800/30 rounded-2xl border border-slate-800">
                                        <div>
                                            <p className="text-white font-bold">{s.subject}</p>
                                            <p className="text-slate-300 text-xs">{s.teacher}</p>
                                        </div>
                                        <p className="text-blue-400 font-mono text-sm">Durasi Mapel<br />{s.time}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-slate-500 py-10 italic">Tidak ada jadwal pelajaran untuk hari ini.</p>
                        )}
                    </div>
                </div>

            </div>
        </section>
    );
}
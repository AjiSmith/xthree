import React from 'react';

export default function SubHero() {
    const data = [
        { title: 'Visi', desc: 'Menumbuhkan Solidaritas yang berkarakter, bermoral, dan ber-tanggung jawab.' },
        { title: 'Misi', desc: 'Menguasai keterampilan instalasi, konfigurasi, dan keamanan jaringan komputer.' },
        { title: 'Motto', desc: 'Berjuang demi masa depan yang pantas diperjuangkan' }
    ];

    return (
        <section className="py-20 bg-slate-darker relative px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.map((item, index) => (
                        <div key={index} className="p-8 rounded-3xl bg-slate-gray/30 border border-slate-700/50 backdrop-blur-sm hover:border-slate-500 transition-all group">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4 group-hover:text-white transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-xl font-medium text-slate-200 leading-relaxed italic">
                                "{item.desc}"
                            </p>
                        </div>
                    ))}
                </div>
                
                <div className="mt-20 text-center max-w-3xl mx-auto">
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Kami adalah keluarga. Bukan sekadar teman sekelas, melainkan rekan seperjuangan dalam membangun kepribadian yang lebih baik dari sebelumnya.
                    </p>
                </div>
            </div>
        </section>
    );
}
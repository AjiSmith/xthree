import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Index({ auth, requests }) {
    const { post, processing } = useForm();

    const handleApprove = (id) => {
        if (confirm('Are you sure you want to approve this password reset request?')) {
            post(route('password-resets.approve', id));
        }
    };

    const handleReject = (id) => {
        if (confirm('Are you sure you want to reject this password reset request?')) {
            post(route('password-resets.reject', id));
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header="Password Reset Management"
        >
            <Head title="Password Resets" />

            <div className="py-12 bg-slate-950 min-h-screen px-4">
                <div className="max-w-7xl mx-auto">
                    
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="text-white font-black uppercase tracking-widest text-lg italic">Pending Requests <span className="text-rose-500 text-xs tracking-normal font-mono px-2">Critical</span></h3>
                        </div>
                    </div>

                    {requests.length === 0 ? (
                        <div className="bg-[#16192c] border border-white/5 rounded-[2rem] p-20 text-center">
                            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">No pending password reset requests.</p>
                        </div>
                    ) : (
                        <>
                            {/* Mobile View */}
                            <div className="grid grid-cols-1 md:hidden gap-4">
                                {requests.map((req) => (
                                    <div key={req.id} className="bg-[#16192c] border border-white/5 p-6 rounded-[2rem] shadow-xl relative overflow-hidden group">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 font-black">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-sm tracking-tight">{req.email}</h4>
                                                <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase mt-0.5">ID: #{req.id}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-2 border-t border-white/5 pt-4 pb-4">
                                             <div className="flex justify-between items-center">
                                                 <span className="text-xs text-slate-400 font-medium">Status</span>
                                                 <span className="px-2 py-1 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-lg text-[9px] font-black uppercase tracking-wider">
                                                     {req.status}
                                                 </span>
                                             </div>
                                             <div className="flex justify-between items-center">
                                                 <span className="text-xs text-slate-400 font-medium">Requested At</span>
                                                 <span className="text-xs text-white font-mono">{new Date(req.created_at).toLocaleDateString()}</span>
                                             </div>
                                        </div>

                                        <div className="flex gap-2 border-t border-white/5 pt-4">
                                            <button
                                                onClick={() => handleApprove(req.id)}
                                                disabled={processing}
                                                className="flex-1 px-3 py-2 bg-green-500/10 text-green-500 border border-green-500/20 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all"
                                            >
                                                Approve
                                            </button>
                                            <button
                                                onClick={() => handleReject(req.id)}
                                                disabled={processing}
                                                className="flex-1 px-3 py-2 bg-rose-500/10 text-rose-500 border border-rose-500/20 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-500 hover:text-white transition-all"
                                            >
                                                Reject 
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Desktop View */}
                            <div className="hidden md:block bg-[#16192c] rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl overflow-x-auto w-full">
                                <table className="w-full text-left min-w-[700px]">
                                    <thead>
                                        <tr className="bg-white/[0.02] border-b border-white/5">
                                            <th className="p-6 text-[10px] font-black uppercase text-slate-500 tracking-widest">Request ID</th>
                                            <th className="p-6 text-[10px] font-black uppercase text-slate-500 tracking-widest">Account Target</th>
                                            <th className="p-6 text-[10px] font-black uppercase text-slate-500 tracking-widest">Status</th>
                                            <th className="p-6 text-[10px] font-black uppercase text-slate-500 tracking-widest">Timestamp</th>
                                            <th className="p-6 text-[10px] font-black uppercase text-slate-500 tracking-widest text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {requests.map((req) => (
                                            <tr key={req.id} className="hover:bg-white/[0.02] transition-colors group">
                                                <td className="p-6">
                                                    <span className="text-white font-mono font-bold">#{req.id}</span>
                                                </td>
                                                <td className="p-6">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-lg bg-[#0b0d17] border border-white/5 flex items-center justify-center font-black text-indigo-400 transition-colors">
                                                            @
                                                        </div>
                                                        <span className="text-white font-bold text-sm tracking-tight">{req.email}</span>
                                                    </div>
                                                </td>
                                                <td className="p-6">
                                                    <span className="text-[10px] font-black uppercase px-3 py-1.5 rounded-lg border bg-yellow-500/10 text-yellow-500 border-yellow-500/20 tracking-wider">
                                                        {req.status}
                                                    </span>
                                                </td>
                                                <td className="p-6 font-mono text-xs text-slate-400">
                                                    {new Date(req.created_at).toLocaleString()}
                                                </td>
                                                <td className="p-6 text-right">
                                                    <div className="flex gap-2 justify-end">
                                                        <button
                                                            onClick={() => handleApprove(req.id)}
                                                            disabled={processing}
                                                            className="px-4 py-2 bg-green-500/10 text-green-500 border border-green-500/20 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all"
                                                        >
                                                            Approve
                                                        </button>
                                                        <button
                                                            onClick={() => handleReject(req.id)}
                                                            disabled={processing}
                                                            className="px-4 py-2 bg-rose-500/10 text-rose-500 border border-rose-500/20 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-500 hover:text-white transition-all"
                                                        >
                                                            Reject
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </AuthenticatedLayout>
    );
}

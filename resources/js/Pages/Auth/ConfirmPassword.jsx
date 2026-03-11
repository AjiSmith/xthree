import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Confirm Password" />

            <div className="relative group overflow-hidden bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
                
                <div className="absolute top-0 left-0 w-full h-[2px] bg-transparent overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[electric_2s_linear_infinite]"></div>
                </div>

                <div className="relative z-10">
                    <div className="mb-6 text-center">
                        <div className="inline-block p-3 bg-slate-950 border border-slate-800 rounded-full mb-4 shadow-inner">
                            <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h1 className="text-xl font-black text-white tracking-tighter uppercase italic">
                            Security Protocol
                        </h1>
                        <p className="text-slate-400 text-xs mt-4 leading-relaxed font-medium">
                            Ini adalah area terproteksi. Mohon konfirmasi password Anda untuk memverifikasi otoritas akses sebelum melanjutkan.
                        </p>
                    </div>

                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <InputLabel htmlFor="password" value="System Password" className="text-slate-400 text-[10px] uppercase tracking-widest font-bold" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full bg-slate-950 border-slate-800 text-white rounded-lg focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder:text-slate-800"
                                placeholder="••••••••"
                                isFocused={true}
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="flex flex-col gap-3">
                            <PrimaryButton 
                                className="w-full justify-center bg-cyan-600 hover:bg-cyan-500 text-white font-black py-3 rounded-lg transition-all active:scale-[0.98]" 
                                disabled={processing}
                            >
                                VERIFY IDENTITY
                            </PrimaryButton>
                            
                            <p className="text-[9px] text-slate-600 text-center uppercase tracking-[0.2em] font-bold">
                                Authentication Required
                            </p>
                        </div>
                    </form>
                </div>

                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-cyan-500/10 blur-[40px] rounded-full pointer-events-none"></div>
            </div>

            <style jsx>{`
                @keyframes electric {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </GuestLayout>
    );
}
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-500">
                    {status}
                </div>
            )}

            <div className="relative group overflow-hidden bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
                
                <div className="absolute top-0 left-0 w-full h-[2px] bg-transparent overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[electric_2s_linear_infinite]"></div>
                </div>

                <div className="relative z-10">
                    <div className="mb-10 text-center">
                        <h1 className="text-2xl font-black text-white tracking-tighter uppercase">
                            LOG-IN
                        </h1>
                        <p className="text-slate-500 text-xs mt-2 font-bold tracking-widest uppercase opacity-70">
                            Dashboard Panel Authentication
                        </p>
                    </div>

                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <InputLabel htmlFor="email" value="Email Address" className="text-slate-400 text-[10px] uppercase tracking-widest font-bold" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full bg-slate-950 border-slate-800 focus:border-blue-600 focus:ring-blue-600 text-white rounded-lg transition-all"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div>
                            <InputLabel htmlFor="password" value="Password" className="text-slate-400 text-[10px] uppercase tracking-widest font-bold" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full bg-slate-950 border-slate-800 focus:border-blue-600 focus:ring-blue-600 text-white rounded-lg transition-all"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center cursor-pointer">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="bg-slate-950 border-slate-800 text-blue-600 focus:ring-offset-slate-900"
                                />
                                <span className="ms-2 text-xs text-slate-500 font-bold uppercase tracking-tighter">
                                    Remember me
                                </span>
                            </label>
                        </div>

                        <div className="pt-4">
                            <PrimaryButton 
                                className="w-full justify-center bg-blue-600 hover:bg-blue-500 text-white font-black py-3 rounded-lg transition-all active:scale-[0.98] disabled:opacity-50" 
                                disabled={processing}
                            >
                                KONFIRMASI DATA
                            </PrimaryButton>
                        </div>
                    </form>
                </div>

                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full pointer-events-none"></div>
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
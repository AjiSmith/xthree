import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        absen_number: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register Siswa" />
            <div className="relative group overflow-hidden bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl">
                
                <div className="absolute top-0 left-0 w-full h-[2px] bg-transparent overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[electric_2s_linear_infinite]"></div>
                </div>

                <div className="relative z-10">
                    <div className="mb-8 text-center">
                        <h1 className="text-2xl font-black text-white tracking-tighter uppercase italic">
                            Daftar Akun
                        </h1>
                        <p className="text-slate-500 text-[10px] mt-2 font-bold tracking-[0.3em] uppercase opacity-70">
                            Buat Akun Pengurus.
                        </p>
                    </div>

                    <form onSubmit={submit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="md:col-span-2">
                                <InputLabel htmlFor="name" value="Nama Lengkap" className="text-slate-400 text-[10px] uppercase tracking-widest font-bold" />
                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full bg-slate-950 border-slate-800 text-white rounded-lg focus:ring-blue-600 focus:border-blue-600"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />
                                <InputError message={errors.name} className="mt-1" />
                            </div>
                            <div>
                                <InputLabel htmlFor="absen_number" value="Absen" className="text-slate-400 text-[10px] uppercase tracking-widest font-bold" />
                                <TextInput
                                    id="absen_number"
                                    type="number"
                                    name="absen_number"
                                    value={data.absen_number}
                                    className="mt-1 block w-full bg-slate-950 border-slate-800 text-white rounded-lg focus:ring-blue-600"
                                    onChange={(e) => setData('absen_number', e.target.value)}
                                    required
                                />
                                <InputError message={errors.absen_number} className="mt-1" />
                            </div>
                        </div>

                        <div>
                            <InputLabel htmlFor="email" value="Email Address" className="text-slate-400 text-[10px] uppercase tracking-widest font-bold" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full bg-slate-950 border-slate-800 text-white rounded-lg focus:ring-blue-600"
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />
                            <InputError message={errors.email} className="mt-1" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <InputLabel htmlFor="password" value="Password" className="text-slate-400 text-[10px] uppercase tracking-widest font-bold" />
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full bg-slate-950 border-slate-800 text-white rounded-lg focus:ring-blue-600"
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <InputLabel htmlFor="password_confirmation" value="Confirm" className="text-slate-400 text-[10px] uppercase tracking-widest font-bold" />
                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full bg-slate-950 border-slate-800 text-white rounded-lg focus:ring-blue-600"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <InputError message={errors.password} className="mt-1" />

                        <div className="flex flex-col gap-4 pt-4">
                            <PrimaryButton 
                                className="w-full justify-center bg-blue-600 hover:bg-blue-500 text-white font-black py-3 rounded-lg transition-all active:scale-[0.98]" 
                                disabled={processing}
                            >
                                AJUKAN PENDAFTARAN
                            </PrimaryButton>
                            
                            <Link 
                                href={route('login')} 
                                className="text-center text-[10px] text-slate-500 hover:text-white transition-colors font-bold uppercase tracking-widest italic"
                            >
                                Log-In
                            </Link>
                        </div>
                    </form>
                </div>

                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full pointer-events-none"></div>
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
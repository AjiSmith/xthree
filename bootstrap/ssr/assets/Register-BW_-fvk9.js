import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { G as GuestLayout } from "./GuestLayout-DZ-dgND5.js";
import { T as TextInput, I as InputError } from "./TextInput-DmkubRXE.js";
import { I as InputLabel } from "./InputLabel-DDs2XNYP.js";
import { P as PrimaryButton } from "./PrimaryButton-DDF1xnxF.js";
import { useForm, Head, Link } from "@inertiajs/react";
function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    absen_number: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("register"));
  };
  return /* @__PURE__ */ jsxs(GuestLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Register Siswa" }),
    /* @__PURE__ */ jsxs("div", { className: "relative group overflow-hidden bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-[2px] bg-transparent overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[electric_2s_linear_infinite]" }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8 text-center", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-black text-white tracking-tighter uppercase italic", children: "Daftar Akun" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-[10px] mt-2 font-bold tracking-[0.3em] uppercase opacity-70", children: "Buat Akun Pengurus." })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
              /* @__PURE__ */ jsx(InputLabel, { htmlFor: "name", value: "Nama Lengkap", className: "text-slate-400 text-[10px] uppercase tracking-widest font-bold" }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "name",
                  name: "name",
                  value: data.name,
                  className: "mt-1 block w-full bg-slate-950 border-slate-800 text-white rounded-lg focus:ring-blue-600 focus:border-blue-600",
                  autoComplete: "name",
                  isFocused: true,
                  onChange: (e) => setData("name", e.target.value),
                  required: true
                }
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.name, className: "mt-1" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(InputLabel, { htmlFor: "absen_number", value: "Absen", className: "text-slate-400 text-[10px] uppercase tracking-widest font-bold" }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "absen_number",
                  type: "number",
                  name: "absen_number",
                  value: data.absen_number,
                  className: "mt-1 block w-full bg-slate-950 border-slate-800 text-white rounded-lg focus:ring-blue-600",
                  onChange: (e) => setData("absen_number", e.target.value),
                  required: true
                }
              ),
              /* @__PURE__ */ jsx(InputError, { message: errors.absen_number, className: "mt-1" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email Address", className: "text-slate-400 text-[10px] uppercase tracking-widest font-bold" }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "email",
                type: "email",
                name: "email",
                value: data.email,
                className: "mt-1 block w-full bg-slate-950 border-slate-800 text-white rounded-lg focus:ring-blue-600",
                onChange: (e) => setData("email", e.target.value),
                required: true
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-1" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password", className: "text-slate-400 text-[10px] uppercase tracking-widest font-bold" }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "password",
                  type: "password",
                  name: "password",
                  value: data.password,
                  className: "mt-1 block w-full bg-slate-950 border-slate-800 text-white rounded-lg focus:ring-blue-600",
                  onChange: (e) => setData("password", e.target.value),
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password_confirmation", value: "Confirm", className: "text-slate-400 text-[10px] uppercase tracking-widest font-bold" }),
              /* @__PURE__ */ jsx(
                TextInput,
                {
                  id: "password_confirmation",
                  type: "password",
                  name: "password_confirmation",
                  value: data.password_confirmation,
                  className: "mt-1 block w-full bg-slate-950 border-slate-800 text-white rounded-lg focus:ring-blue-600",
                  onChange: (e) => setData("password_confirmation", e.target.value),
                  required: true
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-1" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 pt-4", children: [
            /* @__PURE__ */ jsx(
              PrimaryButton,
              {
                className: "w-full justify-center bg-blue-600 hover:bg-blue-500 text-white font-black py-3 rounded-lg transition-all active:scale-[0.98]",
                disabled: processing,
                children: "AJUKAN PENDAFTARAN"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: route("login"),
                className: "text-center text-[10px] text-slate-500 hover:text-white transition-colors font-bold uppercase tracking-widest italic",
                children: "Log-In"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-10 -left-10 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full pointer-events-none" })
    ] }),
    /* @__PURE__ */ jsx("style", { jsx: true, children: `
                @keyframes electric {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            ` })
  ] });
}
export {
  Register as default
};

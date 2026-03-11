import { jsxs, jsx } from "react/jsx-runtime";
import { T as TextInput, I as InputError } from "./TextInput-DmkubRXE.js";
import { I as InputLabel } from "./InputLabel-DDs2XNYP.js";
import { P as PrimaryButton } from "./PrimaryButton-DDF1xnxF.js";
import { G as GuestLayout } from "./GuestLayout-DZ-dgND5.js";
import { useForm, Head } from "@inertiajs/react";
import "react";
function ConfirmPassword() {
  const { data, setData, post, processing, errors, reset } = useForm({
    password: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("password.confirm"), {
      onFinish: () => reset("password")
    });
  };
  return /* @__PURE__ */ jsxs(GuestLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Confirm Password" }),
    /* @__PURE__ */ jsxs("div", { className: "relative group overflow-hidden bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-[2px] bg-transparent overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[electric_2s_linear_infinite]" }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6 text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-block p-3 bg-slate-950 border border-slate-800 rounded-full mb-4 shadow-inner", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-cyan-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }) }) }),
          /* @__PURE__ */ jsx("h1", { className: "text-xl font-black text-white tracking-tighter uppercase italic", children: "Security Protocol" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-xs mt-4 leading-relaxed font-medium", children: "Ini adalah area terproteksi. Mohon konfirmasi password Anda untuk memverifikasi otoritas akses sebelum melanjutkan." })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "System Password", className: "text-slate-400 text-[10px] uppercase tracking-widest font-bold" }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "password",
                type: "password",
                name: "password",
                value: data.password,
                className: "mt-1 block w-full bg-slate-950 border-slate-800 text-white rounded-lg focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder:text-slate-800",
                placeholder: "••••••••",
                isFocused: true,
                onChange: (e) => setData("password", e.target.value)
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
            /* @__PURE__ */ jsx(
              PrimaryButton,
              {
                className: "w-full justify-center bg-cyan-600 hover:bg-cyan-500 text-white font-black py-3 rounded-lg transition-all active:scale-[0.98]",
                disabled: processing,
                children: "VERIFY IDENTITY"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-[9px] text-slate-600 text-center uppercase tracking-[0.2em] font-bold", children: "Authentication Required" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-10 -right-10 w-24 h-24 bg-cyan-500/10 blur-[40px] rounded-full pointer-events-none" })
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
  ConfirmPassword as default
};

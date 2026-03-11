import { jsxs, jsx } from "react/jsx-runtime";
import { T as TextInput, I as InputError } from "./TextInput-DmkubRXE.js";
import { P as PrimaryButton } from "./PrimaryButton-DDF1xnxF.js";
import { G as GuestLayout } from "./GuestLayout-DZ-dgND5.js";
import { useForm, Head, Link } from "@inertiajs/react";
import "react";
function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    requested_password: "",
    requested_password_confirmation: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("password.request.store"), {
      onSuccess: () => reset("requested_password", "requested_password_confirmation")
    });
  };
  return /* @__PURE__ */ jsxs(GuestLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Forgot Password" }),
    /* @__PURE__ */ jsxs("div", { className: "relative group overflow-hidden bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-[2px] bg-transparent overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[electric_2s_linear_infinite]" }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6 text-center", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-xl font-black text-white tracking-tighter uppercase italic", children: "Recovery System" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-xs mt-4 leading-relaxed font-medium", children: "Forgot your password? Enter your email and the new password you want to use. You can login once an administrator approves your request." })
        ] }),
        status && /* @__PURE__ */ jsx("div", { className: "mb-6 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-sm font-bold text-green-500 text-center uppercase tracking-widest", children: status }),
        /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "email",
                type: "email",
                name: "email",
                value: data.email,
                placeholder: "ENTER REGISTERED EMAIL",
                className: "mt-1 block w-full bg-slate-950 border-slate-800 text-white rounded-lg focus:ring-blue-600 focus:border-blue-600 placeholder:text-slate-700 text-sm tracking-widest",
                isFocused: true,
                onChange: (e) => setData("email", e.target.value)
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "requested_password",
                type: "password",
                name: "requested_password",
                value: data.requested_password,
                placeholder: "ENTER NEW PASSWORD",
                className: "mt-1 block w-full bg-slate-950 border-slate-800 text-white rounded-lg focus:ring-blue-600 focus:border-blue-600 placeholder:text-slate-700 text-sm tracking-widest",
                onChange: (e) => setData("requested_password", e.target.value)
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.requested_password, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "requested_password_confirmation",
                type: "password",
                name: "requested_password_confirmation",
                value: data.requested_password_confirmation,
                placeholder: "CONFIRM NEW PASSWORD",
                className: "mt-1 block w-full bg-slate-950 border-slate-800 text-white rounded-lg focus:ring-blue-600 focus:border-blue-600 placeholder:text-slate-700 text-sm tracking-widest",
                onChange: (e) => setData("requested_password_confirmation", e.target.value)
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.requested_password_confirmation, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsx(
              PrimaryButton,
              {
                className: "w-full justify-center bg-blue-600 hover:bg-blue-500 text-white font-black py-3 rounded-lg transition-all active:scale-[0.98]",
                disabled: processing,
                children: "REQUEST PASSWORD CHANGE"
              }
            ),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: route("login"),
                className: "text-center text-[10px] text-slate-500 hover:text-white transition-colors font-bold uppercase tracking-[0.2em] italic",
                children: "Back to login"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-10 -right-10 w-24 h-24 bg-blue-600/10 blur-[40px] rounded-full pointer-events-none" })
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
  ForgotPassword as default
};

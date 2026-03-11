import { jsx, jsxs } from "react/jsx-runtime";
import { T as TextInput, I as InputError } from "./TextInput-DmkubRXE.js";
import { I as InputLabel } from "./InputLabel-DDs2XNYP.js";
import { P as PrimaryButton } from "./PrimaryButton-DDF1xnxF.js";
import { G as GuestLayout } from "./GuestLayout-DZ-dgND5.js";
import { useForm, Head } from "@inertiajs/react";
import "react";
function Checkbox({ className = "", ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      ...props,
      type: "checkbox",
      className: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800 " + className
    }
  );
}
function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("login"), {
      onFinish: () => reset("password")
    });
  };
  return /* @__PURE__ */ jsxs(GuestLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm font-medium text-green-500", children: status }),
    /* @__PURE__ */ jsxs("div", { className: "relative group overflow-hidden bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-[2px] bg-transparent overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[electric_2s_linear_infinite]" }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-10 text-center", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-black text-white tracking-tighter uppercase", children: "LOG-IN" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-xs mt-2 font-bold tracking-widest uppercase opacity-70", children: "Dashboard Panel Authentication" })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "email", value: "Email Address", className: "text-slate-400 text-[10px] uppercase tracking-widest font-bold" }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "email",
                type: "email",
                name: "email",
                value: data.email,
                className: "mt-1 block w-full bg-slate-950 border-slate-800 focus:border-blue-600 focus:ring-blue-600 text-white rounded-lg transition-all",
                autoComplete: "username",
                isFocused: true,
                onChange: (e) => setData("email", e.target.value)
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(InputLabel, { htmlFor: "password", value: "Password", className: "text-slate-400 text-[10px] uppercase tracking-widest font-bold" }),
            /* @__PURE__ */ jsx(
              TextInput,
              {
                id: "password",
                type: "password",
                name: "password",
                value: data.password,
                className: "mt-1 block w-full bg-slate-950 border-slate-800 focus:border-blue-600 focus:ring-blue-600 text-white rounded-lg transition-all",
                autoComplete: "current-password",
                onChange: (e) => setData("password", e.target.value)
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center cursor-pointer", children: [
            /* @__PURE__ */ jsx(
              Checkbox,
              {
                name: "remember",
                checked: data.remember,
                onChange: (e) => setData("remember", e.target.checked),
                className: "bg-slate-950 border-slate-800 text-blue-600 focus:ring-offset-slate-900"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "ms-2 text-xs text-slate-500 font-bold uppercase tracking-tighter", children: "Remember me" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsx(
            PrimaryButton,
            {
              className: "w-full justify-center bg-blue-600 hover:bg-blue-500 text-white font-black py-3 rounded-lg transition-all active:scale-[0.98] disabled:opacity-50",
              disabled: processing,
              children: "KONFIRMASI DATA"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full pointer-events-none" })
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
  Login as default
};

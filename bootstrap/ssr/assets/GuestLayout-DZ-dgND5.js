import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
function ApplicationLogo(props) {
  return /* @__PURE__ */ jsx(
    "img",
    {
      ...props,
      src: "/images/rlogo.png",
      alt: "Icon",
      className: `w-auto h-20 object-contain ${props.className}`
    }
  );
}
function GuestLayout({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen flex flex-col items-center justify-center bg-slate-950 overflow-hidden px-4", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 mb-8 transition-transform duration-500 hover:scale-110", children: /* @__PURE__ */ jsxs(Link, { href: "/", className: "flex flex-col items-center gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "p-4 shadow-2xl", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "h-12 w-12 fill-current text-blue-500" }) }),
      /* @__PURE__ */ jsx("span", { className: "text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] mt-2", children: "XTHREE SYSTEM" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 w-full sm:max-w-md", children: /* @__PURE__ */ jsx("div", { className: "w-full", children }) }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 mt-12 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-600 font-bold uppercase tracking-widest opacity-50", children: "Identitas Ter-enkripsi" }) })
  ] });
}
export {
  GuestLayout as G
};

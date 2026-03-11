import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-BhlNaAuS.js";
import { useForm, Head } from "@inertiajs/react";
import "react";
function Index({ auth, requests }) {
  const { post, processing } = useForm();
  const handleApprove = (id) => {
    if (confirm("Are you sure you want to approve this password reset request?")) {
      post(route("password-resets.approve", id));
    }
  };
  const handleReject = (id) => {
    if (confirm("Are you sure you want to reject this password reset request?")) {
      post(route("password-resets.reject", id));
    }
  };
  return /* @__PURE__ */ jsxs(
    AuthenticatedLayout,
    {
      user: auth.user,
      header: "Password Reset Management",
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Password Resets" }),
        /* @__PURE__ */ jsx("div", { className: "py-12 bg-slate-950 min-h-screen px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center mb-8", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("h3", { className: "text-white font-black uppercase tracking-widest text-lg italic", children: [
            "Pending Requests ",
            /* @__PURE__ */ jsx("span", { className: "text-rose-500 text-xs tracking-normal font-mono px-2", children: "Critical" })
          ] }) }) }),
          requests.length === 0 ? /* @__PURE__ */ jsx("div", { className: "bg-[#16192c] border border-white/5 rounded-[2rem] p-20 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-sm font-bold uppercase tracking-widest", children: "No pending password reset requests." }) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:hidden gap-4", children: requests.map((req) => /* @__PURE__ */ jsxs("div", { className: "bg-[#16192c] border border-white/5 p-6 rounded-[2rem] shadow-xl relative overflow-hidden group", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 font-black", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }) }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-white font-bold text-sm tracking-tight", children: req.email }),
                  /* @__PURE__ */ jsxs("p", { className: "text-[10px] text-slate-500 font-mono tracking-widest uppercase mt-0.5", children: [
                    "ID: #",
                    req.id
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2 border-t border-white/5 pt-4 pb-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400 font-medium", children: "Status" }),
                  /* @__PURE__ */ jsx("span", { className: "px-2 py-1 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-lg text-[9px] font-black uppercase tracking-wider", children: req.status })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400 font-medium", children: "Requested At" }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs text-white font-mono", children: new Date(req.created_at).toLocaleDateString() })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-2 border-t border-white/5 pt-4", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => handleApprove(req.id),
                    disabled: processing,
                    className: "flex-1 px-3 py-2 bg-green-500/10 text-green-500 border border-green-500/20 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all",
                    children: "Approve"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => handleReject(req.id),
                    disabled: processing,
                    className: "flex-1 px-3 py-2 bg-rose-500/10 text-rose-500 border border-rose-500/20 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-500 hover:text-white transition-all",
                    children: "Reject"
                  }
                )
              ] })
            ] }, req.id)) }),
            /* @__PURE__ */ jsx("div", { className: "hidden md:block bg-[#16192c] rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl overflow-x-auto w-full", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left min-w-[700px]", children: [
              /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-white/[0.02] border-b border-white/5", children: [
                /* @__PURE__ */ jsx("th", { className: "p-6 text-[10px] font-black uppercase text-slate-500 tracking-widest", children: "Request ID" }),
                /* @__PURE__ */ jsx("th", { className: "p-6 text-[10px] font-black uppercase text-slate-500 tracking-widest", children: "Account Target" }),
                /* @__PURE__ */ jsx("th", { className: "p-6 text-[10px] font-black uppercase text-slate-500 tracking-widest", children: "Status" }),
                /* @__PURE__ */ jsx("th", { className: "p-6 text-[10px] font-black uppercase text-slate-500 tracking-widest", children: "Timestamp" }),
                /* @__PURE__ */ jsx("th", { className: "p-6 text-[10px] font-black uppercase text-slate-500 tracking-widest text-right", children: "Actions" })
              ] }) }),
              /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-white/5", children: requests.map((req) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-white/[0.02] transition-colors group", children: [
                /* @__PURE__ */ jsx("td", { className: "p-6", children: /* @__PURE__ */ jsxs("span", { className: "text-white font-mono font-bold", children: [
                  "#",
                  req.id
                ] }) }),
                /* @__PURE__ */ jsx("td", { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-[#0b0d17] border border-white/5 flex items-center justify-center font-black text-indigo-400 transition-colors", children: "@" }),
                  /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-sm tracking-tight", children: req.email })
                ] }) }),
                /* @__PURE__ */ jsx("td", { className: "p-6", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] font-black uppercase px-3 py-1.5 rounded-lg border bg-yellow-500/10 text-yellow-500 border-yellow-500/20 tracking-wider", children: req.status }) }),
                /* @__PURE__ */ jsx("td", { className: "p-6 font-mono text-xs text-slate-400", children: new Date(req.created_at).toLocaleString() }),
                /* @__PURE__ */ jsx("td", { className: "p-6 text-right", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2 justify-end", children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => handleApprove(req.id),
                      disabled: processing,
                      className: "px-4 py-2 bg-green-500/10 text-green-500 border border-green-500/20 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-green-500 hover:text-white transition-all",
                      children: "Approve"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => handleReject(req.id),
                      disabled: processing,
                      className: "px-4 py-2 bg-rose-500/10 text-rose-500 border border-rose-500/20 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-500 hover:text-white transition-all",
                      children: "Reject"
                    }
                  )
                ] }) })
              ] }, req.id)) })
            ] }) })
          ] })
        ] }) })
      ]
    }
  );
}
export {
  Index as default
};

import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-BhlNaAuS.js";
import { useForm, Head } from "@inertiajs/react";
function UserIndex({ users }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, setData, post, put, delete: destroy, processing, reset, errors } = useForm({
    name: "",
    email: "",
    role: "siswa",
    password: "",
    password_confirmation: "",
    absen_number: ""
  });
  const openModal = (user = null) => {
    if (user) {
      setSelectedUser(user);
      setData({ name: user.name, email: user.email, role: user.role, absen_number: user.absen_number || "" });
    } else {
      setSelectedUser(null);
      reset();
    }
    setIsModalOpen(true);
  };
  const submit = (e) => {
    e.preventDefault();
    if (selectedUser) {
      put(route("users.update", selectedUser.id), { onSuccess: () => setIsModalOpen(false) });
    } else {
      post(route("users.store"), { onSuccess: () => setIsModalOpen(false) });
    }
  };
  return /* @__PURE__ */ jsxs(AuthenticatedLayout, { header: "User Management", children: [
    /* @__PURE__ */ jsx(Head, { title: "Manage Accounts" }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxs("h3", { className: "text-white font-black uppercase tracking-widest text-lg italic", children: [
        "Database ",
        /* @__PURE__ */ jsx("span", { className: "text-indigo-500 text-xs tracking-normal font-mono px-2", children: "v2.0" })
      ] }) }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => openModal(),
          className: "w-full md:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-black py-4 px-8 rounded-2xl shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 uppercase text-xs tracking-widest",
          children: [
            /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3", d: "M12 4v16m8-8H4" }) }),
            "Add New Operative"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:hidden gap-4", children: users.map((user) => /* @__PURE__ */ jsxs("div", { className: "bg-[#16192c]/60 backdrop-blur-xl border border-white/5 p-6 rounded-[2rem] shadow-xl relative overflow-hidden group", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-4 flex gap-2", children: /* @__PURE__ */ jsx("button", { onClick: () => openModal(user), className: "p-2 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" }) }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-black", children: user.name.charAt(0) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-white font-black uppercase italic tracking-tighter", children: user.name }),
          /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-500 font-mono tracking-widest uppercase", children: user.role })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2 border-t border-white/5 pt-4", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400 font-medium", children: [
          "Email: ",
          /* @__PURE__ */ jsx("span", { className: "text-white", children: user.email })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400 font-medium", children: [
          "Absen: ",
          /* @__PURE__ */ jsxs("span", { className: "text-indigo-400 font-mono", children: [
            "#",
            user.absen_number || "-"
          ] })
        ] })
      ] })
    ] }, user.id)) }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:block bg-[#16192c]/40 backdrop-blur-xl rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl w-full overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left min-w-[600px]", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-white/[0.02] border-b border-white/5", children: [
        /* @__PURE__ */ jsx("th", { className: "p-6 text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]", children: "Operative" }),
        /* @__PURE__ */ jsx("th", { className: "p-6 text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]", children: "Privileges" }),
        /* @__PURE__ */ jsx("th", { className: "p-6 text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]", children: "Contact Details" }),
        /* @__PURE__ */ jsx("th", { className: "p-6 text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]", children: "Action" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-white/5", children: users.map((user) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-indigo-500/[0.02] transition-colors group", children: [
        /* @__PURE__ */ jsx("td", { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-[#0b0d17] border border-white/5 flex items-center justify-center font-black text-indigo-400 group-hover:border-indigo-500/50 transition-colors", children: user.name.charAt(0) }),
          /* @__PURE__ */ jsx("span", { className: "text-white font-bold uppercase italic tracking-tight", children: user.name })
        ] }) }),
        /* @__PURE__ */ jsx("td", { className: "p-6", children: /* @__PURE__ */ jsx("span", { className: `text-[10px] font-black uppercase px-3 py-1 rounded-full border ${user.role === "admin" || user.role === "developer" ? "bg-purple-500/10 text-purple-400 border-purple-500/20" : "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"}`, children: user.role }) }),
        /* @__PURE__ */ jsx("td", { className: "p-6 font-mono text-xs text-slate-400", children: user.email }),
        /* @__PURE__ */ jsx("td", { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => openModal(user), className: "p-2 hover:bg-white/5 rounded-lg text-slate-500 hover:text-white transition-all", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }) }) }),
          /* @__PURE__ */ jsx("button", { onClick: () => {
            if (confirm("Erase this data?")) destroy(route("users.destroy", user.id));
          }, className: "p-2 hover:bg-rose-500/10 rounded-lg text-slate-500 hover:text-rose-400 transition-all", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" }) }) })
        ] }) })
      ] }, user.id)) })
    ] }) }),
    isModalOpen && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[#0b0d17]/90 backdrop-blur-sm", onClick: () => setIsModalOpen(false) }),
      /* @__PURE__ */ jsxs("div", { className: "bg-[#16192c] border border-white/10 w-full max-w-lg rounded-[2.5rem] p-6 md:p-10 relative z-[210] shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[95vh] overflow-y-auto custom-scrollbar", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-white uppercase italic tracking-tighter mb-8", children: selectedUser ? "Edit Operative" : "Register Operative" }),
        /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("label", { className: "text-[10px] font-black uppercase text-slate-500 tracking-widest ml-1", children: "Full Name" }),
            /* @__PURE__ */ jsx("input", { type: "text", value: data.name, onChange: (e) => setData("name", e.target.value), className: "w-full bg-[#0b0d17] border border-white/5 rounded-2xl p-4 text-white focus:border-indigo-500 transition-all outline-none", required: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx("label", { className: "text-[10px] font-black uppercase text-slate-500 tracking-widest ml-1", children: "Role" }),
              /* @__PURE__ */ jsxs("select", { value: data.role, onChange: (e) => setData("role", e.target.value), className: "w-full bg-[#0b0d17] border border-white/5 rounded-2xl p-4 text-white focus:border-indigo-500 outline-none appearance-none", children: [
                /* @__PURE__ */ jsx("option", { value: "siswa", children: "Siswa" }),
                /* @__PURE__ */ jsx("option", { value: "walikelas", children: "Walikelas" }),
                /* @__PURE__ */ jsx("option", { value: "admin", children: "Admin" }),
                /* @__PURE__ */ jsx("option", { value: "developer", children: "Developer" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx("label", { className: "text-[10px] font-black uppercase text-slate-500 tracking-widest ml-1", children: "Absen #" }),
              /* @__PURE__ */ jsx("input", { type: "text", value: data.absen_number, onChange: (e) => setData("absen_number", e.target.value), className: "w-full bg-[#0b0d17] border border-white/5 rounded-2xl p-4 text-white focus:border-indigo-500 outline-none" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("label", { className: "text-[10px] font-black uppercase text-slate-500 tracking-widest ml-1", children: "Email Access" }),
            /* @__PURE__ */ jsx("input", { type: "email", value: data.email, onChange: (e) => setData("email", e.target.value), className: "w-full bg-[#0b0d17] border border-white/5 rounded-2xl p-4 text-white focus:border-indigo-500 outline-none", required: true })
          ] }),
          !selectedUser && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx("label", { className: "text-[10px] font-black uppercase text-slate-500 tracking-widest ml-1", children: "Security Key" }),
              /* @__PURE__ */ jsx("input", { type: "password", value: data.password, onChange: (e) => setData("password", e.target.value), className: "w-full bg-[#0b0d17] border border-white/5 rounded-2xl p-4 text-white focus:border-indigo-500 outline-none", required: true })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx("label", { className: "text-[10px] font-black uppercase text-slate-500 tracking-widest ml-1", children: "Confirm Key" }),
              /* @__PURE__ */ jsx("input", { type: "password", value: data.password_confirmation, onChange: (e) => setData("password_confirmation", e.target.value), className: "w-full bg-[#0b0d17] border border-white/5 rounded-2xl p-4 text-white focus:border-indigo-500 outline-none", required: true })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4 pt-4", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setIsModalOpen(false), className: "flex-1 p-4 rounded-2xl border border-white/5 text-slate-500 font-bold hover:bg-white/5 transition-all", children: "Cancel" }),
            /* @__PURE__ */ jsx("button", { type: "submit", disabled: processing, className: "flex-[2] bg-indigo-600 hover:bg-indigo-500 text-white font-black p-4 rounded-2xl shadow-xl shadow-indigo-600/20 transition-all uppercase tracking-widest text-xs", children: selectedUser ? "Commit Changes" : "Finalize Registration" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  UserIndex as default
};

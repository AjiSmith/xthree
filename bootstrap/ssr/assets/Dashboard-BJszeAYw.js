import { jsxs, jsx } from "react/jsx-runtime";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-BhlNaAuS.js";
import { usePage, Head } from "@inertiajs/react";
import "react";
function Dashboard({ stats, current_schedule, failed_logins }) {
  const { auth } = usePage().props;
  const user = auth.user;
  return /* @__PURE__ */ jsxs(
    AuthenticatedLayout,
    {
      header: /* @__PURE__ */ jsx("span", { className: "text-white font-black uppercase tracking-[0.3em] text-xs", children: "System Overview" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-[#16192c] p-6 lg:p-8 rounded-[2rem] border border-white/5 flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "w-24 h-24 rounded-[1.5rem] bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-4xl font-black text-indigo-400 shrink-0", children: user.name.charAt(0) }),
            /* @__PURE__ */ jsxs("div", { className: "text-center md:text-left flex-1", children: [
              /* @__PURE__ */ jsxs("h1", { className: "text-2xl lg:text-2xl font-bold text-white tracking-tight mb-2 uppercase", children: [
                "Selamat Datang, ",
                user.name
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm mb-4", children: "Dashboard Panel ini dibuat untuk memudahkan manajemen kelas." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center md:justify-start gap-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col bg-white/5 px-4 py-2 rounded-xl border border-white/5", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-widest text-slate-500 font-bold", children: "Peran Anda" }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs font-black text-white uppercase", children: user.role || "Personnel" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col bg-white/5 px-4 py-2 rounded-xl border border-white/5", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-widest text-slate-500 font-bold", children: "Status Akun" }),
                  /* @__PURE__ */ jsx("span", { className: `text-xs font-black uppercase ${user.is_suspended ? "text-red-400" : "text-green-400"}`, children: user.is_suspended ? "Suspended" : "Active" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col bg-white/5 px-4 py-2 rounded-xl border border-white/5", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-widest text-slate-500 font-bold", children: "ID Akun" }),
                  /* @__PURE__ */ jsxs("span", { className: "text-xs font-mono font-bold text-indigo-400", children: [
                    "#",
                    user.id,
                    " ",
                    /* @__PURE__ */ jsxs("span", { className: "text-slate-500 text-[10px] ml-1", children: [
                      "(Absen: ",
                      user.absen_number || "-",
                      ")"
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-3 gap-6", children: [
            { label: "Akun Terdaftar", value: stats.total_siswa, unit: "akun", color: "text-white", bg: "bg-[#16192c]" },
            { label: "Persentase Kehadiran", value: `${stats.attendance_rate}%`, color: "text-green-400", bg: "bg-[#16192c]" },
            { label: "Mata Pelajaran", value: stats.total_subjects, unit: "mapel", color: "text-indigo-400", bg: "bg-[#16192c]" }
          ].map((stat, i) => /* @__PURE__ */ jsxs("div", { className: `${stat.bg} p-6 rounded-[2rem] border border-white/5 flex flex-col justify-between hover:bg-white/[0.02] transition-colors`, children: [
            /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4", children: stat.label }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-end gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: `text-3xl lg:text-4xl font-black tracking-tighter ${stat.color}`, children: stat.value }),
              /* @__PURE__ */ jsx("span", { className: "text-slate-600 text-[10px] lg:text-xs font-bold uppercase mb-1", children: stat.unit })
            ] })
          ] }, i)) }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-[#16192c] rounded-[2rem] border border-white/5 overflow-hidden", children: [
              /* @__PURE__ */ jsxs("div", { className: "p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xs font-black text-white uppercase tracking-[0.3em]", children: "Operational Schedule" }),
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-slate-400 uppercase bg-black/20 px-3 py-1 rounded-lg", children: "Today" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "divide-y divide-white/5", children: [
                current_schedule.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "p-5 flex items-center gap-6 hover:bg-white/[0.02] transition-colors", children: [
                  /* @__PURE__ */ jsx("div", { className: "bg-[#0b0d17] border border-white/5 w-16 h-12 rounded-xl flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono text-indigo-400 font-bold", children: item.time }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-black text-white uppercase italic tracking-tight", children: item.subject }),
                    /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1", children: item.room })
                  ] })
                ] }, index)),
                current_schedule.length === 0 && /* @__PURE__ */ jsx("div", { className: "p-8 text-center text-slate-500 text-sm font-medium", children: "No schedule blocks initialized for today." })
              ] })
            ] }),
            user.role === "developer" && /* @__PURE__ */ jsxs("div", { className: "bg-[#16192c] rounded-[2rem] border border-white/5 overflow-hidden", children: [
              /* @__PURE__ */ jsxs("div", { className: "p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xs font-black text-white uppercase tracking-[0.3em]", children: "Security Logs" }),
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-red-400 uppercase bg-red-400/10 px-3 py-1 rounded-lg", children: "Failed Attempts" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "divide-y divide-white/5", children: [
                failed_logins.map((log, index) => /* @__PURE__ */ jsxs("div", { className: "p-5 flex items-center gap-4 hover:bg-white/[0.02] transition-colors", children: [
                  /* @__PURE__ */ jsx("div", { className: "bg-red-500/10 border border-red-500/20 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx("i", { className: "fas fa-shield-alt text-red-500 text-xs" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-xs font-black text-white uppercase tracking-tight", children: log.email }),
                    /* @__PURE__ */ jsxs("p", { className: "text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-0.5", children: [
                      "IP: ",
                      log.ip_address
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-[9px] font-mono text-slate-500 font-bold", children: new Date(log.created_at).toLocaleString() })
                ] }, index)),
                failed_logins.length === 0 && /* @__PURE__ */ jsx("div", { className: "p-8 text-center text-slate-500 text-sm font-medium", children: "No suspicious login activity detected." })
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
}
export {
  Dashboard as default
};

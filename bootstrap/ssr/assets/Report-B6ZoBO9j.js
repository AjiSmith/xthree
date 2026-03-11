import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-BhlNaAuS.js";
import { Head, router } from "@inertiajs/react";
function AttendanceReport({ auth, reports = [], currentMonth, currentYear }) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des"
  ];
  const handleFilter = (month) => {
    router.get(route("attendance.report"), { month, year: currentYear }, { preserveState: true });
  };
  return /* @__PURE__ */ jsxs(AuthenticatedLayout, { user: auth.user, header: "Rekapitulasi Absensi Siswa", children: [
    /* @__PURE__ */ jsx(Head, { title: "Rekap Absensi" }),
    /* @__PURE__ */ jsx("div", { className: "py-12 bg-slate-950 min-h-screen px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-start md:justify-between items-center gap-3 md:gap-0 mb-10 overflow-x-auto no-scrollbar py-2 border-b border-slate-800/50", children: months.map((m, index) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => handleFilter(index + 1),
          className: `px-4 py-2 text-[11px] font-black transition-all relative
                                    ${currentMonth === index + 1 ? "text-blue-500 scale-110" : "text-slate-600 hover:text-slate-400"}`,
          children: [
            m,
            currentMonth === index + 1 && /* @__PURE__ */ jsx("span", { className: "absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]" })
          ]
        },
        m
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 rounded-[3rem] border border-slate-800/50 overflow-hidden shadow-2xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black text-white tracking-tighter italic", children: "REKAPITULASI." }),
            /* @__PURE__ */ jsxs("p", { className: "text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1", children: [
              "Tahun Ajaran ",
              currentYear,
              "/",
              currentYear + 1
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 px-5 py-2 rounded-2xl border border-slate-700/50", children: [
            /* @__PURE__ */ jsx("span", { className: "text-blue-500 font-black text-sm", children: reports.length }),
            /* @__PURE__ */ jsx("span", { className: "text-slate-500 text-[10px] font-bold ml-2 uppercase", children: "Siswa Terdata" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "px-4 pb-8", children: /* @__PURE__ */ jsx("div", { className: "bg-slate-950/50 rounded-[2rem] border border-slate-800/50 divide-y divide-slate-900", children: reports.length > 0 ? reports.map((r) => /* @__PURE__ */ jsxs("div", { className: "p-5 flex items-center justify-between group hover:bg-slate-800/10 transition-all", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-black text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all", children: r.name.substring(0, 2).toUpperCase() }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-slate-200 font-bold text-xs tracking-tight", children: r.name }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-600 text-[9px] font-mono tracking-tighter", children: r.nisn || "NO-ID" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 md:gap-6", children: [
            /* @__PURE__ */ jsx(MiniStat, { label: "H", value: r.hadir, activeColor: "text-green-500" }),
            /* @__PURE__ */ jsx(MiniStat, { label: "S", value: r.sakit, activeColor: "text-yellow-500" }),
            /* @__PURE__ */ jsx(MiniStat, { label: "I", value: r.izin, activeColor: "text-blue-400" }),
            /* @__PURE__ */ jsx(MiniStat, { label: "A", value: r.alfa, activeColor: "text-red-500" })
          ] })
        ] }, r.id)) : /* @__PURE__ */ jsx("div", { className: "py-20 text-center text-slate-600 text-[11px] uppercase font-black tracking-widest", children: "Kosong." }) }) })
      ] })
    ] }) })
  ] });
}
function MiniStat({ label, value, activeColor }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center min-w-[20px]", children: [
    /* @__PURE__ */ jsx("span", { className: `text-[10px] font-black ${value > 0 ? activeColor : "text-slate-800"}`, children: value }),
    /* @__PURE__ */ jsx("span", { className: `text-[8px] font-bold ${value > 0 ? activeColor : "text-slate-700"} uppercase`, children: label })
  ] });
}
export {
  AttendanceReport as default
};

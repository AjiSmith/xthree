import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-BhlNaAuS.js";
import { useForm, Head } from "@inertiajs/react";
function AttendanceIndex({ auth, students, attendances, selectedDate }) {
  const initialAttendance = {};
  students.forEach((s) => {
    const existing = attendances.find((a) => a.student_id === s.id);
    initialAttendance[s.id] = existing ? existing.status : "Hadir";
  });
  const { data, setData, post, processing } = useForm({
    date: selectedDate,
    attendance: initialAttendance
  });
  const handleStatusChange = (studentId, status) => {
    setData("attendance", { ...data.attendance, [studentId]: status });
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("attendance.store"));
  };
  const statusOptions = [
    { label: "H", value: "Hadir", color: "bg-green-500" },
    { label: "S", value: "Sakit", color: "bg-yellow-500" },
    { label: "I", value: "Izin", color: "bg-blue-500" },
    { label: "A", value: "Alfa", color: "bg-red-500" }
  ];
  return /* @__PURE__ */ jsxs(AuthenticatedLayout, { user: auth.user, header: "Management Absensi Siswa", children: [
    /* @__PURE__ */ jsx(Head, { title: "Absensi Kelas" }),
    /* @__PURE__ */ jsx("div", { className: "py-12 bg-slate-950 min-h-screen px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 rounded-[2.5rem] border border-slate-800 overflow-hidden shadow-2xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-8 border-b border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-black text-white uppercase tracking-widest", children: "Absensi Digital" }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-500 text-xs mt-1", children: [
            "Total: ",
            students.length,
            " Siswa Terdaftar"
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "date",
            className: "bg-slate-800 border-none rounded-2xl text-white text-sm focus:ring-2 focus:ring-blue-500",
            value: data.date,
            onChange: (e) => window.location.href = route("attendance.index", { date: e.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
        /* @__PURE__ */ jsx("div", { className: "divide-y divide-slate-800/50", children: students.map((student) => /* @__PURE__ */ jsxs("div", { className: "p-5 flex items-center justify-between hover:bg-slate-800/20 transition-all", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 font-bold text-xs", children: student.name.charAt(0) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-white font-bold text-sm", children: student.name }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-[10px] uppercase font-mono", children: student.nisn || "Tanpa NISN" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-2 overflow-x-auto no-scrollbar pb-1", children: statusOptions.map((opt) => /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => handleStatusChange(student.id, opt.value),
              className: `w-10 h-10 rounded-xl text-[10px] font-black transition-all border-2 
                                                        ${data.attendance[student.id] === opt.value ? `${opt.color} border-transparent text-white scale-110 shadow-lg shadow-${opt.color}/20` : "bg-transparent border-slate-800 text-slate-500 hover:border-slate-600"}`,
              children: opt.label
            },
            opt.value
          )) })
        ] }, student.id)) }),
        /* @__PURE__ */ jsx("div", { className: "p-8 bg-slate-900/50 border-t border-slate-800", children: /* @__PURE__ */ jsx(
          "button",
          {
            disabled: processing,
            className: "w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-xs uppercase transition-all tracking-widest",
            children: "Simpan Absensi Hari Ini"
          }
        ) })
      ] })
    ] }) }) })
  ] });
}
export {
  AttendanceIndex as default
};

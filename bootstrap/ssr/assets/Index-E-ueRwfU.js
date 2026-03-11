import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-BhlNaAuS.js";
import { useForm, Head } from "@inertiajs/react";
function StudentIndex({ auth, students }) {
  const { data, setData, post, delete: destroy, processing, reset } = useForm({
    nisn: "",
    name: "",
    gender: "",
    address: "",
    phone: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post(route("students.store"), { onSuccess: () => reset() });
  };
  return /* @__PURE__ */ jsxs(AuthenticatedLayout, { user: auth.user, header: "Management Data Siswa", children: [
    /* @__PURE__ */ jsx(Head, { title: "Data Siswa" }),
    /* @__PURE__ */ jsx("div", { className: "py-12 bg-slate-950 min-h-screen", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full md:w-1/3", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 p-6 rounded-[2rem] border border-slate-800 sticky top-6", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-white font-bold mb-6 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-blue-500 rounded-full" }),
          "Tambah Siswa Baru"
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-[10px] font-black text-slate-500 uppercase ml-2", children: "NISN (Opsional)" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                className: "w-full bg-slate-800 border-none rounded-2xl text-white mt-1 text-sm focus:ring-2 focus:ring-blue-500",
                value: data.nisn,
                onChange: (e) => setData("nisn", e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-[10px] font-black text-slate-500 uppercase ml-2", children: "Nama Lengkap" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                required: true,
                className: "w-full bg-slate-800 border-none rounded-2xl text-white mt-1 text-sm focus:ring-2 focus:ring-blue-500",
                value: data.name,
                onChange: (e) => setData("name", e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-[10px] font-black text-slate-500 uppercase ml-2", children: "Jenis Kelamin" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                required: true,
                className: "w-full bg-slate-800 border-none rounded-2xl text-white mt-1 text-sm focus:ring-2 focus:ring-blue-500",
                value: data.gender,
                onChange: (e) => setData("gender", e.target.value),
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Pilih" }),
                  /* @__PURE__ */ jsx("option", { value: "L", children: "Laki-laki" }),
                  /* @__PURE__ */ jsx("option", { value: "P", children: "Perempuan" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-[10px] font-black text-slate-500 uppercase ml-2", children: "Nomor HP" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                className: "w-full bg-slate-800 border-none rounded-2xl text-white mt-1 text-sm focus:ring-2 focus:ring-blue-500",
                value: data.phone,
                onChange: (e) => setData("phone", e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsx("button", { disabled: processing, className: "w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-xs uppercase transition-all shadow-lg shadow-blue-500/20", children: "Simpan Data Siswa" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "w-full md:w-2/3 space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:hidden gap-4", children: students.map((student) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 border border-slate-800 p-5 rounded-2xl relative shadow-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-3 border-b border-slate-800 pb-3", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-white font-bold text-sm tracking-tight", children: student.name }),
              /* @__PURE__ */ jsxs("p", { className: "text-slate-500 text-[10px] uppercase font-mono mt-0.5", children: [
                "NISN: ",
                student.nisn || "-"
              ] })
            ] }),
            /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${student.gender === "L" ? "bg-blue-500/10 text-blue-500" : "bg-pink-500/10 text-pink-500"}`, children: student.gender === "L" ? "Laki" : "Pr" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-1 mb-4", children: /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400", children: [
            "Kontak: ",
            /* @__PURE__ */ jsx("span", { className: "text-white font-mono", children: student.phone || "-" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-end border-t border-slate-800 pt-3 mt-3", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => confirm("Hapus siswa ini?") && destroy(route("students.destroy", student.id)),
              className: "text-red-500 hover:text-red-400 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 bg-red-500/10 rounded-lg transition-colors",
              children: "Hapus Siswa"
            }
          ) })
        ] }, student.id)) }),
        /* @__PURE__ */ jsxs("div", { className: "hidden md:block bg-slate-900 rounded-[2rem] border border-slate-800 overflow-hidden w-full overflow-x-auto", children: [
          /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse min-w-[600px]", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-slate-800/50", children: [
              /* @__PURE__ */ jsx("th", { className: "p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest", children: "Nama Siswa" }),
              /* @__PURE__ */ jsx("th", { className: "p-5 text-[10px] font-black text-slate-400 uppercase text-center tracking-widest", children: "L/P" }),
              /* @__PURE__ */ jsx("th", { className: "p-5 text-[10px] font-black text-slate-400 uppercase tracking-widest", children: "Kontak" }),
              /* @__PURE__ */ jsx("th", { className: "p-5 text-[10px] font-black text-slate-400 uppercase text-right tracking-widest", children: "Aksi" })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-slate-800", children: students.map((student) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-800/30 transition-colors", children: [
              /* @__PURE__ */ jsxs("td", { className: "p-5", children: [
                /* @__PURE__ */ jsx("p", { className: "text-white font-bold text-sm", children: student.name }),
                /* @__PURE__ */ jsxs("p", { className: "text-slate-500 text-[10px] font-mono mt-0.5", children: [
                  "NISN: ",
                  student.nisn || "-"
                ] })
              ] }),
              /* @__PURE__ */ jsx("td", { className: "p-5 text-center", children: /* @__PURE__ */ jsx("span", { className: `px-3 py-1 rounded-full text-[10px] font-bold ${student.gender === "L" ? "bg-blue-500/10 text-blue-500" : "bg-pink-500/10 text-pink-500"}`, children: student.gender }) }),
              /* @__PURE__ */ jsx("td", { className: "p-5 text-slate-400 text-xs font-mono", children: student.phone || "-" }),
              /* @__PURE__ */ jsx("td", { className: "p-5 text-right", children: /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => confirm("Hapus siswa ini?") && destroy(route("students.destroy", student.id)),
                  className: "text-rose-500 hover:text-rose-400 text-[10px] font-black uppercase tracking-widest px-4 py-2 hover:bg-rose-500/10 rounded-xl transition-all",
                  children: "Hapus"
                }
              ) })
            ] }, student.id)) })
          ] }),
          students.length === 0 && /* @__PURE__ */ jsx("div", { className: "p-20 text-center text-slate-500 italic text-sm", children: "Belum ada data siswa." })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  StudentIndex as default
};

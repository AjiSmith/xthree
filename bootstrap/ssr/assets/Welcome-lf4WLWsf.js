import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Link, Head } from "@inertiajs/react";
import { motion } from "framer-motion";
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-darker", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/background.png",
          className: "w-full h-full object-cover blur-sm opacity-40 scale-105",
          alt: "Class Memory"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-slate-darker/30 via-slate-darker/10 to-slate-darker" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-4xl font-black text-white tracking-tighter mb-1 animate-fade-in", children: "Website Classroom of" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-7xl font-black text-white tracking-tighter mb-10 animate-fade-in", children: /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-white to-slate-400 bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]", children: "Teknik Komputer Jaringan III" }) }),
      /* @__PURE__ */ jsxs("p", { className: "text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8", children: [
        "Tidak akan disebut gagal bagi mereka yang menikmati perjuangan.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-white font-bold underline decoration-slate-500", children: "Selamat datang di tempat berkembangnya pria kuat" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: /* @__PURE__ */ jsx("a", { href: "#schedule", className: "px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-all transform hover:scale-105", children: "Jadwal Pelajaran" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-gray to-transparent" })
  ] });
}
function SubHero() {
  const data = [
    { title: "Visi", desc: "Menumbuhkan Solidaritas yang berkarakter, bermoral, dan ber-tanggung jawab." },
    { title: "Misi", desc: "Menguasai keterampilan instalasi, konfigurasi, dan keamanan jaringan komputer." },
    { title: "Motto", desc: "Berjuang demi masa depan yang pantas diperjuangkan" }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-slate-darker relative px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: data.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "p-8 rounded-3xl bg-slate-gray/30 border border-slate-700/50 backdrop-blur-sm hover:border-slate-500 transition-all group", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold uppercase tracking-widest text-slate-500 mb-4 group-hover:text-white transition-colors", children: item.title }),
      /* @__PURE__ */ jsxs("p", { className: "text-xl font-medium text-slate-200 leading-relaxed italic", children: [
        '"',
        item.desc,
        '"'
      ] })
    ] }, index)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-20 text-center max-w-3xl mx-auto", children: /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-lg leading-relaxed", children: "Kami adalah keluarga. Bukan sekadar teman sekelas, melainkan rekan seperjuangan dalam membangun kepribadian yang lebih baik dari sebelumnya." }) })
  ] }) });
}
function ClassInfo() {
  const structures = [
    { position: "Ketua Kelas", name: "Farhan Dwi Prayogi" },
    { position: "Wakil Ketua", name: "Muhammad Rafa Caina" },
    { position: "Sekretaris", name: "Azimas Perwata Saputra" },
    { position: "Bendahara", name: "M. Hafizh Nayaka" }
  ];
  const allSchedules = {
    "Senin": [
      { subject: "Matematika", teacher: "Bpk. Budi", time: "07:00 - 08:30" },
      { subject: "B. Indonesia", teacher: "Ibu Siti", time: "08:30 - 10:00" }
    ],
    "Selasa": [
      { subject: "Fisika", teacher: "Bpk. Andi", time: "07:00 - 09:00" },
      { subject: "Olahraga", teacher: "Bpk. Jaka", time: "09:00 - 10:30" }
    ],
    "Rabu": [
      { subject: "Pencolian", teacher: "Witri si tobrut", time: "06:00 - 02:00" }
    ]
  };
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const today = days[(/* @__PURE__ */ new Date()).getDay()];
  const todaySchedule = allSchedules[today] || [];
  return /* @__PURE__ */ jsx("section", { id: "schedule", className: "py-24 bg-slate-950 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-20 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-black text-white mb-12 uppercase italic", children: "Struktur Organisasi" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: structures.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "p-8 bg-slate-900/50 rounded-[2.5rem] border border-slate-800", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[10px] text-blue-400 uppercase font-black mb-1", children: item.position }),
        /* @__PURE__ */ jsx("p", { className: "text-white font-bold text-lg", children: item.name })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/30 rounded-[3rem] border border-slate-800 overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-8 border-b border-slate-800 flex justify-between items-center bg-slate-900/50", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-xl font-black text-white uppercase tracking-widest", children: [
          "Jadwal Hari Ini (",
          today,
          ")"
        ] }),
        /* @__PURE__ */ jsx("span", { className: "px-4 py-1 bg-orange-500/10 text-orange-500 text-[10px] font-bold rounded-full uppercase", children: "Un-Optimized" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "p-6", children: todaySchedule.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-4", children: todaySchedule.map((s, index) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-4 bg-slate-800/30 rounded-2xl border border-slate-800", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-white font-bold", children: s.subject }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-300 text-xs", children: s.teacher })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-blue-400 font-mono text-sm", children: [
          "Durasi Mapel",
          /* @__PURE__ */ jsx("br", {}),
          s.time
        ] })
      ] }, index)) }) : /* @__PURE__ */ jsx("p", { className: "text-center text-slate-500 py-10 italic", children: "Tidak ada jadwal pelajaran untuk hari ini." }) })
    ] })
  ] }) });
}
function MemorySection() {
  const [rotation, setRotation] = useState(0);
  const photos = [
    { id: 1, src: "/images/landscape1.jpg", title: "Class Trip" },
    { id: 2, src: "/images/portrait1.jpg", title: "Programming" },
    { id: 3, src: "/images/landscape2.jpg", title: "Workshop" },
    { id: 4, src: "/images/portrait2.jpg", title: "Daily Life" },
    { id: 5, src: "/images/landscape3.jpg", title: "Final Project" }
  ];
  const angleStep = 360 / photos.length;
  const rotateNext = () => setRotation((prev) => prev - angleStep);
  const rotatePrev = () => setRotation((prev) => prev + angleStep);
  return /* @__PURE__ */ jsx("section", { className: "py-32 bg-slate-darker overflow-hidden border-t border-slate-900", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4", children: [
        "Memorial ",
        /* @__PURE__ */ jsx("span", { className: "text-blue-500 italic text-5xl md:text-6xl", children: "Section." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-500 text-[10px] font-black uppercase tracking-[0.5em]", children: "X TKJ-3 Digital Archives" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative w-full h-[350px] md:h-[450px] flex items-center justify-center [perspective:1500px]", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "relative w-60 h-72 md:w-72 md:h-96 [transform-style:preserve-3d]",
          animate: { rotateY: rotation },
          transition: { type: "spring", stiffness: 40, damping: 20 },
          children: photos.map((photo, index) => {
            const angle = index * angleStep;
            return /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "absolute inset-0 bg-slate-900 border-2 border-slate-800 p-1.5 rounded-2xl shadow-2xl overflow-hidden [backface-visibility:hidden]",
                style: {
                  transform: `rotateY(${angle}deg) translateZ(${window.innerWidth < 768 ? "250px" : "400px"})`
                },
                children: /* @__PURE__ */ jsxs("div", { className: "w-full h-full relative group bg-slate-800", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: photo.src,
                      alt: photo.title,
                      className: "w-full h-full object-cover rounded-xl transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 grayscale hover:grayscale-0"
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-[9px] text-blue-400 font-black uppercase tracking-widest mb-0.5", children: "Memories" }),
                    /* @__PURE__ */ jsx("p", { className: "text-white font-bold text-xs truncate uppercase tracking-tighter", children: photo.title })
                  ] })
                ] })
              },
              photo.id
            );
          })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:-mx-20 pointer-events-none", children: [
        /* @__PURE__ */ jsx("button", { onClick: rotatePrev, className: "pointer-events-auto w-12 h-12 bg-slate-900/80 border border-slate-800 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-all shadow-2xl", children: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "3", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M15 19l-7-7 7-7" }) }) }),
        /* @__PURE__ */ jsx("button", { onClick: rotateNext, className: "pointer-events-auto w-12 h-12 bg-slate-900/80 border border-slate-800 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-all shadow-2xl", children: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "3", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M9 5l7 7-7 7" }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-20 flex flex-col items-center gap-4", children: /* @__PURE__ */ jsx("div", { className: "flex gap-1", children: photos.map((_, i) => /* @__PURE__ */ jsx("div", { className: `h-1 w-4 rounded-full transition-all ${Math.abs(rotation / angleStep) % photos.length === i ? "bg-blue-500 w-8" : "bg-slate-800"}` }, i)) }) })
  ] }) }) });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "relative bg-[#0b0d17]/80 backdrop-blur-md px-6 py-4", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-[1px] bg-white/5 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-[electric_3s_linear_infinite]" }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-white font-black italic tracking-tighter text-sm uppercase", children: [
          "X TKJ ",
          /* @__PURE__ */ jsx("span", { className: "text-indigo-500", children: "3" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "h-4 w-[1px] bg-slate-800" }),
        /* @__PURE__ */ jsxs("p", { className: "text-[10px] text-slate-500 font-medium uppercase tracking-widest leading-none", children: [
          "© 2026 XThree • ",
          /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "Azimas Perwata Saputra" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden lg:flex items-center gap-2", children: ["Laravel 11", "React", "Inertia", "Tailwind"].map((tech) => /* @__PURE__ */ jsx("span", { className: "text-[8px] text-slate-600 border border-white/4 px-2 py-0.5 rounded-md font-bold uppercase tracking-tighter", children: tech }, tech)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest", children: [
          /* @__PURE__ */ jsx("a", { href: "https://instagram.com/x_tkj.threee", target: "_blank", rel: "noreferrer", className: "hover:text-indigo-400 transition-colors", children: "Instagram" }),
          /* @__PURE__ */ jsx("a", { href: "https://instagram.com/smth.bndz", target: "_blank", rel: "noreferrer", className: "hover:text-indigo-400 transition-colors", children: "Dev" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-[9px] text-slate-700 font-mono italic", children: "v0.4s" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: `
                @keyframes electric {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            ` } })
  ] });
}
function Navbar({ auth }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("#account-dropdown-container")) {
        setIsAccountOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return /* @__PURE__ */ jsx("nav", { className: `fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? "bg-slate-darker/90 backdrop-blur-md shadow-lg border-b border-white/5 py-4" : "bg-transparent py-6"}`, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs(Link, { href: "/", className: "flex items-center gap-2 group", children: [
      /* @__PURE__ */ jsx("div", { className: "w-10 h-10 md:w-13 md:h-10 flex items-center justify-center transform group-hover:rotate-12 transition-transform", children: /* @__PURE__ */ jsx("img", { src: "images/rlogo.png" }) }),
      /* @__PURE__ */ jsx("span", { className: "text-white font-black text-lg md:text-xl tracking-tighter italic", children: "X TKJ-3" })
    ] }),
    /* @__PURE__ */ jsxs("div", { id: "account-dropdown-container", className: "relative", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setIsAccountOpen(!isAccountOpen),
          className: `flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-300 border ${isAccountOpen ? "bg-white text-slate-darker border-white" : "bg-white/10 text-white border-white/20 hover:bg-white/20"}`,
          children: [
            /* @__PURE__ */ jsx("span", { children: "Account" }),
            /* @__PURE__ */ jsx("svg", { className: `w-4 h-4 transition-transform duration-300 ${isAccountOpen ? "rotate-180" : ""}`, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: `absolute right-0 mt-3 w-48 bg-slate-800 border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-top-right ${isAccountOpen ? "scale-100 opacity-100 visible" : "scale-95 opacity-0 invisible"}`, children: /* @__PURE__ */ jsx("div", { className: "p-2 space-y-1", children: auth && auth.user ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { className: "px-4 py-2 border-b border-white/5 mb-1", children: [
          /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-widest", children: "Signed in as" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-black text-white truncate", children: auth.user.name })
        ] }),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("dashboard"),
            className: "flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium",
            children: "Dashboard"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("logout"),
            method: "post",
            as: "button",
            className: "w-full flex items-center gap-2 px-4 py-2 text-sm text-rose-400 hover:text-rose-300 hover:bg-rose-400/10 rounded-xl transition-colors font-medium text-left",
            children: "Logout"
          }
        )
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("login"),
            className: "flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium",
            children: "Log-in"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            href: route("register"),
            className: "flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium",
            children: "Register"
          }
        )
      ] }) }) })
    ] })
  ] }) });
}
function Welcome(auth) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Home Page" }),
    /* @__PURE__ */ jsxs("div", { className: "bg-slate-darker min-h-screen selection:bg-white selection:text-black relative", children: [
      /* @__PURE__ */ jsx(Navbar, { auth }),
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(SubHero, {}),
      /* @__PURE__ */ jsx("div", { className: "h-32 bg-gradient-to-b from-slate-darker to-slate-gray" }),
      /* @__PURE__ */ jsx(ClassInfo, {}),
      /* @__PURE__ */ jsx("div", { className: "h-32 bg-gradient-to-b from-slate-gray to-slate-darker" }),
      /* @__PURE__ */ jsx(MemorySection, {}),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
export {
  Welcome as default
};

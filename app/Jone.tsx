"use client";

import { useEffect, useRef } from "react";

// Noise texture SVG as data URI for the dark velvet background effect
const noiseDataUri = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`;

const artworks = [
  {
    id: 1,
    title: "Memento Mori",
    year: "XVII Century",
    medium: "Marble & Shadow",
    desc: "A sculptural meditation on mortality — where stone meets the void.",
  },
  {
    id: 2,
    title: "The Unnamed Portrait",
    year: "c. 1650",
    medium: "Oil on Canvas",
    desc: "Identity dissolves into darkness, leaving only the gaze behind.",
  },
  {
    id: 3,
    title: "Veil of Reason",
    year: "1964",
    medium: "Surrealist Oil",
    desc: "The face concealed, the self obscured — a man without a face.",
  },
  {
    id: 4,
    title: "Las Meninas Redux",
    year: "1656 / 2024",
    medium: "Digital Reinterpretation",
    desc: "Power, gaze, and invisibility reframed for the contemporary eye.",
  },
];

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundColor: "#0d1f18",
        backgroundImage: `
          radial-gradient(ellipse at 70% 20%, rgba(30,60,40,0.6) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 80%, rgba(15,35,25,0.8) 0%, transparent 50%),
          ${noiseDataUri}
        `,
        backgroundBlendMode: "normal",
        fontFamily: "'EB Garamond', Georgia, serif",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Cormorant+Garamond:wght@300;400;600&family=Josefin+Sans:wght@100;300&display=swap');

        .fade-in {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .artwork-card:hover .artwork-overlay {
          opacity: 1;
        }
        .artwork-card:hover img,
        .artwork-card:hover .artwork-placeholder {
          transform: scale(1.04);
          filter: brightness(0.7) sepia(0.2);
        }
        .hex-clip {
          clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
        }
        .timeline-dot::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(180,210,190,0.5);
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-1 { animation: fadeSlideUp 1s ease 0.1s both; }
        .anim-2 { animation: fadeSlideUp 1s ease 0.3s both; }
        .anim-3 { animation: fadeSlideUp 1s ease 0.5s both; }
        .anim-4 { animation: fadeSlideUp 1s ease 0.7s both; }
        .anim-5 { animation: fadeSlideUp 1s ease 0.9s both; }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center px-10 py-7">
        {/* Logo — left blank */}
        <div className="w-12 h-12 flex items-center justify-center">
          {/* Logo placeholder — replace with your SVG/Image */}
        </div>

        <div className="flex gap-10 ml-20">
          {["Artworks", "For the Artist", "For Art Lovers"].map((item, i) => (
            <a
              key={item}
              href="#"
              className="text-sm tracking-widest uppercase transition-colors duration-300"
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 300,
                color: i === 0 ? "rgba(210,230,215,0.95)" : "rgba(150,175,160,0.6)",
                letterSpacing: "0.12em",
                borderBottom: i === 0 ? "1px solid rgba(180,210,190,0.4)" : "none",
                paddingBottom: i === 0 ? "2px" : "0",
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* ── VERTICAL TIMELINE LINE ── */}
      <div
        ref={lineRef}
        className="absolute z-10"
        style={{
          left: "12%",
          top: "12%",
          bottom: "38%",
          width: "1px",
          backgroundColor: "rgba(150,185,165,0.25)",
        }}
      >
        {/* midpoint dot */}
        <div
          className="timeline-dot absolute"
          style={{
            left: "-4px",
            top: "55%",
            width: "9px",
            height: "9px",
            borderRadius: "50%",
            border: "1px solid rgba(180,210,190,0.5)",
          }}
        />
      </div>

      {/* ── HERO UPPER: Hexagonal featured artwork ── */}
      <div className="relative z-20 flex justify-end pt-24 pr-16 anim-2">
        <div
          className="hex-clip overflow-hidden"
          style={{
            width: 340,
            height: 380,
            border: "1.5px solid rgba(130,170,145,0.35)",
            background: "rgba(10,25,18,0.4)",
          }}
        >
          {/* Featured artwork placeholder */}
          <div
            className="artwork-placeholder w-full h-full flex flex-col items-center justify-center transition-all duration-700"
            style={{
              background: "linear-gradient(160deg, rgba(20,45,32,0.9) 0%, rgba(8,18,13,1) 100%)",
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "13px",
                letterSpacing: "0.25em",
                color: "rgba(160,195,175,0.4)",
                textTransform: "uppercase",
              }}
            >
              Featured Work
            </p>
            <p
              style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: "22px",
                color: "rgba(200,225,210,0.25)",
                marginTop: "8px",
              }}
            >
              Place your image here
            </p>
          </div>
        </div>
      </div>

      {/* ── SECTION LABEL ── */}
      <div
        className="absolute z-20 anim-3"
        style={{ left: "14%", top: "58%" }}
      >
        <p
          style={{
            fontFamily: "'Josefin Sans', sans-serif",
            fontWeight: 100,
            fontSize: "10px",
            letterSpacing: "0.35em",
            color: "rgba(150,180,165,0.4)",
            textTransform: "uppercase",
          }}
        >
          Selected Works
        </p>
      </div>

      {/* ── SECOND TIMELINE LINE (right side) ── */}
      <div
        className="absolute z-10"
        style={{
          right: "30%",
          top: "62%",
          height: "80px",
          width: "1px",
          backgroundColor: "rgba(150,185,165,0.2)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "-3px",
            width: "7px",
            height: "7px",
            borderLeft: "1px solid rgba(180,210,190,0.4)",
            borderTop: "1px solid rgba(180,210,190,0.4)",
            transform: "rotate(45deg)",
          }}
        />
      </div>

      {/* ── ARTWORKS GRID ── */}
      <div
        className="relative z-20 grid grid-cols-3 gap-6 px-12 anim-4"
        style={{ marginTop: "auto", paddingBottom: "64px", paddingTop: "8px" }}
      >
        {artworks.slice(1).map((art, idx) => (
          <div
            key={art.id}
            className="artwork-card relative overflow-hidden cursor-pointer group"
            style={{
              border: "1px solid rgba(130,165,145,0.2)",
              background: "rgba(10,22,16,0.5)",
              aspectRatio: "3/4",
            }}
          >
            {/* Placeholder content */}
            <div
              className="artwork-placeholder w-full h-full flex flex-col items-end justify-end p-5 transition-all duration-700"
              style={{
                background: `linear-gradient(${160 + idx * 15}deg, rgba(18,38,28,0.95) 0%, rgba(6,14,10,1) 100%)`,
              }}
            >
              {/* Corner accent */}
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  width: 24,
                  height: 24,
                  borderTop: "1px solid rgba(160,200,175,0.2)",
                  borderLeft: "1px solid rgba(160,200,175,0.2)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 12,
                  right: 12,
                  width: 24,
                  height: 24,
                  borderBottom: "1px solid rgba(160,200,175,0.2)",
                  borderRight: "1px solid rgba(160,200,175,0.2)",
                }}
              />

              {/* Artwork info */}
              <div className="text-left w-full">
                <p
                  style={{
                    fontFamily: "'Josefin Sans', sans-serif",
                    fontWeight: 100,
                    fontSize: "9px",
                    letterSpacing: "0.3em",
                    color: "rgba(130,170,150,0.45)",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                  }}
                >
                  {art.year} · {art.medium}
                </p>
                <p
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontSize: "17px",
                    fontWeight: 400,
                    color: "rgba(200,225,212,0.7)",
                    lineHeight: 1.2,
                    marginBottom: "6px",
                  }}
                >
                  {art.title}
                </p>
                <p
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "12px",
                    color: "rgba(140,175,158,0.4)",
                    lineHeight: 1.5,
                  }}
                >
                  {art.desc}
                </p>
              </div>
            </div>

            {/* Hover overlay */}
            <div
              className="artwork-overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500"
              style={{ background: "rgba(8,20,14,0.6)" }}
            >
              <span
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 100,
                  fontSize: "10px",
                  letterSpacing: "0.4em",
                  color: "rgba(190,220,205,0.8)",
                  textTransform: "uppercase",
                  borderBottom: "1px solid rgba(190,220,205,0.3)",
                  paddingBottom: "4px",
                }}
              >
                View Work
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── BOTTOM GRADIENT FADE ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-30"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(8,18,13,0.6))",
        }}
      />
    </section>
  );
}
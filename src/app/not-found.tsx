"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="grain-overlay relative min-h-screen bean-pattern
                 flex flex-col items-center justify-center overflow-hidden px-6"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <style>{`
        /* ── Entrada escalonada ── */
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes expandLine {
          from { width: 0; opacity: 0; }
          to   { width: 60px; opacity: 1; }
        }
        @keyframes glitchShake {
          0%, 100% { transform: translate(0, 0); }
          20%       { transform: translate(-3px, 1px); }
          40%       { transform: translate(3px, -1px); }
          60%       { transform: translate(-2px, 2px); }
          80%       { transform: translate(2px, -2px); }
        }
        @keyframes drawCorner {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 0.25; transform: scale(1); }
        }
        @keyframes orb {
          0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.07; }
          50%       { transform: scale(1.15) translate(10px, -10px); opacity: 0.12; }
        }

        /* Clases de animación */
        .anim-label   { animation: fadeSlideUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
        .anim-404     { animation: fadeSlideUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.25s both; }
        .anim-line    { animation: expandLine 0.6s cubic-bezier(0.16,1,0.3,1) 0.55s both; }
        .anim-title   { animation: fadeSlideUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.65s both; }
        .anim-desc    { animation: fadeSlideUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.78s both; }
        .anim-btns    { animation: fadeSlideUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.90s both; }
        .anim-steam   { animation: fadeIn 0.6s ease 1.1s both; }
        .anim-corners { animation: drawCorner 0.7s ease 0.05s both; }
        .anim-orb     { animation: orb 6s ease-in-out infinite; }

        /* Glitch al hover del 404 */
        .num-404 { cursor: default; position: relative; }
        .num-404:hover { animation: glitchShake 0.4s steps(2) 2; }

        /* Línea deco con animación propia */
        .deco-line-anim {
          height: 2px;
          background: linear-gradient(90deg, var(--orange), var(--gold));
          display: inline-block;
        }
      `}</style>

      {/* Orb animado */}
      <div
        className="pointer-events-none fixed inset-0 anim-orb"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(237,139,0,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Corners */}
      {[
        { cls: "top-6 left-6",    bt: true,  bl: true  },
        { cls: "top-6 right-6",   bt: true,  br: true  },
        { cls: "bottom-6 left-6", bb: true,  bl: true  },
        { cls: "bottom-6 right-6",bb: true,  br: true  },
      ].map(({ cls, bt, bl, br, bb }, i) => (
        <span
          key={i}
          className={`fixed w-8 h-8 anim-corners ${cls}`}
          style={{
            borderTop:    bt ? "1.5px solid var(--brown-primary)" : undefined,
            borderLeft:   bl ? "1.5px solid var(--brown-primary)" : undefined,
            borderRight:  br ? "1.5px solid var(--brown-primary)" : undefined,
            borderBottom: bb ? "1.5px solid var(--brown-primary)" : undefined,
            animationDelay: `${i * 0.06}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full">

        {/* Label */}
        <span className="section-label mb-6 anim-label">Error · 404</span>

        {/* Big 404 */}
        <h1
          className="font-display leading-none tracking-tighter select-none num-404 anim-404"
          style={{
            fontSize: "clamp(110px, 20vw, 200px)",
            color: "var(--cream-deeper)",
            WebkitTextStroke: "2px var(--brown-primary)",
            opacity: 0.9,
          }}
        >
          404
        </h1>

        {/* Deco line */}
        <span className="deco-line-anim my-6 anim-line" style={{ width: 60 }} />

        {/* Title */}
        <h2
          className="font-display text-2xl font-semibold mb-3 anim-title"
          style={{ color: "var(--brown-dark)" }}
        >
          Página no encontrada
        </h2>

        {/* Description */}
        <p
          className="font-serif leading-relaxed mb-10 anim-desc"
          style={{ color: "var(--text-mid)", fontSize: "1.05rem" }}
        >
          La dirección que buscas no existe o fue movida.
          <br />
          Verifica el enlace o regresa al inicio.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center anim-btns">
          <Link href="/" className="btn-primary">
            <span>← Ir al inicio</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-outline"
          >
            Regresar
          </button>
        </div>

        {/* Steam particles */}
        <div className="mt-16 flex gap-3 justify-center anim-steam" style={{ opacity: 0.3 }}>
          {[0, 1, 2].map((i) => (
            <svg
              key={i}
              width="10"
              height="32"
              viewBox="0 0 10 32"
              fill="none"
              className="steam-particle"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <path
                d="M5 30 C2 24 8 18 5 12 C2 6 8 0 5 0"
                stroke="var(--brown-primary)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          ))}
        </div>
      </div>
    </main>
  );
}
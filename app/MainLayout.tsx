import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gradient-radial from-[#1f2a27] to-[#0f1513] text-white relative overflow-hidden">

      {/* texture overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_2px,transparent_2px,transparent_4px)]"></div>

      {/* left vertical line */}
      <div className="absolute left-10 top-0 h-full w-[1px] bg-white/20"></div>

      {/* navbar */}
      <nav className="flex items-center gap-10 px-16 py-8 text-sm opacity-70">
        <div className="text-lg font-semibold tracking-wider">AM</div>
        <span className="border-b border-white pb-1">Artworks</span>
        <span>For the Artist</span>
        <span>For Art Lovers</span>
      </nav>

      {/* page content */}
      <div className="relative z-10">{children}</div>

    </main>
  );
}
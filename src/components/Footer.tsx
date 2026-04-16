export default function Footer() {
  return (
    <footer className="w-full px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-4 max-w-screen-2xl mx-auto bg-[#131313] border-t hairline-border border-[#333333]">
      <div className="font-mono text-xs text-neutral-400">
        © 2025 徐应鹏 · 月月鸟 / UX_DESIGNER
      </div>
      <div className="flex items-center gap-8 font-mono text-[10px] uppercase tracking-widest">
        <a href="https://linkedin.com" className="text-neutral-500 hover:text-secondary transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="#" className="text-neutral-500 hover:text-secondary transition-colors">GitHub</a>
        <a href="#" className="text-neutral-500 hover:text-secondary transition-colors">小红书</a>
      </div>
      <div className="text-[10px] mono text-neutral-700">
        SYSTEM: OK / BUILD: STABLE
      </div>
    </footer>
  );
}

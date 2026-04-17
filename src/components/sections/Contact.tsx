export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-screen-2xl mx-auto border-x hairline-border border-[#333333] py-32 px-8 text-center bg-black relative"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-3xl mx-auto">
        <span className="mono text-[10px] text-primary uppercase tracking-[0.5em] mb-8 block">
          GET_IN_TOUCH
        </span>
        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
          Ready to architect complexity?
        </h2>
        <p className="text-neutral-500 text-lg mb-12">
          如果你在寻找能够处理复杂系统与平台产品的设计工程师，
          或者对设计工程协同有深度见解，欢迎联系。
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:contact@yueyueniao.com"
            className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-primary transition-colors"
          >
            联系我
          </a>
          <a
            href="/resume.pdf"
            className="px-10 py-4 border hairline-border text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            查看简历
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-12 mono text-xs text-neutral-600">
          <a href="#" className="hover:text-white transition-colors">WECHAT</a>
          <a href="mailto:contact@yueyueniao.com" className="hover:text-white transition-colors">EMAIL</a>
          <a href="https://linkedin.com" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
        </div>
      </div>
    </section>
  );
}

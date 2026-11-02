export default function Footer() {
  return (
    <footer className="border-t border-[#ffc2e8]/15 px-6 md:px-10 py-12 bg-[#000a38]">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <img src="/logo-mark.png" alt="NOXA" className="h-8 w-8 object-contain" />
          <span className="font-display tracking-mega text-[#faf6f0]">NOXA EVENTS</span>
        </div>
        <div className="flex gap-8 text-[10px] uppercase tracking-wide-2 text-[#faf6f0]/50">
          <a href="#" className="link-sweep hover:text-[#ffc2e8] transition-colors">Instagram</a>
          <a href="#" className="link-sweep hover:text-[#ffc2e8] transition-colors">LinkedIn</a>
          <a href="#" className="link-sweep hover:text-[#ffc2e8] transition-colors">Facebook</a>
        </div>
        <p className="text-[10px] tracking-wide-2 text-[#faf6f0]/35 uppercase">
          © {new Date().getFullYear()} NOXA Events · Všetky práva vyhradené
        </p>
      </div>
    </footer>
  );
}

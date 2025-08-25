export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
            <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-blue-600"></div>
                    <span className="font-semibold">Trusted Insurance Advisor</span>
                </div>

                <div className="hidden sm:flex items-center gap-6 text-sm">
                    <a href="#services" className="hover:text-blue-600">Services</a>
                    <a href="#about" className="hover:text-blue-600">About</a>
                    <a href="#faq" className="hover:text-blue-600">FAQ</a>
                    <a href="#contact" className="px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                        Get Free Consultation
                    </a>
                </div>
            </nav>
        </header>
    );
}

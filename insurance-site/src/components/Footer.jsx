export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-10 mt-20">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <p className="text-lg">© {new Date().getFullYear()} Insurance Advisor. All Rights Reserved.</p>
                <p className="mt-2 text-slate-400">Made with ❤️ to protect your future.</p>
            </div>
        </footer>
    );
}

export default function Hero() {
    return (
        <section className="bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 lg:grid-cols-2 items-center">
                <div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                        Secure Your Future with Confidence
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed">
                        Compare policies across top insurers, renew on time, and get expert
                        support for claim recovery —{" "}
                        <span className="font-semibold text-blue-600">fast, fair & transparent.</span>
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-lg shadow-md hover:bg-blue-700 transition"
                        >
                            Get Free Consultation
                        </a>
                        <a
                            href="https://wa.me/91XXXXXXXXXX"
                            className="px-6 py-3 rounded-xl border font-semibold text-lg hover:bg-slate-50 transition"
                        >
                            WhatsApp Us
                        </a>
                    </div>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl border bg-white shadow hover:shadow-md">
                            ✅ IRDAI Registered
                        </div>
                        <div className="p-4 rounded-xl border bg-white shadow hover:shadow-md">
                            🔄 Multiple Insurer Options
                        </div>
                        <div className="p-4 rounded-xl border bg-white shadow hover:shadow-md">
                            🛡 Claim Recovery Support
                        </div>
                    </div>
                </div>
                <div className="rounded-2xl border shadow-lg bg-white p-6">
                    <div className="h-64 md:h-80 w-full rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,.25),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,.2),transparent_55%)]"></div>
                    <p className="mt-4 text-center text-slate-600">
                        Compare • Renew • Recover — all in one place
                    </p>
                </div>
            </div>
        </section>
    );
}

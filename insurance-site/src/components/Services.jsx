const services = [
    { title: "Health Insurance", desc: "Protect your family with comprehensive health coverage." },
    { title: "Life Insurance", desc: "Secure your loved ones’ future with flexible plans." },
    { title: "Motor Insurance", desc: "Affordable car & bike policies with easy renewals." },
    { title: "Business Insurance", desc: "Cover risks & safeguard your business growth." },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Our Services</h2>
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((s, i) => (
                        <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold text-blue-600">{s.title}</h3>
                            <p className="mt-3 text-slate-600">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

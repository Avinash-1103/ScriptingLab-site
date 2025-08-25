const points = [
    "IRDAI-licensed Advisors",
    "Claim Recovery Assistance",
    "Multiple Insurer Options",
    "Transparent & Honest Guidance",
];

export default function WhyChoose() {
    return (
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Why Choose Us</h2>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {points.map((p, i) => (
                        <div key={i} className="p-6 border rounded-xl shadow bg-white hover:shadow-lg transition">
                            <p className="text-lg font-medium text-slate-700">{p}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

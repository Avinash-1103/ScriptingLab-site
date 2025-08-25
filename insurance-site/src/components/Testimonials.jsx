const reviews = [
    { name: "Amit Sharma", feedback: "They helped me recover my rejected claim in just 15 days!" },
    { name: "Priya Nair", feedback: "Super smooth process for renewing my health insurance." },
    { name: "Ravi Kumar", feedback: "Honest advisors, gave me the best policy fit without overselling." },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900">What Our Clients Say</h2>
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((r, i) => (
                        <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
                            <p className="text-slate-600 italic">“{r.feedback}”</p>
                            <h4 className="mt-4 font-semibold text-blue-600">{r.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

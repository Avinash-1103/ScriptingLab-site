const faqs = [
    { q: "Can you help if my claim is rejected?", a: "Yes, we specialize in claim recovery and negotiation." },
    { q: "Do you work with all insurance companies?", a: "We compare policies across multiple IRDAI-approved insurers." },
    { q: "Is there a consultation fee?", a: "No, our consultation is 100% free." },
];

export default function Faq() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900">FAQ</h2>
                <div className="mt-12 grid gap-6">
                    {faqs.map((f, i) => (
                        <div key={i} className="p-6 rounded-xl border shadow hover:shadow-md transition bg-slate-50">
                            <h3 className="text-xl font-semibold text-blue-600">{f.q}</h3>
                            <p className="mt-2 text-slate-600">{f.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { useEffect, useState } from "react";

function Counter({ end, label }) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let start = 0;
        const interval = setInterval(() => {
            start += Math.ceil(end / 50);
            if (start >= end) {
                setCount(end);
                clearInterval(interval);
            } else {
                setCount(start);
            }
        }, 50);
        return () => clearInterval(interval);
    }, [end]);

    return (
        <div className="p-6 rounded-xl bg-white/70 dark:bg-slate-800/70 shadow-lg text-center">
            <p className="text-4xl font-bold text-blue-600">{count}+</p>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{label}</p>
        </div>
    );
}

export default function Stats() {
    return (
        <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
            <div className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-3">
                <Counter end={5000} label="Policies Served" />
                <Counter end={1200} label="Claims Recovered" />
                <Counter end={3000} label="Happy Clients" />
            </div>
        </section>
    );
}

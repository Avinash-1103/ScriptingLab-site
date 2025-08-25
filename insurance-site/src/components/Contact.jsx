export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Get in Touch</h2>
                <p className="mt-4 text-lg text-slate-600">Book a free consultation today</p>
                <form className="mt-10 max-w-xl mx-auto grid gap-6">
                    <input type="text" placeholder="Your Name" className="px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500" />
                    <input type="email" placeholder="Your Email" className="px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500" />
                    <textarea placeholder="Your Message" rows="4" className="px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500"></textarea>
                    <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-lg shadow-md hover:bg-blue-700 transition">
                        Send Message
                    </button>
                </form>
                <p className="mt-6 text-slate-600">Or WhatsApp us at <span className="font-semibold text-blue-600">+91 XXXXXXXX</span></p>
            </div>
        </section>
    );
}

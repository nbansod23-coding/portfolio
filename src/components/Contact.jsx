function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-800 py-20 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Contact Me
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-slate-700"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-slate-700"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full p-3 rounded bg-slate-700"
          ></textarea>

          <button
            className="bg-cyan-500 px-6 py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
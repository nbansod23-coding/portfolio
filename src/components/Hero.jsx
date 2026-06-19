import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 text-lg mb-2">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-[0_0_20px_rgba(34,211,238,0.7)]">
            Nitin Bansod
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "React Developer",
              2000,
              "Generative AI Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl text-cyan-400 font-semibold"
          />

          <p className="mt-6 text-gray-400 max-w-lg">
            Passionate developer specializing in
            React, Django, Python, LangChain,
            Ollama, and AI-powered applications.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/NITIN_BANSOD_Resume1.pdf"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-black"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
  animate={{
    y: [0, -15, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
  }}
  className="flex justify-center"
>
  <img
    src="/profile.jpeg"
    alt="profile"
    className="w-80 h-80 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
  />
</motion.div>

      </div>
    </section>
  );
}

export default Hero;
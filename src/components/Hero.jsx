import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8  bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 text-base text-lg mb-2">
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 text-white drop-shadow-[0_0_20px_rgba(34,211,238,0.7)]">
            Nitin Bansod
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Python Developer",
              2000,
              "Django FrameWork",
              2000,
              "React Developer",
              2000,
              "Generative AI Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl sm:text-2xl lg:text-3xl text-cyan-400 font-semibold"
          />

          <p className="mt-6 text-gray-400 max-w-lg mx-auto md:mx-0">
            Passionate developer specializing in
            React, Django, Python, LangChain,
            Ollama, and AI-powered applications.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/NITIN_BANSOD_Resume1.pdf"
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg text-center transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-black text-center transition"
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
  className="flex justify-center mt-10 md:mt-0"
>
  <img
    src="/profile.jpeg"
    alt="profile"
    className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
  />
</motion.div>

      </div>
    </section>
  );
}

export default Hero;
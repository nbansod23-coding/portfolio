function Skills() {
  const skills = [
    "React",
    "JavaScript",
    "Python",
    "Django",
    "Tailwind",
    "SQL",
    "LangChain",
    "Ollama",
    "Git",
    "GitHub",
  ];

  return (
    <section
      id="skills"
      className="bg-slate-800 py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-700 p-4 rounded-lg text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
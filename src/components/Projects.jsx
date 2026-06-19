function Projects() {
  const projects = [
    {
      title: "AI Resume Analyzer",
      desc: "Resume analysis using AI.",
    },
    {
      title: "RAG Chatbot",
      desc: "LangChain + Ollama chatbot.",
    },
    {
      title: "Salon Booking App",
      desc: "React + Django application.",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-20 px-6"
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-slate-800 p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400">
              {project.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
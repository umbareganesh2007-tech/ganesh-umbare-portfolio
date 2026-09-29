const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built with Next.js, TypeScript, and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Cloud Agent Environment",
    description:
      "Development environment configured for Cursor Cloud Agents with automated setup and verification.",
    tech: ["Cursor", "Node.js", "npm"],
  },
];

export default function Home() {
  return (
    <div className="min-h-full bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">Ganesh Umbare</span>
          <div className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
            <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-100">
              About
            </a>
            <a href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-100">
              Projects
            </a>
            <a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-100">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <section className="mb-20">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Software Engineer
          </p>
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl">
            Hi, I&apos;m Ganesh Umbare
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I build thoughtful web experiences with modern tools. This portfolio is
            the starting point for showcasing my work, skills, and projects.
          </p>
        </section>

        <section id="about" className="mb-20">
          <h2 className="mb-6 text-2xl font-semibold">About</h2>
          <p className="max-w-2xl leading-8 text-zinc-600 dark:text-zinc-400">
            I&apos;m a software engineer focused on building reliable, user-friendly
            applications. I enjoy working across the stack and iterating quickly with
            strong development workflows.
          </p>
        </section>

        <section id="projects" className="mb-20">
          <h2 className="mb-6 text-2xl font-semibold">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2 className="mb-6 text-2xl font-semibold">Contact</h2>
          <p className="mb-4 text-zinc-600 dark:text-zinc-400">
            Interested in collaborating or learning more? Reach out anytime.
          </p>
          <a
            href="mailto:ganesh@example.com"
            className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Send Email
          </a>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
        © {new Date().getFullYear()} Ganesh Umbare. Built with Next.js.
      </footer>
    </div>
  );
}

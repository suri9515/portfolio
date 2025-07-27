import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

const projects = [
  { title: "Personal Firewall", tech: "Python, Networking", link: "https://github.com/suri9515/firewall-project.git" },
  { title: "Advanced Jarvis", tech: "Python, AI", link: "https://github.com/suri9515/advanced_jarvis.git" },
  { title: "System Monitor", tech: "Python, Tkinter", link: "https://github.com/suri9515/system-monitor.git" },
  { title: "Password Generator", tech: "Python, Tkinter", link: "https://github.com/suri9515/password_generator.git" }
]

export default function Projects() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4">
        <Hero />
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ProjectCard title="Personal Firewall" tech="Python, Networking" link="https://github.com/suri9515/firewall-project.git" />
            <ProjectCard title="Advanced Jarvis" tech="Python, AI" link="https://github.com/suri9515/advanced_jarvis.git" />
            <ProjectCard title="System Monitor" tech="Python, Tkinter" link="https://github.com/suri9515/system-monitor.git" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

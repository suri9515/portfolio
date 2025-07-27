import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <p className="text-gray-300">
          I am Allampati Venkata Surendra Reddy, a final-year Computer Science student with hands-on experience in Python,
          firewall development, and ethical hacking. I enjoy building secure, scalable and performant systems.
        </p>
      </main>
      <Footer />
    </>
  )
}

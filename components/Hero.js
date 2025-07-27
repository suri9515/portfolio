import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="text-center py-24">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-blue-400"
      >
        Hi, I'm Surendra Reddy
      </motion.h1>
      <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
        Final-year CSE student • Python Developer • Cybersecurity Intern
      </p>
      <div className="mt-8 space-x-4">
        <a className="bg-blue-600 px-5 py-2 rounded text-white" href="/resume.pdf" download>Download Resume</a>
        <a className="bg-green-600 px-5 py-2 rounded text-white" href="/cover_letter.docx" download>Cover Letter</a>
      </div>
    </section>
  );
}

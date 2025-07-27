import { useState, useEffect } from 'react';

export default function Header() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('light', !darkMode);
  }, [darkMode]);

  return (
    <header className="bg-gray-800 py-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold text-white">Surendra's Portfolio</h1>
        <nav className="space-x-4">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/resume.pdf" download className="bg-blue-500 px-3 py-1 rounded text-white">Resume</a>
          <a href="/cover_letter.docx" download className="bg-green-600 px-3 py-1 rounded text-white">Cover Letter</a>
        </nav>
        <button onClick={() => setDarkMode(!darkMode)} className="ml-4 px-3 py-1 rounded bg-gray-700 text-white">
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </header>
  );
}

export default function ProjectCard({ title, tech, link }) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">{tech}</p>
      <a href={link} className="text-blue-400 mt-3 inline-block">View Project →</a>
    </div>
  );
}

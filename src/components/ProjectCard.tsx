type ProjectProps = {
  title: string;
  description: string;
  tech: string;
  github: string;
  live?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
}: ProjectProps) {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-blue-500 hover:scale-[1.03] transition duration-300 shadow-lg">

      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <p className="text-gray-400 mt-3 leading-relaxed">
        {description}
      </p>

      <p className="text-sm text-blue-400 mt-4">{tech}</p>

      <div className="mt-6 flex gap-4">
        <a
          href={github}
          target="_blank"
          className="text-sm px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
        >
          GitHub
        </a>

        {live && (
          <a
            href={live}
            target="_blank"
            className="text-sm px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
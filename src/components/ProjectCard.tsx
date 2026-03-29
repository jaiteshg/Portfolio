type ProjectProps = {
  title: string;
  description: string;
  tech: string;
  github: string;
  live?: string;
  image: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  image,
}: ProjectProps) {
  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 hover:scale-[1.03] transition duration-300">

      {/* Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>

        <p className="text-gray-400 mt-2">{description}</p>

        <p className="text-sm text-blue-400 mt-3">{tech}</p>

        <div className="mt-4 flex gap-4">
          <a href={github} target="_blank" className="text-sm px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-800">
            GitHub
          </a>

          {live && (
            <a href={live} target="_blank" className="text-sm px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
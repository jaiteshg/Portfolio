export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold">
        Hi, I’m <span className="text-blue-500">Jaitesh</span>
      </h1>

      <p className="mt-4 text-lg md:text-xl text-gray-400">
        Full-Stack Developer (Next.js + AI)
      </p>

      <p className="mt-2 text-gray-500 max-w-xl">
        I build scalable web apps and developer tools.
      </p>

      <div className="mt-6 flex gap-4">
        <button className="px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
          View Projects
        </button>

        <button className="px-6 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 transition">
          Contact Me
        </button>
      </div>
    </section>
  );
}
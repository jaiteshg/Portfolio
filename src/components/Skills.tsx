export default function Skills() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-8 text-center">

        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-400">Frontend</h3>
          <p className="text-gray-400">
            React, Next.js, Tailwind CSS, HTML, CSS
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-400">Backend</h3>
          <p className="text-gray-400">
            Node.js, Express.js, REST APIs
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-400">Tools & Others</h3>
          <p className="text-gray-400">
            MongoDB, Convex, Git, Clerk, WebSockets
          </p>
        </div>

      </div>
    </section>
  );
}
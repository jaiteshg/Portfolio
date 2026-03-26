export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-4xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>

      <p className="text-gray-400 mb-8">
        I'm open to internships, freelance work, and collaboration. Feel free to reach out!
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-4">

        <a
          href="mailto:gjaitesh@gmail.com"
          className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        >
          Email Me
        </a>

        <a
          href="https://github.com/jaiteshg"
          target="_blank"
          className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/jaitesh-godara-bb1b352aa/"
          target="_blank"
          className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
        >
          LinkedIn
        </a>

      </div>
    </section>
  );
}
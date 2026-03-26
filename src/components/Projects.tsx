import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <ProjectCard
          title="CodeFlex – AI Fitness Assistant"
          description="AI-powered platform that generates personalized workout and diet plans with voice interaction."
          tech="Next.js, TypeScript, Gemini AI, Vapi, Clerk, Convex"
          github="https://github.com/jaiteshg/codeflex"
          live="https://codeflex-jade.vercel.app/"
        />

        <ProjectCard
          title="LiveDocs – Real-Time Collaborative Editor"
          description="Google Docs–like app with live multi-user editing, comments, and instant sync."
          tech="Next.js, Liveblocks, Clerk, Lexical, Sentry"
          github="https://github.com/jaiteshg/LiveDocs"
          live="https://live-docs-sepia-six.vercel.app/"
        />

        <ProjectCard
          title="GSAP Cocktail Website"
          description="Highly interactive landing page with smooth animations and modern UI/UX."
          tech="HTML, CSS, JavaScript, GSAP"
          github="https://github.com/jaiteshg/cocktail-landing-page"
          live="https://cocktail-landing-page-ashen.vercel.app/"
        />

      </div>
    </section>
  );
}
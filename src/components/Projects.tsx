"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Projects
      </h2>

      < motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >

        <ProjectCard
          title="CodeFlex – AI Fitness Assistant"
          description="AI-powered platform that generates personalized workout and diet plans with voice interaction."
          tech="Next.js, TypeScript, Gemini AI, Vapi, Clerk, Convex"
          github="https://github.com/jaiteshg/codeflex"
          live="https://codeflex-jade.vercel.app/"
          image="/codeflex.png"
        />

         <ProjectCard
          title="DevOps CI/CD Dashboard"
          description="A full-stack DevOps dashboard for real-time CI/CD monitoring using GitHub Actions"
          tech="Next.js, React, Tailwind CSS, Chart.js , Next.js API Routes, MongoDB, GitHub Actions API "
          github="https://github.com/jaiteshg/DevOps-Dashboard-for-CI-CD-Monitoring.git"
          live="https://dev-ops-dashboard-for-ci-cd-monitoring.vercel.app/"
          image="/dashboard.png"
        />
        
        <ProjectCard
          title="LiveDocs – Real-Time Collaborative Editor"
          description="Google Docs–like app with live multi-user editing, comments, and instant sync."
          tech="Next.js, Liveblocks, Clerk, Lexical, Sentry"
          github="https://github.com/jaiteshg/LiveDocs"
          live="https://live-docs-sepia-six.vercel.app/"
          image="/livedocs.png"
        />

        <ProjectCard
          title="GSAP Cocktail Website"
          description="Highly interactive landing page with smooth animations and modern UI/UX."
          tech="HTML, CSS, JavaScript, GSAP"
          github="https://github.com/jaiteshg/cocktail-landing-page"
          live="https://cocktail-landing-page-ashen.vercel.app/"
          image="/cocktail.png"
        />

        <ProjectCard
          title="AI Code Reviewer & Refactor Tool"
          description="An AI-powered developer tool that analyzes code, detects bugs, suggests improvements, and generates optimized code in real time."
          tech="Next.js, TypeScript, Groq AI, Monaco Editor"
          github="https://github.com/jaiteshg/AI-Code-Reviewer"
          live="https://ai-code-reviewer-nine-ochre.vercel.app/"
          image="/code-reviewer.png"
        />

      </motion.div>
    </section>
  );
}

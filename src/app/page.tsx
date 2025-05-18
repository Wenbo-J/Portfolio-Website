import Link from "next/link";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="prose mx-auto px-4 pt-16">
      <h1 className="text-4xl font-bold">Hi, I'm Wenbo</h1>
      <p className="mt-2">
        Full-stack &nbsp;|&nbsp; Prompt Engineer &nbsp;|&nbsp; Penn ’27  
      </p>

      <div className="mt-6 flex gap-4">
      <a
        href="/resume.pdf"
        className="inline-flex items-center rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
        download      /* optional: prompts “Save As” */
      >
          <ArrowDownTrayIcon className="mr-2 h-5 w-5" />
          Résumé (PDF)
        </a>
        <Link
          href="/projects"
          className="inline-flex items-center rounded border px-4 py-2 hover:bg-gray-50"
        >
          Projects
        </Link>
        <Link href="/blog/prompt-workflow" className="underline">
          Prompt-engineering post
        </Link>

      </div>
    </main>
  );
}

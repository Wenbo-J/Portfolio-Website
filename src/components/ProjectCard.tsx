import Link from 'next/link';
import type { ProjectMeta } from '@/lib/mdx';

export default function ProjectCard({ meta }: { meta: ProjectMeta }) {
  return (
    <article className="rounded border p-4 shadow-sm">
      <h3 className="text-xl font-semibold">{meta.title}</h3>
      <p className="mt-1 text-gray-600 text-sm">{meta.impact}</p>

      <div className="mt-2 flex flex-wrap gap-2">
        {meta.tech.map(t => (
          <span key={t} className="rounded bg-gray-100 px-2 py-1 text-xs">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-3 flex gap-4 text-sm">
      <a
      href={meta.github}
      className="underline"
      target="_blank"
      rel="noopener noreferrer"
      >
      Code
      </a>
      {meta.live && (
        <a
          href={meta.live}
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live
        </a>
      )}
      </div>
    </article>
  );
}

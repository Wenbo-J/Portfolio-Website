import { getAllProjectMeta } from '@/lib/mdx';
import ProjectCard from '@/components/ProjectCard';

export const metadata = { title: 'Projects | Jane Doe' };

export default async function Projects() {
  const projects = await getAllProjectMeta();

  return (
    <main className="prose mx-auto px-4 pt-16">
      <h2>Selected Projects</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map(meta => (
          <ProjectCard key={meta.slug} meta={meta} />
        ))}
      </div>
    </main>
  );
}

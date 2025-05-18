import { readFile, readdir } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export interface ProjectMeta {
  slug: string;
  title: string;
  date: string;
  tech: string[];
  impact: string;
  github: string;
  live?: string;
}

const projectDir = path.join(process.cwd(), 'src/content/projects');

export async function getAllProjectMeta(): Promise<ProjectMeta[]> {
  const files = await readdir(projectDir);
  return Promise.all(
    files
      .filter(f => f.endsWith('.mdx'))
      .map(async file => {
        const slug = file.replace(/\.mdx?$/, '');
        const raw = await readFile(path.join(projectDir, file), 'utf8');
        const { data } = matter(raw);
        return { slug, ...data } as ProjectMeta;
      }),
  );
}

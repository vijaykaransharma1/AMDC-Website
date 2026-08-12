import { useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/types/project';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import styles from './ProjectGrid.module.scss';

// Lazy load modal
const ProjectModal = lazy(() => import('@/components/ProjectModal/ProjectModal'));

const categories = ['All', 'Residential', 'Commercial', 'Hospitality'];

interface ProjectGridProps {
  /** When true: shows first 6 projects + "View All" CTA. No filter tabs. */
  preview?: boolean;
  previewCount?: number;
}

export default function ProjectGrid({ preview = false, previewCount = 7 }: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = preview
    ? projects.slice(0, previewCount)
    : activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-title">
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <p className={styles.eyebrow}>Our Work</p>
          <h2 id="projects-title">
            Selected <em>Projects</em>
          </h2>
        </div>

        {/* Category filters — only on full view */}
        {!preview && (
          <div className={styles.filters} role="group" aria-label="Filter projects by category">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filter} ${activeCategory === cat ? styles.active : ''}`}
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                aria-label={`Filter by ${cat}`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Grid */}
      <div className={styles.grid} role="list" aria-label="Project portfolio">
        {filtered.map((project) => (
          <div key={project.id} className={styles.card} role="listitem">
            <ProjectCard project={project} onClick={setSelectedProject} />
          </div>
        ))}
      </div>

      {/* "View All" CTA — only in preview mode */}
      {preview && (
        <div className={styles.viewAllWrap}>
          <p className={styles.viewAllMeta}>
            Showing {previewCount} of {projects.length} projects
          </p>
          <Link to="/projects" className={styles.viewAllBtn} aria-label="View all projects">
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </div>
      )}

      {/* Modal */}
      {selectedProject && (
        <Suspense fallback={null}>
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </Suspense>
      )}
    </section>
  );
}

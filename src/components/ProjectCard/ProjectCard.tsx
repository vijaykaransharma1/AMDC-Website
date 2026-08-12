import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types/project';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(project);
    }
  };

  return (
    <article
      className={styles.card}
      onClick={() => onClick(project)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View ${project.title} project`}
    >
      <img
        className={styles.image}
        src={project.cover}
        alt={`${project.title} - ${project.subtitle}`}
        loading="lazy"
      />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <p className={styles.category}>{project.category} · {project.year}</p>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.subtitle}>{project.subtitle}</p>
      </div>
      <div className={styles.arrow} aria-hidden="true">
        <ArrowUpRight size={18} />
      </div>
    </article>
  );
}

import { Icon } from '@iconify/react'
import { workProjects, sideProjects, type Project } from '@/data/projects'
import { CodeSnippet } from '@/components/ui/CodeSnippet'

const statusColors: Record<Project['status'], string> = {
  SHIPPED: 'border-terminal-green text-terminal-green',
  WIP:     'border-warm-amber text-warm-amber',
  OPEN_SOURCE: 'border-cyber-cyan text-cyber-cyan',
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isPlaceholder = project.id.startsWith('side-project')

  return (
    <article
      className={`
        anim-item group relative flex flex-col border bg-elevated p-4
        transition-all duration-200 min-h-[300px]
        ${isPlaceholder
          ? 'border-border-dim border-dashed opacity-60'
          : 'border-border-dim hover:border-terminal-green hover:shadow-neon-green cursor-pointer'
        }
      `}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Connector line (decorative, visible on md+) */}
      <div className="absolute -left-[33px] top-6 h-px w-8 bg-border-dim/50 hidden md:block group-hover:bg-terminal-green/50 transition-colors" />

      {/* Card header */}
      <div className="mb-3 flex justify-between items-center text-xs text-faded-slate font-code">
        <span>{'{'}</span>
        <span className={`px-2 py-0.5 border text-[10px] tracking-wider ${statusColors[project.status]}`}>
          [STATUS: {project.status}]
        </span>
      </div>

      {/* Company logo / visual area */}
      <div className="flex h-[100px] w-full items-center justify-center border border-border-dim/50 bg-void-black mb-4 relative overflow-hidden">
        {project.companyLogo ? (
          <img
            src={project.companyLogo}
            alt={project.company ?? ''}
            className="max-h-12 max-w-[120px] object-contain opacity-80 group-hover:opacity-100 transition-opacity"
            onError={(e) => {
              // Fallback to company name text if logo fails
              const parent = (e.currentTarget as HTMLElement).parentElement!
              e.currentTarget.remove()
              const span = document.createElement('span')
              span.className = 'text-xs text-faded-slate font-code uppercase tracking-widest'
              span.textContent = project.company ?? ''
              parent.appendChild(span)
            }}
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-faded-slate">
            <Icon icon="material-symbols:code" className="text-3xl opacity-30" />
            {isPlaceholder && (
              <span className="text-[10px] font-code tracking-widest">AWAITING_COMMIT</span>
            )}
          </div>
        )}
        {project.company && (
          <span className="absolute bottom-1 right-2 text-[9px] text-faded-slate font-code opacity-60">
            {project.company}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 flex-1">
        <h3 className="text-cyber-cyan text-sm font-code font-semibold leading-snug">
          {project.title}
        </h3>
        <p className="text-xs text-faded-slate leading-relaxed line-clamp-3 mt-1">
          {project.description}
        </p>
        {project.tech.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] font-code px-1.5 py-0.5 border border-border-dim text-faded-slate"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card footer */}
      <div className="mt-auto flex items-center justify-between border-t border-border-dim/50 pt-3 mt-3">
        <span className="text-xs text-faded-slate font-code">{'}'}</span>
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-faded-slate hover:text-terminal-green transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Icon icon="logos:github-icon" className="text-base" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-faded-slate hover:text-cyber-cyan transition-colors font-mono text-xs flex items-center gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-terminal-green">&gt;</span> demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export function ProjectsPage() {
  return (
    <div className="p-4 md:p-6 pb-12 text-sm leading-7 font-code">
      {/* TypeScript header */}
      <div className="mb-4">
        <CodeSnippet code="import { Project } from '@/types';" />
      </div>

      {/* Work projects section */}
      <div className="mb-2">
        <CodeSnippet code="// ── Work Highlights ─────────────────────────────────────────" />
      </div>
      <div className="mb-4">
        <CodeSnippet code="export const workProjects: Project[] = [" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6 pl-4 md:pl-8 border-l border-border-dim/40 ml-2">
        {workProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <div className="mb-8">
        <CodeSnippet code="];" />
      </div>

      {/* Side projects section */}
      <div className="mb-2">
        <CodeSnippet code="// ── Personal / Side Projects ─────────────────────────────────" />
        <br />
        <CodeSnippet code="// TODO: add your GitHub projects here" />
      </div>
      <div className="mb-4">
        <CodeSnippet code="export const sideProjects: Project[] = [" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6 pl-4 md:pl-8 border-l border-border-dim/40 ml-2">
        {sideProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={workProjects.length + i} />
        ))}
      </div>

      <div>
        <CodeSnippet code="];" />
        <br />
        <CodeSnippet code="// EOF" />
        <span className="inline-block w-2 h-4 bg-terminal-green ml-1 animate-blink align-middle" />
      </div>
    </div>
  )
}

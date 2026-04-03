import { Icon } from '@iconify/react'
import { workProjects, sideProjects, type Project } from '@/data/projects'
import { CodeSnippet } from '@/components/ui/CodeSnippet'

/** Map tech labels → Iconify icon IDs */
const techIcons: Record<string, string> = {
  'React':            'logos:react',
  'TypeScript':       'logos:typescript-icon',
  'JavaScript':       'logos:javascript',
  'Tailwind CSS':     'logos:tailwindcss-icon',
  'Zustand':          'devicon:zustand',
  'Redux':            'logos:redux',
  'TanStack Query':   'logos:react-query-icon',
  'Sass':             'logos:sass',
  'Jest':             'logos:jest',
  'Playwright':       'logos:playwright',
  'Vite':             'logos:vitejs',
  'Storybook':        'logos:storybook-icon',
  'Radix UI':         'bxl:radix-ui',
  'Docker':           'logos:docker-icon',
  'Kubernetes':       'logos:kubernetes',
  'Google Maps':      'logos:google-maps',
  'Google Maps API':  'logos:google-maps',
  'Maps APIs':        'logos:google-maps',
  'Auth0':            'logos:auth0-icon',
  'PWA':              'logos:pwa',
  'Motion':           'simple-icons:framer',
  'C#':               'logos:c-sharp',
  'PostgreSQL':       'logos:postgresql',
  'SQL Server':       'devicon:microsoftsqlserver',
  'Ant Design':       'logos:ant-design',
}

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
          ? 'border-dashed opacity-60 border-border-dim'
          : 'cursor-pointer border-border-dim hover:border-terminal-green hover:shadow-neon-green'
        }
      `}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Connector line (decorative, visible on md+) */}
      <div className="absolute -left-[33px] top-6 h-px w-8 bg-border-dim/50 hidden md:block group-hover:bg-terminal-green/50 transition-colors" />

      {/* Card header */}
      <div className="flex justify-between items-center mb-3 text-xs text-faded-slate font-code">
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
              span.className = 'text-xs tracking-widest uppercase text-faded-slate font-code'
              span.textContent = project.company ?? ''
              parent.appendChild(span)
            }}
          />
        ) : (
          <div className="flex flex-col gap-2 items-center text-faded-slate">
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
      <div className="flex flex-col flex-1 gap-1">
        <h3 className="text-sm font-semibold leading-snug text-cyber-cyan font-code">
          {project.title}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-faded-slate line-clamp-3">
          {project.description}
        </p>
        {project.tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2 items-center">
            {project.tech.map((t) => {
              const icon = techIcons[t]
              return icon ? (
                <span key={t} title={t} className="inline-flex justify-center items-center w-5 h-5">
                  <Icon icon={icon} className="text-sm opacity-70 transition-opacity group-hover:opacity-100" />
                </span>
              ) : (
                <span
                  key={t}
                  className="text-[10px] font-code px-1.5 py-0.5 border border-border-dim text-faded-slate"
                >
                  {t}
                </span>
              )
            })}
          </div>
        )}
      </div>

      {/* Card footer */}
      <div className="flex justify-between items-center pt-3 mt-3 mt-auto border-t border-border-dim/50">
        <span className="text-xs text-faded-slate font-code">{'}'}</span>
        <div className="flex gap-2 items-center">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors text-faded-slate hover:text-terminal-green"
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
              className="flex gap-1 items-center font-mono text-xs transition-colors text-faded-slate hover:text-cyber-cyan"
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
    <div className="p-4 pb-12 text-sm leading-7 md:p-6 font-code">
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

      <div className="grid grid-cols-1 gap-6 pl-4 mb-6 ml-2 border-l md:grid-cols-2 xl:grid-cols-3 md:pl-8 border-border-dim/40">
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

      <div className="grid grid-cols-1 gap-6 pl-4 mb-6 ml-2 border-l md:grid-cols-2 xl:grid-cols-3 md:pl-8 border-border-dim/40">
        {sideProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={workProjects.length + i} />
        ))}
      </div>

      <div>
        <CodeSnippet code="];" />
        <br />
        <CodeSnippet code="// EOF" />
        <span className="inline-block ml-1 w-2 h-4 align-middle bg-terminal-green animate-blink" />
      </div>
    </div>
  )
}

import { Icon } from '@iconify/react'
import { skillCategories } from '@/data/skills'
import { profile } from '@/data/profile'
import { certifications, education, spokenLanguages } from '@/data/experience'

interface JsonLineProps {
  lineNo: number
  indent?: number
  children: React.ReactNode
  className?: string
}

function JsonLine({ lineNo, indent = 0, children, className = '' }: JsonLineProps) {
  return (
    <div className={`flex whitespace-pre-wrap font-code text-sm leading-7 ${className}`}>
      <span className="hidden md:inline-block w-10 text-right pr-4 text-faded-slate shrink-0 select-none">
        {lineNo}
      </span>
      <span style={{ paddingLeft: `${indent * 2}rem` }}>{children}</span>
    </div>
  )
}

interface ArrayEntry {
  label: string
  detail?: string
  icon?: string
}

interface ArraySection {
  key: string
  entries: ArrayEntry[]
}

// Every array rendered below the profile object, in order.
const sections: ArraySection[] = [
  ...skillCategories.map((c) => ({ key: c.label, entries: c.skills })),
  { key: 'certifications', entries: certifications },
  { key: 'education', entries: education },
  { key: 'spokenLanguages', entries: spokenLanguages },
]

const Key = ({ name }: { name: string }) => (
  <>
    <span className="json-punctuation">"</span>
    <span className="json-key">{name}</span>
    <span className="json-punctuation">": </span>
  </>
)

export function SkillsPage() {
  let lineNo = 1

  return (
    <div className="p-4 md:p-6 pb-12">
      <JsonLine lineNo={lineNo++}>
        <span className="json-punctuation bracket-hover">{'{'}</span>
      </JsonLine>

      {/* Profile section */}
      <JsonLine lineNo={lineNo++} indent={1}>
        <Key name="profile" />
        <span className="json-punctuation">{'{'}</span>
      </JsonLine>
      <JsonLine lineNo={lineNo++} indent={2}>
        <Key name="role" />
        <span className="json-string">"{profile.role}"</span>
        <span className="json-punctuation">,</span>
      </JsonLine>
      <JsonLine lineNo={lineNo++} indent={2}>
        <Key name="yearsExperience" />
        <span className="json-number">{profile.yearsExperience}</span>
        <span className="json-punctuation">,</span>
      </JsonLine>
      <JsonLine lineNo={lineNo++} indent={2}>
        <Key name="isAvailable" />
        <span className="json-boolean">{String(profile.isAvailable)}</span>
      </JsonLine>
      <JsonLine lineNo={lineNo++} indent={1}>
        <span className="json-punctuation">{'},'}</span>
      </JsonLine>

      {sections.map((section, sectionIdx) => {
        const openLine = lineNo++
        const entryLines = section.entries.map(() => lineNo++)
        const closeLine = lineNo++
        const isLastSection = sectionIdx === sections.length - 1

        return (
          <div key={section.key}>
            <JsonLine lineNo={openLine} indent={1}>
              <Key name={section.key} />
              <span className="json-punctuation bracket-hover">[</span>
            </JsonLine>

            {section.entries.map((entry, i) => (
              <JsonLine
                key={entry.label}
                lineNo={entryLines[i]}
                indent={2}
                className="anim-item items-center"
              >
                <span className="json-punctuation">"</span>
                {entry.icon && (
                  <Icon
                    icon={entry.icon}
                    className="inline-block w-4 h-4 mr-1.5 align-middle relative -top-px"
                  />
                )}
                <span className="json-string">{entry.label}</span>
                {entry.detail && <span className="text-faded-slate"> · {entry.detail}</span>}
                <span className="json-punctuation">
                  {i < section.entries.length - 1 ? '",' : '"'}
                </span>
              </JsonLine>
            ))}

            <JsonLine lineNo={closeLine} indent={1}>
              <span className="json-punctuation bracket-hover">]</span>
              {!isLastSection && <span className="json-punctuation">,</span>}
            </JsonLine>
          </div>
        )
      })}

      <JsonLine lineNo={lineNo}>
        <span className="json-punctuation bracket-hover">{'}'}</span>
        <span className="animate-blink inline-block w-2 h-4 bg-lavender/50 ml-1 align-middle" />
      </JsonLine>
    </div>
  )
}

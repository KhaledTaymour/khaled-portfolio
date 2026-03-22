import { Icon } from '@iconify/react'
import { skillCategories } from '@/data/skills'
import { profile } from '@/data/profile'

interface JsonLineProps {
  lineNo: number
  indent?: number
  children: React.ReactNode
  className?: string
}

function JsonLine({ lineNo, indent = 0, children, className = '' }: JsonLineProps) {
  return (
    <div className={`flex whitespace-pre font-code text-sm leading-7 ${className}`}>
      <span className="hidden md:inline-block w-10 text-right pr-4 text-faded-slate shrink-0 select-none">
        {lineNo}
      </span>
      <span style={{ paddingLeft: `${indent * 2}rem` }}>{children}</span>
    </div>
  )
}

export function SkillsPage() {
  let lineNo = 1

  return (
    <div className="p-4 md:p-6 pb-12">
      {/* Opening brace */}
      <JsonLine lineNo={lineNo++}>
        <span className="json-punctuation bracket-hover">{'{'}</span>
      </JsonLine>

      {/* Profile section */}
      <JsonLine lineNo={lineNo++} indent={1}>
        <span className="json-punctuation">"</span>
        <span className="json-key">profile</span>
        <span className="json-punctuation">": {'{'}</span>
      </JsonLine>
      <JsonLine lineNo={lineNo++} indent={2}>
        <span className="json-punctuation">"</span>
        <span className="json-key">role</span>
        <span className="json-punctuation">": "</span>
        <span className="json-string">{profile.role}</span>
        <span className="json-punctuation">",</span>
      </JsonLine>
      <JsonLine lineNo={lineNo++} indent={2}>
        <span className="json-punctuation">"</span>
        <span className="json-key">yearsExperience</span>
        <span className="json-punctuation">": </span>
        <span className="json-number">{profile.yearsExperience}</span>
        <span className="json-punctuation">,</span>
      </JsonLine>
      <JsonLine lineNo={lineNo++} indent={2}>
        <span className="json-punctuation">"</span>
        <span className="json-key">isAvailable</span>
        <span className="json-punctuation">": </span>
        <span className="json-boolean">true</span>
      </JsonLine>
      <JsonLine lineNo={lineNo++} indent={1}>
        <span className="json-punctuation">{"}"}{","}</span>
      </JsonLine>

      {/* Skill categories */}
      {skillCategories.map((category) => {
        const openLine = lineNo++
        const skillLines: number[] = category.skills.map(() => lineNo++)
        const closeLine = lineNo++

        return (
          <div key={category.key}>
            <JsonLine lineNo={openLine} indent={1}>
              <span className="json-punctuation">"</span>
              <span className="json-key">{category.label}</span>
              <span className="json-punctuation">": </span>
              <span className="json-punctuation bracket-hover">[</span>
            </JsonLine>

            {category.skills.map((skill, i) => (
              <JsonLine
                key={skill.label}
                lineNo={skillLines[i]}
                indent={2}
                className="anim-item items-center"
              >
                <span className="json-punctuation">"</span>
                {skill.icon && (
                  <Icon
                    icon={skill.icon}
                    className="inline-block w-4 h-4 mr-1.5 align-middle relative -top-px"
                  />
                )}
                <span className="json-string">{skill.label}</span>
                <span className="json-punctuation">
                  {i < category.skills.length - 1 ? '",' : '"'}
                </span>
              </JsonLine>
            ))}

            <JsonLine lineNo={closeLine} indent={1}>
              <span className="json-punctuation bracket-hover">]</span>
              <span className="json-punctuation">,</span>
            </JsonLine>
          </div>
        )
      })}

      {/* Closing brace */}
      <JsonLine lineNo={lineNo}>
        <span className="json-punctuation bracket-hover">{'}'}</span>
        <span className="animate-blink inline-block w-2 h-4 bg-lavender/50 ml-1 align-middle" />
      </JsonLine>
    </div>
  )
}

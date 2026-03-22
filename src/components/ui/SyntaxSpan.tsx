import type { ReactNode } from 'react'

type SyntaxType = 'keyword' | 'var' | 'string' | 'fn' | 'comment' | 'attr' | 'type' | 'tag' | 'plain'

const classMap: Record<SyntaxType, string> = {
  keyword: 'syn-keyword',
  var:     'syn-var',
  string:  'syn-string',
  fn:      'syn-fn',
  comment: 'syn-comment',
  attr:    'syn-attr',
  type:    'syn-type',
  tag:     'syn-tag',
  plain:   'text-lavender',
}

interface SyntaxSpanProps {
  type: SyntaxType
  children: ReactNode
}

export function SyntaxSpan({ type, children }: SyntaxSpanProps) {
  return <span className={classMap[type]}>{children}</span>
}

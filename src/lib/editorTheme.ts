import type { PrismTheme } from 'prism-react-renderer'

export const editorTheme: PrismTheme = {
  plain: { color: '#A6ACCD' },
  styles: [
    { types: ['keyword'],                    style: { color: '#c678dd' } },
    { types: ['string', 'attr-value'],       style: { color: '#98c379' } },
    { types: ['function'],                   style: { color: '#61afef' } },
    { types: ['comment'],                    style: { color: '#5c6370', fontStyle: 'italic' } },
    { types: ['attr-name'],                  style: { color: '#d19a66' } },
    { types: ['class-name'],                 style: { color: '#E5C07B' } },
    { types: ['tag', 'variable'],            style: { color: '#e06c75' } },
    { types: ['number', 'boolean'],          style: { color: '#FF9E64' } },
    { types: ['punctuation', 'operator'],    style: { color: '#A6ACCD' } },
  ],
}

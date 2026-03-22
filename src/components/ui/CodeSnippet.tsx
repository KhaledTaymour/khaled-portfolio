import { Highlight } from 'prism-react-renderer'
import { editorTheme } from '@/lib/editorTheme'

/** Renders a single line of code with syntax highlighting. */
export function CodeSnippet({ code }: { code: string }) {
  return (
    <Highlight code={code} language="tsx" theme={editorTheme}>
      {({ tokens, getTokenProps }) => (
        <>
          {(tokens[0] ?? []).map((token, key) => (
            <span key={key} {...getTokenProps({ token })} />
          ))}
        </>
      )}
    </Highlight>
  )
}

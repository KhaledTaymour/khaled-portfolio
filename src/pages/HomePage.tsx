import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Highlight } from "prism-react-renderer";
import { CodeCursor } from "@/components/ui/CodeCursor";
import { SyntaxSpan } from "@/components/ui/SyntaxSpan";
import { editorTheme } from "@/lib/editorTheme";
import { profile } from "@/data/profile";

// Code lines shown in the "editor" area
function CodeHero() {
  const code = [
    `const DeveloperProfile = () => {`,
    `  const name = "${profile.name}"`,
    `  const role = "${profile.role}"`,
    `  const location = "${profile.location} // Open to worldwide relocation 🌍"`,
    ``,
    `  const yearsExperience = ${profile.yearsExperience}`,
    `  const isAvailable = true`,
    `  const coreStack = [${profile.coreStack.map((s) => `"${s}"`).join(", ")}]`,
    ``,
    `  return (`,
    `    <Profile name={name} role={role} />`,
    `  );`,
    `};`,
    ``,
    `export default DeveloperProfile;`,
  ].join("\n");

  return (
    <div className="flex pt-6 text-sm leading-7">
      <Highlight code={code} language="tsx" theme={editorTheme}>
        {({ tokens, getLineProps, getTokenProps }) => (
          <>
            {/* Line numbers */}
            <div className="w-12 shrink-0 flex flex-col items-end text-faded-slate text-xs select-none pr-4">
              {tokens.map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>

            {/* Code content */}
            <div className="flex-1 pl-2 font-code text-sm leading-7">
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                  {i === tokens.length - 1 && <CodeCursor />}
                </div>
              ))}
            </div>
          </>
        )}
      </Highlight>
    </div>
  );
}

// PREVIEW.EXE bento card
function PreviewBento() {
  const navigate = useNavigate();

  return (
    <div className="mx-8 mt-10 mb-4 border border-border-dim bg-elevated relative group hover:border-terminal-green hover:shadow-neon-green transition-all duration-200">
      {/* label */}
      <div className="absolute -top-3 left-4 px-2 bg-elevated text-[10px] text-terminal-green font-code tracking-widest border border-border-dim">
        PREVIEW.EXE
      </div>

      <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: hero info */}
        <div className="md:col-span-2">
          <h1 className="font-headline text-5xl lg:text-6xl font-extrabold text-terminal-green tracking-tighter mb-3 uppercase">
            {profile.name}
          </h1>
          <p className="font-headline text-xl text-cyber-cyan font-light mb-2">
            {profile.role}
          </p>
          <p className="font-code text-sm text-faded-slate mb-6">
            <SyntaxSpan type="comment">
              {"// "}
              {profile.summary.split(" ").slice(0, 12).join(" ")}…
            </SyntaxSpan>
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate("/projects")}
              className="flex items-center gap-2 bg-terminal-green text-void-black px-6 py-3 font-mono text-sm font-bold hover:bg-[#32e612] transition-colors"
            >
              <Icon icon="material-symbols:play-arrow" className="text-base" />
              EXECUTE_PROJECTS
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="flex items-center gap-2 border border-terminal-green text-terminal-green px-6 py-3 font-mono text-sm hover:bg-terminal-green/10 transition-colors"
            >
              &gt; CONTACT_ME
            </button>
          </div>
        </div>

        {/* Right: meta card */}
        <div className="bg-abyss border border-border-dim p-6 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-terminal-green mb-1">
            <Icon icon="material-symbols:location-on" className="text-base" />
            <span className="font-code text-xs uppercase">Location</span>
          </div>
          <p className="font-body text-lavender text-sm mb-4">
            {profile.location} • Open to Relocation
          </p>

          <div className="h-px bg-border-dim w-full my-2" />

          <div className="flex items-center gap-2 text-cyber-cyan mb-1 mt-2">
            <Icon icon="material-symbols:terminal" className="text-base" />
            <span className="font-code text-xs uppercase">Core Stack</span>
          </div>
          <p className="font-code text-xs text-lavender leading-relaxed">
            {profile.coreStack.join(", ")}
          </p>

          <div className="h-px bg-border-dim w-full my-2" />

          <div className="flex items-center gap-2 text-warm-amber mb-1 mt-2">
            <Icon icon="material-symbols:work" className="text-base" />
            <span className="font-code text-xs uppercase">Experience</span>
          </div>
          <p className="font-code text-xs text-warm-amber">
            {profile.yearsExperience}+ years
          </p>
        </div>
      </div>

      {/* Decorative corner triangle */}
      <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10 pointer-events-none">
        <div
          className="w-full h-full bg-gradient-to-br from-terminal-green to-cyber-cyan"
          style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
        />
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <div className="min-h-full">
      <CodeHero />
      <PreviewBento />
    </div>
  );
}

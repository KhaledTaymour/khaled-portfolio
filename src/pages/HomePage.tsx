import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { TextPlugin } from "gsap/TextPlugin";
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
    `  const location = "${profile.location}" // open to worldwide relocation`,
    ``,
    `  const yearsExperience = ${profile.yearsExperience}`,
    `  const isAvailable = ${profile.isAvailable}`,
    `  const coreStack = [${profile.coreStack.map((s) => `"${s}"`).join(", ")}]`,
    ``,
    `  // ${profile.tagline}`,
    `  const approach = (problem) => solve(build(think(problem)))`,
    ``,
    `  return (`,
    `    <Profile name={name} role={role} approach={approach} />`,
    `  );`,
    `};`,
    ``,
    `export default DeveloperProfile;`,
  ].join("\n");

  return (
    <div className="pt-6 pr-4 font-code text-sm leading-7">
      <Highlight code={code} language="tsx" theme={editorTheme}>
        {({ tokens, getLineProps, getTokenProps }) => (
          <>
            {/* Number and code share a row, so wrapped lines stay aligned */}
            {tokens.map((line, i) => (
              <div key={i} className="flex" data-anim="code-line">
                <span className="w-10 sm:w-12 shrink-0 text-right pr-3 sm:pr-4 text-faded-slate text-xs leading-7 select-none">
                  {i + 1}
                </span>
                <div
                  {...getLineProps({ line })}
                  className="flex-1 min-w-0 whitespace-pre-wrap break-words pl-2"
                >
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                  {i === tokens.length - 1 && <CodeCursor />}
                </div>
              </div>
            ))}
          </>
        )}
      </Highlight>
    </div>
  );
}

/**
 * Text that can be animated without shifting the page. By default only the
 * real copy shows. During the intro the real copy turns invisible (still
 * holding the layout) and an absolutely positioned overlay animates on top;
 * when the intro ends, the overlay is hidden again, so the text never appears
 * twice for copy/paste, Ctrl+F or crawlers.
 */
function StableAnimatedText({ text, anim }: { text: string; anim: string }) {
  return (
    <span className="relative block">
      <span data-anim-layer="copy">{text}</span>
      <span
        aria-hidden="true"
        data-anim={anim}
        data-anim-layer="overlay"
        // overflow-hidden + break-all: scrambled text has no spaces and must not overflow sideways
        className="absolute inset-0 hidden overflow-hidden break-all select-none"
      >
        {text}
      </span>
    </span>
  );
}

gsap.registerPlugin(ScrambleTextPlugin, TextPlugin);

/**
 * Homepage intro, ~2.3s in total: code lines slide in like a file opening,
 * the name decodes from scrambled characters, then the tagline types out.
 * Runs only without prefers-reduced-motion; any click or key press finishes it.
 */
function useHomeIntro(scope: React.RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia(scope.current ?? undefined);
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        // Hand the text back to the real copy once the intro is over
        onComplete: () => {
          gsap.set("[data-anim-layer=overlay]", { display: "none" });
          gsap.set("[data-anim-layer=copy]", { opacity: 1 });
        },
      });
      tl.set("[data-anim-layer=overlay]", { display: "block" }, 0)
        .set("[data-anim-layer=copy]", { opacity: 0 }, 0)
        .from("[data-anim=code-line]", {
        opacity: 0,
        x: -12,
        duration: 0.35,
        stagger: 0.04,
        ease: "power2.out",
      }, 0)
        .to("[data-anim=name]", {
          duration: 1.1,
          scrambleText: { text: profile.name, chars: "upperCase", revealDelay: 0.35, speed: 0.6 },
        }, 0.15)
        .set("[data-anim=tagline]", { text: "" }, 0)
        .to("[data-anim=tagline]", {
          duration: 1.4,
          text: { value: profile.tagline },
          ease: "none",
        }, 0.9);

      const finish = () => tl.progress(1);
      window.addEventListener("keydown", finish, { once: true });
      window.addEventListener("pointerdown", finish, { once: true });
      return () => {
        window.removeEventListener("keydown", finish);
        window.removeEventListener("pointerdown", finish);
      };
    });
    return () => mm.revert(); // restores the original text and styles
  }, [scope]);
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
            <StableAnimatedText text={profile.name} anim="name" />
          </h1>
          <p className="font-headline text-xl text-cyber-cyan font-light mb-2">
            {profile.role}
          </p>
          <p className="font-headline text-lg text-lavender mb-3">
            <StableAnimatedText text={profile.tagline} anim="tagline" />
          </p>
          {/* Full summary as a doc comment: wraps instead of being cut at 12 words */}
          <p className="font-code text-sm text-faded-slate mb-6 max-w-prose leading-relaxed">
            <SyntaxSpan type="comment">
              {"/** "}
              {profile.summary}
              {" */"}
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
            <button
              onClick={() => navigate("/career")}
              className="flex items-center gap-2 border border-warm-amber text-warm-amber px-6 py-3 font-mono text-sm hover:bg-warm-amber/10 transition-colors"
            >
              <Icon icon="material-symbols:sports-esports" className="text-base" />
              PLAY_CAREER_RUN
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
            <Icon icon={profile.countryFlagIcon} className="inline-block align-[-2px] me-1.5" />
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
  const rootRef = useRef<HTMLDivElement>(null);
  useHomeIntro(rootRef);

  return (
    <div ref={rootRef} className="min-h-full">
      <CodeHero />
      <PreviewBento />
    </div>
  );
}

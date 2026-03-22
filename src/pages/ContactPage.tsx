import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { profile } from "@/data/profile";

const CONTACT_LINKS = [
  {
    label: "[EMAIL]",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: "ic:baseline-email",
    iconClass: "text-white",
  },
  {
    label: "[LINKEDIN]",
    value: profile.linkedin,
    href: profile.linkedin,
    icon: "devicon:linkedin",
    iconClass: "text-white bg-blue",
  },
  {
    label: "[GITHUB]",
    value: profile.github,
    href: profile.github,
    icon: "mdi:github",
    iconClass: "text-white",
  },
  {
    label: "[PHONE]",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\D/g, "")}`,
    icon: "mdi:phone",
    iconClass: "text-white",
  },
];

export function ContactPage() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const update = () => setCurrentTime(new Date().toString().split(" GMT")[0]);
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="p-4 md:p-8 pb-12 font-code text-sm leading-relaxed">
      {/* Terminal header */}
      <div className="mb-8 text-faded-slate">
        <p>
          Last login: <span className="text-lavender">{currentTime}</span> on
          ttys001
        </p>
        <p>KhaledOS (v1.0.0) — Terminal</p>
        <p>
          Type <span className="text-terminal-green">'help'</span> for available
          commands.
        </p>
      </div>

      {/* Command: ls -la */}
      <div className="mb-4 anim-item">
        <div className="flex items-center gap-2">
          <span className="text-terminal-green font-semibold whitespace-nowrap">
            khaled@taymour:~$
          </span>
          <span className="text-lavender">ls -la</span>
        </div>
        <div className="pl-4 md:pl-0 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0.5 mt-2 text-faded-slate">
          <div>
            drwxr-xr-x 4 khaled staff 128{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
            })}{" "}
            .
          </div>
          <div>
            drwxr-xr-x 6 khaled staff 192{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
            })}{" "}
            ..
          </div>
          <div>
            -rw-r--r-- 1 khaled staff 245{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
            })}{" "}
            contact.txt
          </div>
          <div>
            -rwxr-xr-x 1 khaled staff 892{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
            })}{" "}
            connect
          </div>
        </div>
      </div>

      {/* Command: cat contact.txt */}
      <div className="mt-6 anim-item" style={{ animationDelay: "0.2s" }}>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-terminal-green font-semibold whitespace-nowrap">
            khaled@taymour:~$
          </span>
          <span className="text-lavender">cat contact.txt</span>
        </div>

        <div className="pl-0 space-y-4">
          <p className="text-lavender">
            <span className="text-faded-slate">#</span> Initiating secure
            connection protocols...
          </p>

          {CONTACT_LINKS.map((link, i) => (
            <div
              key={link.label}
              className="anim-item flex flex-col sm:flex-row sm:items-center gap-2"
              style={{ animationDelay: `${0.3 + i * 0.1}s` }}
            >
              <span className="text-faded-slate w-28 shrink-0 flex items-center gap-1.5">
                <Icon
                  icon={link.icon}
                  className={`text-base ${link.iconClass}`}
                />
                {link.label}
              </span>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-cyber-cyan glow-hover transition-all duration-200 border-b border-transparent hover:border-cyber-cyan pb-0.5 inline-block break-all"
              >
                {link.value}
              </a>
            </div>
          ))}

          {/* Divider */}
          <div className="mt-6 text-faded-slate">
            <p>
              <span className="text-terminal-green">
                <Icon icon="mdi:location" className="inline" />
              </span>{" "}
              Located in{" "}
              <span className="text-lavender">{profile.location}</span> —
              Transferable Iqama
            </p>
            <p className="mt-1">
              <span className="text-terminal-green">#</span> Open to{" "}
              <span className="text-cyber-cyan">worldwide relocation 🌍</span>
            </p>
          </div>
        </div>
      </div>

      {/* Command: ./connect --send-message */}
      <div className="mt-8 anim-item" style={{ animationDelay: "0.8s" }}>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-terminal-green font-semibold whitespace-nowrap">
            khaled@taymour:~$
          </span>
          <span className="text-lavender">./connect --send-message</span>
        </div>
        <div className="pl-0 space-y-2 text-faded-slate">
          <p>Establishing connection...</p>
          <p>
            <span className="text-terminal-green">✓</span> Channels available:{" "}
            <span className="text-lavender">email, LinkedIn</span>
          </p>
          <p>
            <span className="text-terminal-green">✓</span> Response time:{" "}
            <span className="text-warm-amber">{"< 24 hours"}</span>
          </p>
        </div>
      </div>

      {/* Active blinking prompt */}
      <div
        className="flex items-center gap-2 mt-8 anim-item"
        style={{ animationDelay: "1s" }}
      >
        <span className="text-terminal-green font-semibold whitespace-nowrap">
          khaled@taymour:~$
        </span>
        <span className="w-2.5 h-5 bg-lavender inline-block animate-blink align-middle ml-1" />
      </div>
    </div>
  );
}

# Design System: The Code Canvas (Terminal / Minimalist)
**Project ID:** 1821919445899227954

---

## 1. Visual Theme & Atmosphere

The portfolio embodies a **VSCode-as-identity** philosophy — the entire UI is framed as a live, running code editor. Every page is a "file" (homepage.tsx, skills.json, projects.ts, contact.sh), and the viewer navigates it like a developer browsing a repo. The atmosphere is:

- **Pitch-dark and focused** — near-void backgrounds eliminate distraction; content is the only light source
- **Neon-on-void** — electric green and cyan accents glow against the darkness like a terminal cursor
- **Utilitarian minimalism** — zero decorative elements; even whitespace is purposeful and grid-locked
- **Technically expressive** — syntax highlighting, blinking cursors, and fade-in animations reinforce the "live code" metaphor

This is a developer's space. Everything feels like it was written, not designed.

---

## 2. Color Palette & Roles

### Background Layers (Dark → Bright)
| Descriptive Name | Hex | Functional Role |
|---|---|---|
| Void Black | `#090A0F` | Deepest editor background; outermost shell |
| Abyss Surface | `#0d0e13` | Page-level background layer beneath panels |
| Editor Canvas | `#121318` | Primary editor/panel background |
| Elevated Surface | `#13151D` | Card and container backgrounds; slightly lifted |
| Border Shadow | `#222436` | Panel borders, dividers, scrollbar tracks |
| Dim Surface | `#38393f` | Hover states on sidebar items; the brightest inert surface |

### Text Hierarchy
| Descriptive Name | Hex | Functional Role |
|---|---|---|
| Muted Lavender | `#A6ACCD` | Primary body text; editor content text |
| Faded Slate | `#4B526D` | Line numbers, secondary labels, placeholders |
| Ghost Green | `#efffe3` | Light foreground; highlighted active text |

### Accent Colors
| Descriptive Name | Hex | Functional Role |
|---|---|---|
| Terminal Green | `#39FF14` / `#3cf91a` | **Primary accent** — cursor, CTAs, active indicators, glow effects |
| Cyber Cyan | `#00E5FF` / `#00e3fd` | **Secondary accent** — JSON keys, hyperlinks, secondary highlights |
| Warm Amber | `#FF9E64` | Numbers, booleans in syntax; warmth against the cold palette |

### Syntax Highlighting Palette (Code Blocks Only)
| Descriptive Name | Hex | Role |
|---|---|---|
| Lilac Keyword | `#c678dd` | Language keywords (`const`, `function`, `return`) |
| Soft Crimson | `#e06c75` | Variables, JSX tags |
| Sage Green | `#98c379` | String literals |
| Sky Blue | `#61afef` | Function names, method calls |
| Dusty Amber | `#d19a66` | HTML attributes, constants |
| Fog Gray | `#5c6370` | Comments (italicized) |

---

## 3. Typography Rules

**Three-font system** with strict role separation:

| Font | Family | Role |
|---|---|---|
| **Space Grotesk** | Sans-serif | Display headings, section titles, UI labels — used sparingly for hierarchy |
| **Fira Code** | Monospace | Primary body font for all code-styled content; brings the terminal feel |
| **JetBrains Mono** | Monospace | Secondary mono for deeper code blocks; slightly more technical character |
| **Inter** | Sans-serif | General UI text, status bars, metadata where readability trumps character |

**Weight usage:**
- Bold (700): Section headers, file names in tabs, active navigation items
- Medium (500): Sub-labels, sidebar items, button text
- Regular (400): Body content, code lines, descriptions

**Letter spacing:** Tight on monospace (default); slightly tracked-out on Space Grotesk headings for breathing room.

**Never mix monospace and sans-serif within a single content block.** The divide between "code" and "UI" must remain sharp.

---

## 4. Component Stylings

### Navigation / File Tabs
- Styled exactly as VSCode editor tabs
- Active tab: `#121318` background, `#39FF14` top border indicator, full-brightness filename
- Inactive tab: `#0d0e13` background, `#4B526D` filename text
- File names use actual code conventions: `homepage.tsx`, `skills.json`, `projects.ts`, `contact.sh`

### Sidebar (File Explorer)
- Background: `#0d0e13` (slightly darker than editor)
- Folder/file items: `#A6ACCD` text, `#38393f` on hover
- Indent levels: 2rem per depth level (2rem → 4rem → 6rem)
- Icons: Material Icons (`folder_open`, `search`, `settings_outlined`)
- Active file: `#39FF14` left border accent, `#13151D` background

### Buttons
- **Primary:** Sharp, squared-off edges (0px radius). `#39FF14` background, `#053900` text. No shadow — the color alone commands attention.
- **Secondary/Ghost:** Transparent background, `#222436` border, `#A6ACCD` text. On hover: border shifts to `#39FF14`, text brightens.
- **No rounded buttons** — the only exception is pill-shaped skill tags (see below).

### Cards / Containers
- Background: `#13151D` (Elevated Surface)
- Border: 1px solid `#222436` — barely-there, structural not decorative
- Corner radius: `0px` — sharp, squared-off edges always
- Shadow: **Flat** — no box-shadows. Depth is conveyed purely through background color difference between layers.
- Hover: Border color transitions to `#39FF14` with a faint green glow (`box-shadow: 0 0 8px rgba(57, 255, 20, 0.15)`)

### Skill/Tag Badges
- **Exception to the sharp-corners rule** — pill-shaped (`border-radius: 9999px`)
- Background: `#13151D`, border: `#222436`, text: `#A6ACCD`
- Active/featured tag: `#39FF14` border, `#efffe3` text

### Inputs / Forms
- Background: `#0d0e13`
- Border: 1px solid `#222436` — sharp corners (0px radius)
- Focus state: border transitions to `#39FF14`, no glow by default
- Placeholder text: `#4B526D`
- Label font: Fira Code

### Code Cursor
- `#39FF14` filled block, 8px × 18px
- Blinks on 1s step-end cycle (50% duty)
- Used inline in hero text and section headers to reinforce the "live typing" effect

### Status Bar
- Full-width, `#0d0e13` background
- `#4B526D` text for metadata (line number, column, encoding, file type)
- Left-aligned file breadcrumb, right-aligned editor stats
- Height: ~22px — intentionally compact

### Line Numbers
- 40px fixed-width column, `#4B526D` text
- Right-padded 16px from code content
- Active line: `#A6ACCD` (brightens to match body text)

---

## 5. Layout Principles

### Three-Panel IDE Layout
```
┌──────────┬────────────────────────┬────────────────────────┐
│ Sidebar  │     Code Editor        │    Live Preview        │
│ (file    │  (syntax-highlighted   │  (rendered content)    │
│ explorer)│   source code)         │                        │
└──────────┴────────────────────────┴────────────────────────┘
│                    Status Bar                              │
└────────────────────────────────────────────────────────────┘
```

- **Sidebar:** ~240px fixed width, collapses on mobile
- **Editor panel:** Fills remaining space; contains the primary readable content
- **Preview panel:** Visible on wider viewports; mirrors the "right panel" of a real IDE

### Whitespace Philosophy
- **Dense but breathable** — line-height is generous (1.6–1.8) within code blocks to aid reading
- Sections are separated by significant vertical space (64px–96px) so each "file section" feels like its own module
- No decorative dividers — whitespace does the separation work

### Grid & Alignment
- **Strict left alignment** — nothing is centered except modal/overlay content
- Content aligns to an invisible 8px base grid
- Indentation within code blocks uses consistent 2rem steps

### Animations
- `fadeIn`: 0.4s ease, opacity 0→1, translateY 5px upward — applied staggered on page load
- Stagger delays: 0.1s, 0.2s, 0.3s, 0.4s, 0.5s per element group
- Bracket hover: `text-shadow: 0 0 8px rgba(57, 255, 20, 0.4)` — green glow on interactive code elements
- All transitions: 200ms ease (no spring physics — this is a terminal, not a consumer app)

### Responsive Behavior
- Desktop: Full three-panel IDE layout
- Tablet: Sidebar collapses to icon-only; editor + preview stack vertically
- Mobile: Single column; tabs replace the sidebar for navigation

# Antigravity Skills & MCP Directory (Krishan's Stack Index)

> **Auto-Maintained Index**: Quick reference and runbook for all installed Skills and MCP servers in this workspace and globally on this machine.
> **Tech Stack Focus**: React 18/19, TypeScript, ASP.NET Core (C# .NET 8/9), SQL Server & PostgreSQL, Tailwind CSS, Vite.

---

## 1. Stack-Specific Core Skills (Primary Workflow)

| Skill Name | Type | Scope / Path | Stack / Focus | Kab Use Karna Hai |
| :--- | :--- | :--- | :--- | :--- |
| **`react-ts-vite-expert`** | Skill | Global (`~/.gemini/config/skills/`) | React 18/19, TS, Vite | React components, TypeScript strict patterns, custom hooks, Vite configs, performance optimization. |
| **`aspnet-core-clean-arch`** | Skill | Global (`~/.gemini/config/skills/`) | C# .NET 8/9, Clean Arch, EF Core | ASP.NET Core Web APIs, CQRS, Minimal APIs, Dependency Injection, EF Core migrations, REST security. |
| **`db-sql-postgres-expert`** | Skill | Global (`~/.gemini/config/skills/`) | PostgreSQL, SQL Server | Schema design, indexing, query optimization, joins, constraints, migrations & transaction safety. |
| **`context7-docs-retriever`** | Skill | Global (`~/.gemini/config/skills/`) | Real-time docs lookup | Jab kisi library (React, Tailwind, EF Core, Vite) ka latest API syntax ya version-specific docs chahiye. |
| **`ui-styling`** | Skill | Global (`~/.gemini/config/skills/`) | Tailwind CSS, shadcn/ui | Tailwind utilities, responsive layouts, accessible UI components, theme customizers. |
| **`ui-ux-pro-max`** | Skill | Global (`~/.gemini/config/skills/`) | UI/UX design intelligence | 50+ styles, 161 palettes, professional landing page & dashboard UX guidelines. |
| **`webapp-testing`** | Skill | Global (`~/.gemini/config/skills/`) | Playwright & browser testing | Frontend functionality verification, DOM inspection, UI regressions & browser end-to-end tests. |

---

## 2. Workspace Specialized Skills (`.agents/skills/`)

| Skill Name | Focus / Category | Kab Use Karna Hai |
| :--- | :--- | :--- |
| **`agentic-seo`** | Deterministic SEO Engine | Full technical SEO audits, schema validation (JSON-LD), Core Web Vitals, E-E-A-T, robots & sitemaps. |
| **`design-taste-frontend`** | Anti-Template Frontend | Modern, non-generic landing pages, high-conversion UI, typography and aesthetic polish. |
| **`high-end-visual-design`** | Agency-Grade Aesthetics | Luxury, premium typography, micro-animations, bespoke shadows and layouts. |
| **`frontend-design`** | Visual Direction | Intentional color harmonies, font pairings, responsive layout architectures. |
| **`deploy-to-vercel`** | Production Deployment | Vercel deployment workflows, preview URLs, deployment checks. |
| **`vercel-optimize`** | Cost & Performance | Vercel Core Web Vitals, function invocations, fast data transfer, edge cache tuning. |
| **`vercel-composition-patterns`** | Scalable React Architecture | Compound components, render props, context providers, React 19 API patterns. |
| **`vercel-react-best-practices`** | React Performance | Bundle size reduction, render re-trigger prevention, memoization guidelines. |
| **`vercel-react-view-transitions`**| Smooth Motion | Native View Transition API (`startViewTransition`), route transition animations. |
| **`gpt-taste`** | GSAP Motion & Layouts | Advanced scroll triggers, bento grids, layout variance, kinetic micro-interactions. |
| **`brandkit`** | Visual Identity | Brand boards, design tokens, visual world decks and presentation guidelines. |
| **`humanizer`** | Natural Writing | AI-generated text audit to remove robotic patterns and ensure authentic tone. |
| **`full-output-enforcement`** | Complete Code Generation | Prevents token truncation or placeholder code comments; guarantees complete code. |
| **`web-design-guidelines`** | UI Compliance Audit | Web Interface Guidelines verification, accessibility (WCAG), contrast & click targets. |
| **`writing-guidelines`** | Editorial & Docs Tone | Reviewing documentation and user-facing prose against clean writing standards. |

---

## 3. Configured Model Context Protocol (MCP) Servers

| Server Identifier | Transport | Status | Capabilities / Kab Use Karna Hai |
| :--- | :--- | :--- | :--- |
| **`sequential-thinking`** | Stdio (`@modelcontextprotocol/server-sequential-thinking`) | ✅ Active / Zero-Config | Complex multi-step reasoning, architectural decomposition, and systematic debugging. |
| **`playwright`** | Stdio (`@executeautomation/playwright-mcp-server`) | ✅ Active / Zero-Config | Browser automation, DOM navigation, taking snapshots, and verifying interactive UI flows. |
| **`postgres`** | Stdio (`@modelcontextprotocol/server-postgres`) | ⚠️ Needs DB Connection String | Directly querying, inspecting schemas, and running migrations against PostgreSQL. |
| **`stitch` / `StitchMCP`** | SSE / Remote (`stitch.googleapis.com/mcp`) | ✅ Configured with Google API Key | Screen generation, design systems, variants, and UI mockup transformations. |

---

## 4. Execution Principles & Protocol

1. **Progressive Skill Activation**:
   - Har naye task se pehle related skill ka `SKILL.md` padhein aur uske instructions follow karein.
2. **Deterministic UI Testing**:
   - Web application changes ko `webapp-testing` aur browser automation se verify karein.
3. **No Placeholders**:
   - `full-output-enforcement` rule follow karein; code me kabhi `// TODO: implement later` ya incomplete blocks na chhoden.
4. **Submodule Safety**:
   - `.agents/skills/` ke andar nested `.git` folders nahi hone chahiye taaki gitlink submodule collision na ho.

# Agent Guidelines for Twilight Docs

## Build Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production  
- `pnpm preview` - Preview production build
- No test framework configured

## Code Style Guidelines

### Project Structure
- Astro + Starlight documentation site
- Content in `src/content/docs/` using MDX format
- Custom styles in `src/styles/custom.css`
- Font definitions in `src/fonts/font-face.css`

### Import Conventions
- Use ES6 imports with single quotes
- Astro imports: `import { defineCollection } from 'astro:content'`
- Starlight imports: `import { docsLoader } from '@astrojs/starlight/loaders'`

### TypeScript
- Strict TypeScript enabled via `astro/tsconfigs/strict`
- All files should be properly typed
- Use `@ts-check` comments in JS config files

### CSS/Styling
- Use Starlight CSS custom properties (`--sl-color-*`)
- Define custom properties in `:root` and `[data-theme="dark"]`
- No border radius (`border-radius: 0 !important`)
- Uppercase text transformation for headings

### File Naming
- Use kebab-case for file names
- MDX files for content with frontmatter
- Config files use `.mjs` for Astro configs

### Content Structure
- Frontmatter required for all MDX files
- Use Starlight's schema for content validation
- Sidebar configured in `astro.config.mjs`
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the documentation website for [Fider](https://github.com/getfider/fider), an open-source feedback platform. The site is built with Docusaurus 3.x and deployed to https://fider.io.

## Common Commands

```bash
yarn install    # Install dependencies
yarn start      # Start dev server with hot reload
yarn build      # Build for production (outputs to ./build)
yarn typecheck  # Run TypeScript type checking
yarn serve      # Serve the production build locally
```

## Architecture

- **docs/** - Markdown/MDX documentation content (served at root `/`)
  - `api/` - API reference documentation
  - `guides/` - How-to guides (OAuth, SSL, webhooks, legal pages)
  - `self-hosted/` - Hosting guides (AWS, Azure, Heroku, Coolify)
- **src/** - React components and styles
  - `css/custom.css` - Global CSS overrides (Infima variables)
  - `components/` - Reusable React components
  - `pages/` - Custom pages outside docs
- **static/** - Static assets (images, favicon)
- **docusaurus.config.ts** - Main Docusaurus configuration
- **sidebars.ts** - Sidebar structure (auto-generated from docs folder)
- **socials.ts** - Navbar social icons configuration

## Key Configuration

- Docs are served at the root path (`/`) with no blog
- Search is provided by `@easyops-cn/docusaurus-search-local`
- Site uses classic Docusaurus preset with custom CSS theming
- The sidebar is auto-generated from the `docs/` directory structure

# hello
# package.json
```
{
  "name": "react-example",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --port=3000 --host=0.0.0.0",
    "build": "vite build",
    "preview": "vite preview",
    "clean": "rm -rf dist server.js",
    "lint": "tsc --noEmit"
  },
  "dependencies": {
    "@base-ui/react": "^1.8.0",
    "@fontsource-variable/inter": "^5.3.0",
    "// @google/genai": "^2.4.0", // NOT NEEDED: Only for Google Gemini AI features
    "// @mdx-js/react": "^3.1.1", // NOT NEEDED: Only if rendering Markdown as components
    "// @mdx-js/rollup": "^3.1.1", // NOT NEEDED: Only if building Markdown pages
    "@tailwindcss/vite": "^4.1.14",
    "// @tanstack/react-query": "^5.103.2", // NOT NEEDED: Only for complex API caching/fetching
    "@vitejs/plugin-react": "^5.0.4",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "// dotenv": "^17.2.3", // NOT NEEDED: Vite handles environment variables natively
    "// express": "^4.21.2", // NOT NEEDED: Backend server framework, not for browsers
    "lucide-react": "^0.546.0",
    "// motion": "^12.23.24", // NOT NEEDED: Heavy animation library, use Tailwind instead
    "react": "^19.0.1",
    "react-dom": "^19.0.1",
    "react-router-dom": "^7.18.4",
    "// remark-frontmatter": "^5.0.0", // NOT NEEDED: Markdown metadata parser
    "// remark-mdx-frontmatter": "^6.0.0", // NOT NEEDED: Markdown metadata parser
    "shadcn": "^4.21.0",
    "sonner": "^2.0.8",
    "tailwind-merge": "^3.7.0",
    "tw-animate-css": "^1.4.0",
    "vite": "^6.2.3",
    "// zustand": "^5.0.15" // NOT NEEDED: Global state management, use standard React hooks
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "// @types/express": "^4.17.21", // NOT NEEDED: TypeScript types for Express backend
    "@types/node": "^22.14.0",
    "@types/react": "^19.3.0",
    "@types/react-dom": "^19.3.0",
    "autoprefixer": "^10.4.21",
    "esbuild": "^0.25.0",
    "eslint": "^10.11.0",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.7",
    "globals": "^17.12.0",
    "prettier": "^3.9.8",
    "prettier-plugin-tailwindcss": "^0.8.1",
    "tailwindcss": "^4.1.14",
    "// tsx": "^4.21.0", // NOT NEEDED: Runs TS files in Node, Vite handles this for the frontend
    "typescript": "~5.8.2",
    "typescript-eslint": "^8.70.1",
    "vite": "^6.2.3"
  }
}
```

import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY?.split('/')[0];
const isGithubPages = Boolean(repository && owner);
const isUserSite = repository === `${owner}.github.io`;

const site = process.env.SITE_URL ?? (isGithubPages ? `https://${owner}.github.io` : 'http://localhost:4321');
const base = process.env.BASE_PATH ?? (isGithubPages && !isUserSite ? `/${repository}` : '/');

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
});

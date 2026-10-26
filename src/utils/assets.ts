/**
 * Resolves static asset paths relative to the current Vite deployment base URL.
 * Ensures assets work seamlessly on GitHub Pages subpaths (/africa-entry-guide/)
 * as well as root domains and local dev environments.
 */
export function resolveAssetUrl(path: string | undefined): string | undefined {
  if (!path) return undefined;
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base =
    typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL
      ? import.meta.env.BASE_URL
      : './';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
}

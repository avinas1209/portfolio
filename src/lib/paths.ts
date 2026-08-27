// GitHub Pages serves a project site from https://<user>.github.io/<repo>, so every
// URL the app emits by hand needs that prefix. The deploy workflow feeds these in from
// actions/configure-pages; both are empty/local when running `next dev`.

export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

/**
 * Prefix a file in public/ with the deployment basePath.
 * next/link and next/image do this automatically — this is for raw <a href> and metadata.
 */
export function asset(path: string) {
  return `${basePath}${path}`;
}

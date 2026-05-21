export const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST;
export const BACKEND_API_BASE = BACKEND_HOST ? `${BACKEND_HOST}/api` : "/api";

export function apiUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BACKEND_API_BASE}${normalized}`;
}

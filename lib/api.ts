export const BACKEND_HOST = "https://pivot-backend-442e.onrender.com";
export const BACKEND_API_BASE = `${BACKEND_HOST}/api`;

export function apiUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BACKEND_API_BASE}${normalized}`;
}

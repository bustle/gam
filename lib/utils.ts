export function createQueryString(parameters: Record<string, any>): string {
  return Object.entries(parameters)
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
    .join("&")
}

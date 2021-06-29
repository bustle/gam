export default function createQueryString(
  parameters: Record<any, any>
): string {
  return Object.entries(parameters)
    .filter(([k, v]) => v !== undefined)
    .map(
      ([k, v]) =>
        `${k}=${encodeURIComponent(
          typeof v === "object" ? createQueryString(v) : v
        )}`
    )
    .join("&")
}

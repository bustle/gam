export default function createQueryString(
  parameters: Record<any, any>
): string {
  return Object.entries(parameters)
    .filter((entry) => typeof entry[1] !== 'undefined')
    .map(
      ([k, v]) =>
        `${k}=${encodeURIComponent(
          typeof v === "object" ? createQueryString(v) : v
        )}`
    )
    .join("&")
}

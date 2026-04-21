export function buildStableTestId(label: string): string {
  return label.toLowerCase().replace(/\s+/g, "-");
}

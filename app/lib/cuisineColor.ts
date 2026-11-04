const colors: Record<string, string> = {
  indian: "#f5b800",
  italian: "#9bd7a8",
  chinese: "#f0a3c0",
  mexican: "#f59e6c",
  thai: "#c3b1f0",
  japanese: "#8fd3d9",
  greek: "#a9d3e8",
  american: "#f28b82",
};

export function cuisineColor(cuisine: string): string {
  return colors[cuisine.toLowerCase()] ?? "#a9d3e8";
}
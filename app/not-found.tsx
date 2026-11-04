import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: 32, textAlign: "center" }}>
      <h1>Recipe not found</h1>
      <p style={{ margin: "12px 0 24px" }}>
        We couldn&apos;t find that page. Maybe the recipe was eaten already.
      </p>
      <Link href="/">← Back to all recipes</Link>
    </main>
  );
}
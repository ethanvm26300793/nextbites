import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page state">
      <h1>Nothing cooking here</h1>
      <p>
        We couldn&apos;t find that page. The recipe may have been renamed or
        removed.
      </p>
      <Link href="/" className="button">
        Back to all recipes
      </Link>
    </main>
  );
}
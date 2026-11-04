"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="page state">
      <h1>Something went wrong</h1>
      <p>{error.message || "This page failed to load."}</p>
      <button className="button" onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}
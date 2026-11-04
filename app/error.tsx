"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main style={{ padding: 32, textAlign: "center" }}>
      <h1>Something went wrong</h1>
      <p style={{ margin: "12px 0 24px" }}>{error.message}</p>
      <button
        onClick={() => reset()}
        style={{
          padding: "10px 20px",
          borderRadius: 8,
          border: "1px solid #ccc",
          cursor: "pointer",
          fontSize: 16,
        }}
      >
        Try again
      </button>
    </main>
  );
}
export default function Loading() {
  return (
    <main className="page" aria-busy="true">
      <p className="empty">Loading recipes…</p>
      <div className="grid">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="skeleton" />
        ))}
      </div>
    </main>
  );
}
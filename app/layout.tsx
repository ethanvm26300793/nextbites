// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites",
  description: "Search and browse tasty recipes by title or cuisine.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: '20px', backgroundColor: '#333', color: 'white', marginBottom: '20px' }}>
          <h1 style={{ margin: 0 }}>NextBites</h1>
        </nav>
        <main style={{ padding: '0 20px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
import RecipeGrid from "./components/RecipeGrid";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main style={{ padding: 32 }}>
      <h1>NextBites</h1>
      <p style={{ marginBottom: 24 }}>Find your next favourite recipe.</p>
      <RecipeGrid recipes={recipes} />
    </main>
  );
}
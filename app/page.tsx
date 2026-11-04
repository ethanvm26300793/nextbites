import RecipeGrid from "./components/RecipeGrid";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <h1>What are we cooking today?</h1>
        <p>Browse the recipes below, or search by name or cuisine.</p>
      </section>
      <RecipeGrid recipes={recipes} />
    </main>
  );
}
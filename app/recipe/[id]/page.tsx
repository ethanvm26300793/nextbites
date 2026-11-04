import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe } from "../../data/recipes";

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main style={{ padding: 32, maxWidth: 700, margin: "0 auto" }}>
      <Link href="/">← Back to all recipes</Link>

      <h1 style={{ marginTop: 16 }}>{recipe.title}</h1>
      <p style={{ color: "#666", marginBottom: 24 }}>
        {recipe.cuisine} · {recipe.time}
      </p>

      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h2 style={{ marginTop: 24 }}>Steps</h2>
      <ol>
        {recipe.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </main>
  );
}
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";
import { cuisineColor } from "../../lib/cuisineColor";

export const dynamicParams = false;

export function generateStaticParams() {
  return recipes.map((recipe) => ({ id: recipe.id }));
}

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
    <main className="page">
      <Link href="/" className="back">
        Back to all recipes
      </Link>

      <header
        className="recipe-hero"
        style={{ backgroundColor: cuisineColor(recipe.cuisine) }}
      >
        <h1>{recipe.title}</h1>
        <div className="recipe-meta">
          <span className="pill">{recipe.cuisine}</span>
          <span className="pill">{recipe.time}</span>
        </div>
      </header>

      <div className="recipe-layout">
        <section className="panel">
          <h2>Ingredients</h2>
          <ul className="ingredients">
            {recipe.ingredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Steps</h2>
          <ol className="steps">
            {recipe.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
import Link from "next/link";
import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/recipe/${recipe.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 12,
          padding: 20,
          cursor: "pointer",
        }}
      >
        <h3 style={{ margin: 0 }}>{recipe.title}</h3>
        <p style={{ margin: "8px 0 0", color: "#666" }}>
          {recipe.cuisine} · {recipe.time}
        </p>
      </div>
    </Link>
  );
}
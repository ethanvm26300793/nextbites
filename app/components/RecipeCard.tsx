import Link from "next/link";
import type { Recipe } from "../data/recipes";
import { cuisineColor } from "../lib/cuisineColor";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipe/${recipe.id}`} className="card">
      <div
        className="card-top"
        style={{ backgroundColor: cuisineColor(recipe.cuisine) }}
      >
        <span className="card-cuisine">{recipe.cuisine}</span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{recipe.title}</h3>
        <span className="pill">{recipe.time}</span>
      </div>
    </Link>
  );
}
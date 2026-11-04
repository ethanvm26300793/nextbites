"use client";

import { useState } from "react";
import RecipeCard from "./RecipeCard";
import type { Recipe } from "../data/recipes";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");

  const q = query.toLowerCase();
  const matches = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(q) ||
      recipe.cuisine.toLowerCase().includes(q)
  );

  return (
    <div>
      <input
        type="text"
        className="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title or cuisine"
        aria-label="Search recipes"
      />

      {matches.length === 0 ? (
        <div>
          <p className="empty">
            No recipes match &quot;{query}&quot;. Check the spelling or try a
            cuisine name.
          </p>
          <button className="button" onClick={() => setQuery("")}>
            Clear search
          </button>
        </div>
      ) : (
        <div className="grid">
          {matches.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
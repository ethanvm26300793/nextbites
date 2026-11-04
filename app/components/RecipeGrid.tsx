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
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title or cuisine..."
        style={{
          width: "100%",
          maxWidth: 400,
          padding: "10px 14px",
          marginBottom: 24,
          borderRadius: 8,
          border: "1px solid #ccc",
          fontSize: 16,
        }}
      />

      {matches.length === 0 ? (
        <p>No recipes match &quot;{query}&quot;. Try another search!</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {matches.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
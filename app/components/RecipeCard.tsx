// app/components/RecipeCard.tsx
import { Recipe } from '../data/recipes';

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', fontSize: '0.9rem', color: '#555' }}>
        <span>⏱️ {recipe.minutes} mins</span>
        <span>🌍 {recipe.cuisine}</span>
      </div>
    </div>
  );
}
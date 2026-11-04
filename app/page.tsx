// app/page.tsx
import { recipes } from './data/recipes';
import RecipeCard from './components/RecipeCard';

export default function Home() {
  return (
    <div>
      <h2 style={{ marginBottom: '20px' }}>Our Recipes</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', 
        gap: '20px' 
      }}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
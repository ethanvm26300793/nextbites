export type Recipe = {
  id: string;
  title: string;
  cuisine: string;
  time: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "butter-chicken",
    title: "Butter Chicken",
    cuisine: "Indian",
    time: "45 min",
    ingredients: [
      "500g chicken thigh, cubed",
      "1 cup yogurt",
      "2 tbsp butter",
      "1 cup tomato puree",
      "1/2 cup cream",
      "2 tsp garam masala",
      "1 tbsp ginger-garlic paste",
    ],
    steps: [
      "Marinate the chicken in yogurt, ginger-garlic paste and spices for 30 minutes.",
      "Pan-sear the chicken until browned, then set aside.",
      "Melt butter, add tomato puree and simmer for 10 minutes.",
      "Add the chicken and cream, then cook for 10 more minutes.",
      "Serve hot with naan or rice.",
    ],
  },
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    cuisine: "Italian",
    time: "30 min",
    ingredients: [
      "1 pizza dough ball",
      "1/2 cup tomato sauce",
      "150g fresh mozzarella",
      "Fresh basil leaves",
      "1 tbsp olive oil",
    ],
    steps: [
      "Preheat the oven to its highest setting.",
      "Stretch the dough into a round base.",
      "Spread the sauce and top with torn mozzarella.",
      "Bake for 8-10 minutes until the crust is golden.",
      "Add basil and olive oil, then serve.",
    ],
  },
  {
    id: "veg-fried-rice",
    title: "Veg Fried Rice",
    cuisine: "Chinese",
    time: "20 min",
    ingredients: [
      "2 cups cooked rice",
      "1 carrot, diced",
      "1/2 cup peas",
      "2 spring onions, chopped",
      "2 tbsp soy sauce",
      "1 tbsp oil",
    ],
    steps: [
      "Heat oil in a wok on high heat.",
      "Stir-fry the carrot and peas for 2 minutes.",
      "Add the rice and soy sauce, then toss for 3 minutes.",
      "Finish with spring onions and serve.",
    ],
  },
];

export function getRecipe(id: string) {
  return recipes.find((r) => r.id === id);
}
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
    {
    id: "chicken-tacos",
    title: "Chicken Tacos",
    cuisine: "Mexican",
    time: "25 min",
    ingredients: [
      "400g chicken breast, sliced",
      "1 tbsp taco seasoning",
      "8 small tortillas",
      "1 tomato, diced",
      "1/2 onion, diced",
      "Fresh coriander",
      "1 lime",
    ],
    steps: [
      "Toss the chicken with the taco seasoning.",
      "Cook in a hot pan for 6-8 minutes until browned and cooked through.",
      "Warm the tortillas in a dry pan for 30 seconds each side.",
      "Fill with chicken, tomato, onion and coriander.",
      "Squeeze lime over the top and serve.",
    ],
  },
  {
    id: "veg-pad-thai",
    title: "Veg Pad Thai",
    cuisine: "Thai",
    time: "30 min",
    ingredients: [
      "200g flat rice noodles",
      "2 tbsp tamarind paste",
      "2 tbsp soy sauce",
      "1 tbsp sugar",
      "1 cup bean sprouts",
      "1/2 cup crushed peanuts",
      "2 eggs",
      "1 lime",
    ],
    steps: [
      "Soak the noodles in warm water for 20 minutes, then drain.",
      "Mix the tamarind, soy sauce and sugar into a sauce.",
      "Scramble the eggs in a hot wok and push them aside.",
      "Add the noodles and sauce and toss for 3 minutes.",
      "Stir in the bean sprouts, top with peanuts and serve with lime.",
    ],
  },
  {
    id: "teriyaki-chicken-bowl",
    title: "Teriyaki Chicken Bowl",
    cuisine: "Japanese",
    time: "25 min",
    ingredients: [
      "400g chicken thigh, cubed",
      "3 tbsp soy sauce",
      "2 tbsp honey",
      "1 tbsp rice vinegar",
      "2 cups cooked rice",
      "1 cup steamed broccoli",
      "1 tsp sesame seeds",
    ],
    steps: [
      "Mix the soy sauce, honey and rice vinegar.",
      "Brown the chicken in a pan for 6 minutes.",
      "Pour in the sauce and simmer until thick and glossy.",
      "Serve over rice with broccoli and sesame seeds.",
    ],
  },
  {
    id: "greek-salad",
    title: "Greek Salad",
    cuisine: "Greek",
    time: "10 min",
    ingredients: [
      "3 tomatoes, chopped",
      "1 cucumber, chopped",
      "1/2 red onion, sliced",
      "100g feta cheese",
      "1/2 cup olives",
      "2 tbsp olive oil",
      "1 tsp dried oregano",
    ],
    steps: [
      "Combine the tomatoes, cucumber, onion and olives in a bowl.",
      "Top with the feta.",
      "Drizzle with olive oil and sprinkle with oregano.",
      "Serve straight away.",
    ],
  },
  {
    id: "classic-cheeseburger",
    title: "Classic Cheeseburger",
    cuisine: "American",
    time: "30 min",
    ingredients: [
      "500g minced beef",
      "4 burger buns",
      "4 cheese slices",
      "1 tomato, sliced",
      "Lettuce leaves",
      "Pickles",
      "Salt and pepper",
    ],
    steps: [
      "Shape the beef into 4 patties and season both sides.",
      "Cook in a hot pan for 4 minutes per side.",
      "Add the cheese in the last minute so it melts.",
      "Toast the buns lightly.",
      "Build the burgers with lettuce, tomato, pickles and the patties.",
    ],
  },
];

export function getRecipe(id: string) {
  return recipes.find((r) => r.id === id);
}
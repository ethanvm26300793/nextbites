// app/data/recipes.ts

export type Recipe = {
  id: string;
  title: string;
  minutes: number;
  cuisine: string;
  description: string;
};

export const recipes: Recipe[] = [
  { id: "1", title: "Spicy Garlic Noodles", minutes: 15, cuisine: "Asian", description: "Quick and easy noodles with a chili garlic kick." },
  { id: "2", title: "Classic Margherita Pizza", minutes: 90, cuisine: "Italian", description: "Homemade dough topped with fresh mozzarella and basil." },
  { id: "3", title: "Avocado Toast with Egg", minutes: 10, cuisine: "American", description: "Crispy sourdough topped with smashed avocado and a fried egg." },
  { id: "4", title: "Chicken Tikka Masala", minutes: 45, cuisine: "Indian", description: "Tender chicken marinated in yogurt and spices in a creamy tomato sauce." }
];
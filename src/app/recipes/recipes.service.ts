import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 1,
      image:
        'https://www.carolinescooking.com/wp-content/uploads/2016/06/Wiener-schnitzel-ohead-pic.jpg',
      description: 'A tasty Schnitzel',
      title: 'Schnitzel',
      ingredients: ['Chicken Meat', 'Gravy', 'Fries', 'Bread-Crumbs'],
    },
    {
      id: 2,
      image:
        'https://seabitesseafood.com.au/wp-content/uploads/2020/04/angus-burger.jpg',
      description: 'A tasty Burger',
      title: 'Burger',
      ingredients: ['Burger Patty', 'Bread', 'Lettuice', 'Burger Sauce'],
    },
  ];

  constructor() {}

  getAllrecipes(): Recipe[] {
    return [...this.recipes];
  }

  getRecipe(recipeId: number) {
    return { ...this.recipes.find((recipe: Recipe) => recipe.id === recipeId) };
  }

  deleteRecipe(recipeId: number) {
    this.recipes = this.recipes.filter((recipe) => recipe.id === recipeId);
  }
}

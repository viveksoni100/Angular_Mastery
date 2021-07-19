import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('salt', 200),
    new Ingredient('sugar', 500)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    /*for (let ing of ingredients) {
      this.addIngredient(ing);
    }*/
    this.ingredients.push(...ingredients);  // access list of ingredients as a single ingredient
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}

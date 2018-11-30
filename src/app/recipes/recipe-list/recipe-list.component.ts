import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  @Output() recipes: Recipe[] = [
    new Recipe(
      'Pasta', 'This is sample', 'https://images.unsplash.com/photo-1525093505341-06e6006ff576?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=244aea8bfdbef0efb10004a95ee41156&auto=format&fit=crop&w=1350&q=80'
      ),
    new Recipe(
      'Pasta Test', 'This is sample Test', 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d2452cace2ee90c9781c7a39c9a30cf&auto=format&fit=crop&w=2250&q=80'
      )
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}

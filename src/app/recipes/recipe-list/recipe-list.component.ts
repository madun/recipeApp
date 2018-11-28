import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe: Recipe[] = [
    new Recipe('Madun', 'This is sample', 'https://images.unsplash.com/photo-1525093505341-06e6006ff576?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=244aea8bfdbef0efb10004a95ee41156&auto=format&fit=crop&w=1350&q=80')
  ];

  constructor() { }

  ngOnInit() {
  }

}

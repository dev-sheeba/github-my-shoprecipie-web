import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://www.onmanorama.com/content/dam/mm/en/food/recipe/images/2021/12/21/xmas-cake.jpg.transform/onm-articleimage/image.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ultra Racing';
	carParts = [{
	"id": 1,
	"name": "Super Tires",
	"description": "These tires are the very best",
	"inStock": 5,
	"price" : 3.99
	},
	{
	"id": 2,
	"name": "Reinforced Shocks",
	"description": "Shocks made from kryptonite",
	"inStock": 0,
	"price" : 4.99
	}];
totalCarParts() {
return this.carParts.reduce((prev, current) => prev + current.inStock, 0 );
}
}

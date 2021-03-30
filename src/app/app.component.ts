import { Component, VERSION } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  Title = "Lista de Compras";
  Elemento: string = '';

  items = [];


  addItems(){
  	this.items.push(this.Elemento);
  }

  deleteItem(index: number){
  	this.items.splice(index, 1);
  }
}

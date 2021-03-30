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

  products: Product[] = [
    {
      id: '1',
      image: 'https://tumerchan.com/wp-content/uploads/2019/12/BEJO-CAMINEGRA-CUCABLANCA.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'https://cdn.shopify.com/s/files/1/0011/4651/9637/products/Gildan-18500_hoodie_forest-green_back_800x.png?v=1602779161',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'https://medias.pylones.com/6868-thickbox_default/gift-stylish-mug-schluck-accordeon.jpg',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'https://lh3.googleusercontent.com/proxy/ws7qkoVzisFfnHj2BWqRhY-oQpiT_Fiqk-CY5fLYtG_cv7Ssh5i9_fiDcU4eLK9jOT1NlOyirJ3z0Pk0LEMGWBl-I1ya6cyiNIIcnChBxYQMpjxuGos',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'https://nunu.cr/497-large_default/sticker-pizza.jpg',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/14535.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];

  addItems(){
  	this.items.push(this.Elemento);
  }

  deleteItem(index: number){
  	this.items.splice(index, 1);
  }
}

import { Component } from '@angular/core';

import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent{
    product: Product = {
        id: '1',
        image: 'https://tumerchan.com/wp-content/uploads/2019/12/BEJO-CAMINEGRA-CUCABLANCA.png',
        title: 'Camiseta',
        price: 80000,
        description: 'bla bla bla bla bla'
    }
}
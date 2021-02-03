import { templateJitUrl } from "@angular/compiler";
import { Component } from "@angular/core";
@Component({
    selector: 'root-Component',
    templateUrl:'./app.component.html'
})
export class AppComponent{
    title: String;// it's model
    products: any[];

    constructor() {
        this.title = 'Amozon retail shop';
        this.getProducts();
    }
    getProducts() {
        this.products = [
            {name:'iphone', price:5000, category:'mobile'},
            {name:'iphone12', price:54000, category:'mobile'},
            {name:'iphone15', price:50050, category:'mobile'}
        ]
    }
}



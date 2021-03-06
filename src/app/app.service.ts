import {Injectable, ErrorHandler} from '@angular/core';
import {Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Observable'; 
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class AppService {
    constructor(private _http:Http) {}
    addProduct(productObj) {
        return this._http.post("/api/v1/product", productObj)
                .map((response:Response) => response.json());
    }

    getProduct() {
        return this._http.get("/api/v1/available")
                .map((response:Response) => response.json());
    }

    getProductByFilter(product) {
        return this._http.post("/api/v1/getSalesDetails/range", product)
                .map((response:Response) => response.json());
    }

    getSuggestions(productName) {
        return this._http.post("/api/v1/getProduct", productName)
                .map((response:Response) => response.json());
    }

    addSold(product) {
        return this._http.post("/api/v1/sold", product)
                .map((response:Response) => response.json());
    }
}
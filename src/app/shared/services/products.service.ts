import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductPayload } from '../interfaces/payload-product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpClient = inject(HttpClient);

  getProducts = () => {
    return this.httpClient.get<Product[]>('/api/products')
  }

  createProduct = (payload: ProductPayload) => {
    return this.httpClient.post<Product>('/api/products', payload)
  }

}

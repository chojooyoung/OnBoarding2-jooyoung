import { makeObservable, action, observable, computed, toJS } from "mobx";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export default class ProductStore {
  constructor() {
    makeObservable(this, {
      productList: observable,
      addProduct: action,
      removeProduct: action,
      getProducts: computed,
      getProductsNum: computed,
    });
  }
  productList: Post[] = [];

  addProduct(newProduct: Post) {
    this.productList = [...this.productList, newProduct];
  }

  removeProduct(id: number) {
    this.productList.splice(id, 1);
  }

  get getProducts() {
    return toJS(this.productList);
  }

  get getProductsNum() {
    return toJS(this.productList.length);
  }
}

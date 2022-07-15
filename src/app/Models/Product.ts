import { IdName } from "./IdName";

export class Product
{
    id: number;
    name: string;
    style: string;
    sku: string;
    colorId: number;
    colorName: string|undefined;
    sizeId: number;
    sizeName: string|undefined;
    price: number; 
    image: string;
  
    constructor(id: number, name: string, style: string, sku: string, colorId: number,colorName: string, sizeId: number,
        sianeName: string, price: number, image: string ){
      this.id = id;
      this.name = name;
      this.style = style;
      this.sku = sku;
      this.colorId = colorId;
      this.colorName = colorName;
      this.sizeId = sizeId;
      this.sizeName = sianeName;
      this.price = price;
      this.image = image;
    }    
}



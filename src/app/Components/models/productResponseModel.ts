import { Product } from "./product";
import { ResponseModel } from "./responseModel";

// extends inheritance demek. Bir interface diğer interface'in özelliklerini alır.
export interface ProductResponseModel extends ResponseModel{
  data:Product[]
}

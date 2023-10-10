import { Category } from "./category";
import { ResponseModel } from "./responseModel";


// extends inheritance demek. Bir interface diğer interface'in özelliklerini alır.
export interface CategoryResponseModel extends ResponseModel{
  data:Category[]
}

import { pagePath } from "../../environments/PagePath";
import { ApiService } from "./ApiService";

export class ProductsService {
    _apiService = new ApiService();


    getAll(){
        return this._apiService.get(pagePath.Products+'/getAll').then(res => res)
    }

    save(products){
        return this._apiService.post(pagePath.Products+'/save').then(res=>res)
    }

    update(products){
        return this._apiService.post(pagePath.Products+'/update').then(res=>res)
    }
    delete(id){
        return this._apiService.post(pagePath.Products+'/delete?id='+id).then(res=>res)
    }

}
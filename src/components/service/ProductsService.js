import { pagePath } from "../../environments/PagePath";
import { ApiService } from "./ApiService";

export class ProductsService {
    _apiService = new ApiService();
    all(){
        return this._apiService.get(pagePath.Products+'/all').then(res => res)
    }

    save(products){
        return this._apiService.post(pagePath.Products+'/save',products).then(res=>res)
    }

    update(products){
        return this._apiService.post(pagePath.Products+'/update',products).then(res=>res)
    }
    delete(id){
        return this._apiService.post(pagePath.Products+'/delete?id='+id).then(res=>res)
    }

}
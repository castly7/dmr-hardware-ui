import { pagePath } from "../../environments/PagePath";
import { ApiService } from "./ApiService";

export class ProductsService {
    _apiService = new ApiService();


    getAll(){
        return this._apiService.get(pagePath.Product+'/getAll').then(res => res)
    }

    save(products){
        return this._apiService.post(pagePath.Product+'/save').then(res=>res)
    }

    update(products){
        return this._apiService.post(pagePath.Product+'/update').then(res=>res)
    }
    delete(id){
        return this._apiService.post(pagePath.Product+'/delete?id='+id).then(res=>res)
    }

}
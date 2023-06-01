import { pagePath } from "../../environments/PagePath";
import { ApiService } from "./ApiService";

export class CategoryService {
    _apiService = new ApiService();


    getAll(){
        return this._apiService.get(pagePath.Category+'/getAll').then(res => res)
    }


}
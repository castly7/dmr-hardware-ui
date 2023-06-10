import { pagePath } from "../../environments/PagePath";
import { ApiService } from "./ApiService";

export class CategoryService {
    _apiService = new ApiService();


    all(){
        return this._apiService.get(pagePath.Category+'/all').then(res => res)
    }


}
import {apiPath} from "../../environments/ApiPath";
import axios from "axios";

export class ApiService {

    constructor() {
        this.config = { auth : {username:'admin',password:'123'}}
    }

    http = axios.create({
        baseURL: apiPath.API_BASE_PATH,
    });

    get(url) {
        return this.http.get(url,this.config).then(res => res.data)
    }

    post(url, data) {
        return this.http.post(url, data, {...this.config}).then(res => res.data)
    }
}

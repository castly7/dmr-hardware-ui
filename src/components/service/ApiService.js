import {apiPath} from "../../environments/ApiPath";

export class ApiService {

    get(url) {
        debugger;
        return this.http.get(url,this.config).then(res => res.data)
    }

    post(url, data) {
        return this.http.post(url, data,this.config).then(res => res.data)
    }
}

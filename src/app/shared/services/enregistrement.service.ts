import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

const apiUrl = 'http://127.0.0.1:8000/Enregistrement/all/';

@Injectable({
    providedIn: 'root'
})
export class EnregistrementService {


    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get<any>(`http://127.0.0.1:8000/Enregistrement/all/`);
    }

    getById(id) {
        return this.http.get<any>(`${apiUrl}/${id}`);
    }

    save(obj) {
        return this.http.post<any>(`http://127.0.0.1:8000/Enregistrement/add/`, obj, {
            responseType: 'text' as 'json'
        });
    }

    update(id, obj) {
        return this.http.put<any>(`http://127.0.0.1:8000/Enregistrement/update/${id}`, obj, {
            responseType: 'text' as 'json'
        });
    }


    delete(id) {
        return this.http.delete<any>(`http://127.0.0.1:8000/Enregistrement/delete/${id}`, {
            responseType: 'text' as 'json'
        });
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = '/api/Enseignant';

@Injectable({
    providedIn: 'root'
})
export class TeacherService {
    constructor(private http: HttpClient) {}

    getAll() {
        return this.http.get<any>(`http://127.0.0.1:8000/Enseignant/all`);
    }

    getById(id) {
        return this.http.get<any>(`http://127.0.0.1:8000/Enseignant/findEnseignant/${id}`);
    }

    save(obj) {
        return this.http.post<any>(`http://127.0.0.1:8000/Enseignant/add/`, obj, {
            responseType: 'text' as 'json'
        });
    }

    delete(id) {
        return this.http.delete<any>(`http://127.0.0.1:8000/Enseignant/deleteEnseignant/${id}`, {
            responseType: 'text' as 'json'
        });
    }

    update(id, obj) {
        return this.http.put<any>(`http://127.0.0.1:8000/Enseignant/update/${id}`, obj, {
            responseType: 'text' as 'json'
        });
    }
}

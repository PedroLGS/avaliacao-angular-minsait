import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProfile } from '../interfaces/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  api = 'http://localhost:3000/profiles';

  constructor(private http: HttpClient) { }

  buscarTodos() {
    return this.http.get<IProfile[]>(this.api);
  }

  cadastrar(profile: IProfile) {
    return this.http.post<IProfile>(this.api, profile);
  }

  editar(profile: IProfile) {
    return this.http.put<IProfile>(`${this.api}/${profile.id}`, profile);
  }

  excluir(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }

  buscarPorId(id: number) {
    return this.http.get<IProfile>(`${this.api}/${id}`)
  }
}

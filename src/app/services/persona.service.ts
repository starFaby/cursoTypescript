import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(
    private httpClient: HttpClient
    ) { }
  getPersona(): Observable<any>{
    return this.httpClient.get('');
  }
  addPersona(persona: any){
    let json = JSON.stringify(persona);
    let headers = new HttpHeaders().set('Content-Type', 'aplication/json');
    return this.httpClient.post('', json, {headers: headers});
  }
  deletePersona(id){
      return this.httpClient.delete(''+ id);
  }
}

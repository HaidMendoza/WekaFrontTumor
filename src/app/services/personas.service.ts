import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private api_Obtener = 'http://localhost:8081/api/prediction/patients';
  private api_Prediccion = 'http://localhost:8081/api/prediction'; 

  constructor(private http: HttpClient) {}

  getPersonas(): Observable<any[]> {
    return this.http.get<any[]>(this.api_Obtener);
  }
  predecirPersonas(paciente:any):Observable<any>{
    return this.http.post<any>(this.api_Prediccion, paciente);
  }
}

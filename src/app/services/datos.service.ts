import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

url = 'http://localhost:3700/api/getdatos '


url2 = 'http://localhost:3700/api/datosid'


  
constructor(private http: HttpClient) { }

getDatos():Observable<any>{
return this.http.get(this.url);

}


seleccionarDato(id:string):Observable<any>{
  
  return this.http.get(`${this.url2}/${id}` );
}

 
 


}

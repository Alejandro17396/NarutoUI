import { SetAccesorio } from './../model/accesories.model';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url: string = environment.base_url+"/accesorios";

@Injectable({
  providedIn: 'root'
})
export class AccesoriesDataServiceService {

  constructor(private connection: HttpClient) { }

  getAllAccesories(){
    return this.connection.get<SetAccesorio[]>(url);
  }

  public getCombinationSet(body: JSON, urlSpecification: string) {
    var finalUrl: string = url + urlSpecification;

    console.log("Se va a hacer la peticion a : "+finalUrl);
    console.log(body);
    return this.connection.post<SetAccesorio[]>(finalUrl, body);
    
  }
}

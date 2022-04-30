import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SetAccesorio } from './../model/accesories.model';
import { Set } from './../model/set.model';


const url: string = environment.base_url+"/equipos";

@Injectable({
  providedIn: 'root'
})
export class SetDataServiceService {

  constructor(private connection: HttpClient) { }

  public getAllSets() {
    return this.connection.get<Set[]>(url);
  }

  public getCombinationSet(body: JSON, urlSpecification: string) {
    var finalUrl: string = url + urlSpecification;
    return this.connection.post<Set[]>(finalUrl, body);

  }

  public getSetByName(name:string){
    let url2 = url + "/getSet/name";
    return this.connection.get<Set>(url2);
  }

  getAllAccesories(){
    return this.connection.get<SetAccesorio[]>("http://localhost:8888/accesorios");
  }
}
/*
{
  "attributes":[
      {
          "nombre":"attack"
      },
      {
          "nombre":"HP"
         
      },
       {
          "nombre":"avoid injury rate"
          
      }
  ],
  "attributesFilter":[
       {
         "nombreAtributo":"attack",
         "valor":50
      }
  ],
  "order":[

  ]

}*/
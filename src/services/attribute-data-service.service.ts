
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Attribute } from 'src/model/attribute.model';

const url: string = environment.base_url+"/atributos";

@Injectable({
  providedIn: 'root'
})
export class AttributeDataServiceService {

  constructor(private connection: HttpClient) { }

  public getAllAttributes() {
    return this.connection.get<Attribute[]>(url);
  }
}

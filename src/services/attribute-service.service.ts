import { AttributeDataServiceService } from 'src/services/attribute-data-service.service';
import { Injectable } from '@angular/core';
import { Attribute } from 'src/model/attribute.model';

@Injectable({
  providedIn: 'root'
})
export class AttributeServiceService {

  constructor(private attributeDataService:AttributeDataServiceService) { }

  public getAllAttributes() : Attribute[] {
    var attributes:Attribute[]=[];
    this.attributeDataService.getAllAttributes()
    .subscribe(response  => {
      response.forEach(attribute =>{
          attributes.push(new Attribute(attribute.nombre));
      });
    });
    return attributes;
  }
}

import { SetAccesorio } from 'src/model/accesories.model';

import { Set } from './../model/set.model';
import { Injectable } from '@angular/core';
import { SetDataServiceService } from './set-data-service.service';
import { Attribute } from 'src/model/attribute.model';
import { BonusAtributo } from 'src/model/listbonus.model';
import { CreateComboSet } from 'src/model/createcomboset.model';





@Injectable({
  providedIn: 'root'
})
export class SetServiceService {
  
  
  constructor(private dataService: SetDataServiceService) { 
    console.log("Servicio");
  }

  public getAllSets() : Set[] {
    var sets :Set[]=[];
    this.dataService.getAllSets()
     .subscribe( response  => {
        response.forEach(set =>{
            sets.push(new Set(set.nombre,set.partes,set.bonuses));
        });
     });

     return sets;
    
  }

  public createComboSet(attributes: Attribute[], attributesFilter: BonusAtributo[],order:Attribute[],urlSpecification:string,setFilter:string) : Set[] {
    var  comboSets: Set[] = [];
    var obj: CreateComboSet = new CreateComboSet(attributes, attributesFilter, order,setFilter);
    var body: JSON = JSON.parse(JSON.stringify(obj));
    this.dataService.getCombinationSet(body,urlSpecification).subscribe(response => {
      response.forEach(set => {
        comboSets.push(new Set(set.nombre, set.partes, set.bonuses));

      });
      console.log(comboSets);
    });
    return comboSets;
  }

  public crearPeticion(sorted:boolean,filtred:boolean,attributes: Attribute[], attributesFilter: BonusAtributo[],order:Attribute[],setFilter:string) : Set[]{
    var urlSpecification: string = "";
    urlSpecification+="/CombinacionesBonusTotal?"+"sorted="+sorted+"&filtred="+filtred;
    console.log(urlSpecification);
    return this.createComboSet(attributes,attributesFilter,order,urlSpecification,setFilter);
    
  }

  public getSetByName(name:string){
    return this.dataService.getSetByName(name);
  }

  public getAllAccesories(){
    var accesorios:SetAccesorio[]=[];
    this.dataService.getAllAccesories().subscribe(response =>{
          accesorios=Object.values(response);
    });
    return accesorios;
  }

}

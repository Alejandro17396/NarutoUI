import { AccesoriesDataServiceService } from './accesories-data-service.service';
import { Injectable } from '@angular/core';
import { SetAccesorio } from 'src/model/accesories.model';
import { Attribute } from 'src/model/attribute.model';
import { BonusAtributo } from 'src/model/listbonus.model';
import { CreateComboSetAccesorio } from 'src/model/createcombosetaccesories';
import { BonusAccesorioAtributo } from 'src/model/bonusaccesorieattribute.model';

@Injectable({
  providedIn: 'root'
})
export class AccesoriesServiceService {

  constructor(private accesorieDataService:AccesoriesDataServiceService) { }

  getAllAccesories():SetAccesorio[]{
    var setAccesories:SetAccesorio[]=[];
    this.accesorieDataService.getAllAccesories()
    .subscribe(response  => {
      response.forEach(set =>{
        
        var v:SetAccesorio= new SetAccesorio(set.nombre,set.partes,set.bonuses);
        setAccesories.push(new SetAccesorio(set.nombre,set.partes,set.bonuses));
      //  console.log("valores : "+v);
      });
    });
    /*this.accesorieDataService.getAllAccesories()
    .subscribe(response  => {
     setAccesories=Object.values(response);
    });*/
   //console.log("valores3 : "+setAccesories[0]);
  return setAccesories;
  }

  generateAccesoriesCombos(attributes: Attribute[], attributesFilter: BonusAccesorioAtributo[],order:Attribute[],urlSpecification:string,setFilter:string):SetAccesorio[]{
    var  comboSets: SetAccesorio[] = [];
    var obj: CreateComboSetAccesorio = new CreateComboSetAccesorio(attributes, attributesFilter, order,setFilter);
    var body: JSON = JSON.parse(JSON.stringify(obj));
    this.accesorieDataService.getCombinationSet(body,urlSpecification).subscribe(response => {
      response.forEach(set => {
        //comboSets.push(new SetAccesorio(set.nombre, set.partes, set.bonuses));
        comboSets.push(set);
      });
     // console.log(comboSets);
    });
    return comboSets;
  }


  public crearPeticion(sorted:boolean,filtred:boolean,attributes: Attribute[], attributesFilter: BonusAccesorioAtributo[],order:Attribute[],setFilter:string) : SetAccesorio[]{
    var urlSpecification: string = "";
    urlSpecification+="/CombinacionesBonusTotal?"+"sorted="+sorted+"&filtred="+filtred;
    console.log(urlSpecification);
    return this.generateAccesoriesCombos(attributes,attributesFilter,order,urlSpecification,setFilter);
    
  }
}

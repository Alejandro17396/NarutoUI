import { BonusAccesorioAtributo } from './../../model/bonusaccesorieattribute.model';
import { Attribute } from './../../model/attribute.model';
import { AccesoriesServiceService } from 'src/services/accesories-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SetAccesorio } from 'src/model/accesories.model';
import { AttributeServiceService } from 'src/services/attribute-service.service';
import { ParteAccesorio } from 'src/model/accesoriepart.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-accesories-component',
  templateUrl: './accesories-component.component.html',
  styleUrls: ['./accesories-component.component.css']
})
export class AccesoriesComponentComponent implements OnInit {


  accesorios:SetAccesorio[]=[];
  attributes:Attribute[]=[];
  attributesFilter:BonusAccesorioAtributo[]=[];
  attributesFilter2:BonusAccesorioAtributo[]=[];
  showSet:SetAccesorio= new SetAccesorio("",[],[]);
  showSetAux:SetAccesorio= new SetAccesorio("",[],[]);
  setFilter:string="";
  allAccesories:SetAccesorio[]=[];
  resetTableIndex:boolean=false;

  
  @ViewChild(MatPaginator) paginator: MatPaginator ;

  setPage(index: number) {
    this.paginator.pageIndex = index;
  }
  constructor(private accesoriesService: AccesoriesServiceService,private attributeService: AttributeServiceService) {

   }

  ngOnInit(): void {

    this.accesorios=this.accesoriesService.getAllAccesories();
    console.log(this.accesorios);
    this.attributes=this.attributeService.getAllAttributes();
    this.showSet=this.createSetAux();
    console.log(this.showSet);
    var seleccion:any= $("#setFilter").children("option:selected").val();
    this.setFilter=seleccion;
    this.allAccesories=this.accesoriesService.getAllAccesories();
  }

  
  pageSize=10;
  from:number=0;
  to:number=10;
  changePage(e:PageEvent){
    
      console.log(e.pageIndex);
      this.from=e.pageIndex*e.pageSize;
      this.to=this.from+e.pageSize;
    
  }

  public mostrarInfoParte(part:ParteAccesorio,set:SetAccesorio){



  }


  public ordenarPartesSet(){
      
    this.accesorios.forEach(set =>{
      var attAux:Attribute = new Attribute("");
      var aux:ParteAccesorio= new ParteAccesorio("","",attAux,7,"");
      var aux2:ParteAccesorio[]=[];
      for(var i=0;i<8;i++){
        aux2.push(aux);
      }
      set.partes.forEach(part=>
        {
          if(part.nombreSet.indexOf("headband")!=-1){
            aux2[0]=part;
          }
          if(part.nombreSet.indexOf("necklace")!=-1){
            aux2[1]=part;
          }
          if(part.nombreSet.indexOf("pendant")!=-1){
            aux2[2]=part;
          }
          if(part.nombreSet.indexOf("amulet")!=-1){
            aux2[3]=part;
          }
          if(part.nombreSet.indexOf("bangle")!=-1){
            aux2[4]=part;
          }
          if(part.nombreSet.indexOf("bracelet")!=-1){
            aux2[5]=part;
          }
          if(part.nombreSet.indexOf("gloves")!=-1){
            aux2[6]=part;
          }
          if(part.nombreSet.indexOf("ring")!=-1){
            aux2[7]=part;
          }
        });
        set.partes=aux2;
        console.log(aux2.length);
    });
  }

  public addBonus() {
    let attribute: string = "";
    attribute = $(".att").val() + "";
    let value: number = Number($("#attValue").val());
    let newBonus: BonusAccesorioAtributo = new BonusAccesorioAtributo("","",attribute,value);
    if (this.existsAttribute(newBonus) && this.contains(newBonus) && this.isSpecialAttribute(newBonus)) {
      this.attributesFilter.push(newBonus.clone());
      if (newBonus.nombreAtributo.length >= 40) {
        newBonus.nombreAtributo = newBonus.nombreAtributo.substring(0, 40) + "...";
      }
      this.attributesFilter2.push(newBonus);
    }
    console.log(this.existsAttribute(newBonus));
    console.log(this.contains(newBonus));
    console.log(this.isSpecialAttribute(newBonus));
    console.log(newBonus);
  }

  isSpecialAttribute(newBonus: BonusAccesorioAtributo) {
    if ((newBonus.nombreAtributo.indexOf("after") != -1 || newBonus.nombreAtributo.indexOf("when") != -1 || newBonus.nombreAtributo.indexOf("every") != -1)
      && newBonus.nombreAtributo != "damage after attack") {
      newBonus.valor = 0;
      return true;
    }
    return true;
  }

  contains(newBonus: BonusAccesorioAtributo) {
    let condition: boolean = true;
    this.attributesFilter2.forEach(att => {
      console.log("nuevo "+newBonus.nombreAtributo);
      console.log(att.nombreAtributo);
      if (newBonus.nombreAtributo === att.nombreAtributo) {
        att.valor = newBonus.valor;
        condition = false;
      }
    });
    this.attributesFilter.forEach(att => {
      console.log("nuevo "+newBonus.nombreAtributo);
      console.log(att.nombreAtributo);
      if (newBonus.nombreAtributo === att.nombreAtributo) {
        att.valor = newBonus.valor;
      }
    });
    return condition;
  }

  existsAttribute(newBonus: BonusAccesorioAtributo): boolean {
    let condition: boolean = false;
    this.attributes.forEach(att => {
     
      if (newBonus.nombreAtributo === att.nombre) {
        condition = true;
      }
    });
    return condition;
  }

  deleteAttribute(i: any) {
    console.log("he borrado en el back "+this.attributesFilter.splice(i, 1)[0].nombreAtributo);
    console.log("he borrado en el front "+this.attributesFilter2.splice(i, 1)[0].nombreAtributo);
  }
  upArrow(i: any) {
    if (i != 0) {
      let aux = this.attributesFilter2[i - 1];
      this.attributesFilter2[i - 1] = this.attributesFilter2[i];
      this.attributesFilter[i - 1] = this.attributesFilter2[i];
      this.attributesFilter2[i] = aux;
      this.attributesFilter[i] = aux;
    }

  }
  downArrow(i: any) {
    let tam = this.attributesFilter2.length - 1;
    if (i != tam) {
      let aux = this.attributesFilter2[i + 1];
      this.attributesFilter2[i + 1] = this.attributesFilter2[i];
      this.attributesFilter[i + 1] = this.attributesFilter2[i];
      this.attributesFilter2[i] = aux;
      this.attributesFilter[i] = aux;
    }
  }
  changeShowSet(from:number,i: number) {

    this.showSet = this.accesorios[i+from];
    this.showSetAux=this.showSet;
  }

  onBlurSet(from:number,i:number){
    console.log("quite el foco de "+(i+from));
    this.showSet=this.showSetAux;
  }

  onFocusSet(from:number,i:number){
    console.log("puse el foco el foco en "+(i+from));
    this.showSetAux=this.showSet;
    this.showSet=this.accesorios[i+from];
  }

  generateNewCombos(){
    var attributes: Attribute[]=[] ;
    var attributesFilter: BonusAccesorioAtributo[] = [];
    let order:Attribute[]=[];
     this.attributesFilter2.forEach(att=>{
        attributes.push(new Attribute(att.nombreAtributo));
        attributesFilter.push(att);
     });
     let filtred=$("#filter").prop('checked');
     let sorted=$("#sorted").prop('checked');
     this.accesorios=[];
     this.accesorios = this.accesoriesService.crearPeticion(sorted, filtred, attributes, attributesFilter, order,this.setFilter);
    this.paginator.pageIndex = 0;
  }

  selectOnChange(){

      var seleccion:any= $("#setFilter").children("option:selected").val();
      this.setFilter=seleccion;
  }

  mostrar(){
    console.log(this.accesorios);
  }

  createSetAux(){
   
      let url = {
        "nombre": "amegakure accessories",
        "partes": [
            {
                "nombre": "amegakure amulet",
                "nombreSet": "amegakure accessories",
                "atributo": {
                    "nombre": "chakra"
                },
                "valor": 54000,
                "tipo": "chakra"
            },
            {
                "nombre": "amegakure bangle",
                "nombreSet": "amegakure accessories",
                "atributo": {
                    "nombre": "agility"
                },
                "valor": 54000,
                "tipo": "agility"
            },
            {
                "nombre": "amegakure bracelet",
                "nombreSet": "amegakure accessories",
                "atributo": {
                    "nombre": "agility"
                },
                "valor": 54000,
                "tipo": "agility"
            },
            {
                "nombre": "amegakure gloves",
                "nombreSet": "amegakure accessories",
                "atributo": {
                    "nombre": "power"
                },
                "valor": 540000,
                "tipo": "power"
            },
            {
                "nombre": "amegakure headband",
                "nombreSet": "amegakure accessories",
                "atributo": {
                    "nombre": "force"
                },
                "valor": 54000,
                "tipo": "force"
            },
            {
                "nombre": "amegakure necklace",
                "nombreSet": "amegakure accessories",
                "atributo": {
                    "nombre": "force"
                },
                "valor": 54000,
                "tipo": "force"
            },
            {
                "nombre": "amegakure pendant",
                "nombreSet": "amegakure accessories",
                "atributo": {
                    "nombre": "chakra"
                },
                "valor": 54000,
                "tipo": "chakra"
            },
            {
                "nombre": "amegakure ring",
                "nombreSet": "amegakure accessories",
                "atributo": {
                    "nombre": "power"
                },
                "valor": 540000,
                "tipo": "power"
            }
        ],
        "bonuses": [
            {
                "tipo": "agility",
                "nombreAccesorioSet": "amegakure accessories",
                "bonuses": [
                    {
                        "tipoBonus": "agility",
                        "nombreSet": "amegakure accessories",
                        "nombreAtributo": "after be attacked, there has 30% chance to disperse ally Assaulter and Vanguard debuff",
                        "valor": 1
                    },
                    {
                        "tipoBonus": "agility",
                        "nombreSet": "amegakure accessories",
                        "nombreAtributo": "physical defense",
                        "valor": 20
                    },
                    {
                        "tipoBonus": "agility",
                        "nombreSet": "amegakure accessories",
                        "nombreAtributo": "strategy defense",
                        "valor": 20
                    }
                ]
            },
            {
                "tipo": "chakra",
                "nombreAccesorioSet": "amegakure accessories",
                "bonuses": [
                    {
                        "tipoBonus": "chakra",
                        "nombreSet": "amegakure accessories",
                        "nombreAtributo": "after be attacked, recover ally Support hp rate by 30%",
                        "valor": 1
                    },
                    {
                        "tipoBonus": "chakra",
                        "nombreSet": "amegakure accessories",
                        "nombreAtributo": "avoid injury rate",
                        "valor": 20
                    }
                ]
            },
            {
                "tipo": "force",
                "nombreAccesorioSet": "amegakure accessories",
                "bonuses": [
                    {
                        "tipoBonus": "force",
                        "nombreSet": "amegakure accessories",
                        "nombreAtributo": "after be attacked, there has 30% chance to disperse ally Supports debuff",
                        "valor": 1
                    },
                    {
                        "tipoBonus": "force",
                        "nombreSet": "amegakure accessories",
                        "nombreAtributo": "physical defense",
                        "valor": 20
                    },
                    {
                        "tipoBonus": "force",
                        "nombreSet": "amegakure accessories",
                        "nombreAtributo": "strategy defense",
                        "valor": 20
                    }
                ]
            },
            {
                "tipo": "full set bonus",
                "nombreAccesorioSet": "amegakure accessories",
                "bonuses": [
                    {
                        "tipoBonus": "full set bonus",
                        "nombreSet": "amegakure accessories",
                        "nombreAtributo": "after be attack, there has 40% chance to make a random enemy to enter weak state for 2 round",
                        "valor": 1
                    },
                    {
                        "tipoBonus": "full set bonus",
                        "nombreSet": "amegakure accessories",
                        "nombreAtributo": "weaken enemy attack",
                        "valor": 20
                    }
                ]
            },
            {
                "tipo": "power",
                "nombreAccesorioSet": "amegakure accessories",
                "bonuses": [
                    {
                        "tipoBonus": "power",
                        "nombreSet": "amegakure accessories",
                        "nombreAtributo": "HP",
                        "valor": 25
                    },
                    {
                        "tipoBonus": "power",
                        "nombreSet": "amegakure accessories",
                        "nombreAtributo": "recover ally Assaulter and Vanguard hp rate by 30%",
                        "valor": 20
                    }
                ]
            }
        ]
    };
  
      return Object.assign(new SetAccesorio("", [], []), url);
    }

}


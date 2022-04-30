import { SetAccesorio } from 'src/model/accesories.model';
import { AttributeServiceService } from './../../services/attribute-service.service';
import { Component, OnInit } from '@angular/core';
import { Attribute } from 'src/model/attribute.model';
import { BonusAtributo } from 'src/model/listbonus.model';
import { Bonus } from 'src/model/bonus.model';
import { SetServiceService } from 'src/services/set-service.service';
import { Set } from 'src/model/set.model';
import * as $ from "jquery";
import { AccesoriesServiceService } from 'src/services/accesories-service.service';

@Component({
  selector: 'app-set-component',
  templateUrl: './set-component.component.html',
  styleUrls: ['./set-component.component.css']
})
export class SetComponentComponent implements OnInit {

  sets: Set[] = [];
  attributes: Attribute[] = [];
  allSets: Set[] = [];
  attributesFilter: BonusAtributo[] = [];
  attributesFilter2: BonusAtributo[] = [];
  showSet: Set = new Set("prueba", [], []);
  showSetAux: Set = new Set("prueba", [], []);
  myImage = "assets/images/ejemplos.jpg";
  setFilter:string="";
  accesorios:SetAccesorio[]=[];
  constructor(private setService: SetServiceService, private attributesService: AttributeServiceService,private prueba:AccesoriesServiceService) {
  }

  ngOnInit(): void {
   /* this.setService.getAllSets();
    var sorted: boolean = true;
    var filtred: boolean = false;
    var attributes: Attribute[] = [new Attribute("attack"), new Attribute("HP"), new Attribute("avoid injury rate"), new Attribute("damage rate")];
    var attributesFilter: BonusAtributo[] = [new BonusAtributo("attack", 50)];
    var order: Attribute[] = [];
    this.sets = this.setService.crearPeticion(sorted, filtred, attributes, attributesFilter, order);*/
    this.attributes = this.attributesService.getAllAttributes();
    this.sets = this.setService.getAllSets();
    this.allSets = this.sets;
    this.showSet = this.createSetAux();
    var seleccion:any= $("#setFilter").children("option:selected").val();
    this.setFilter=seleccion;
    this.accesorios=this.prueba.getAllAccesories();
    console.log(this.accesorios);
  }

  generateNewCombos(){
    var attributes: Attribute[]=[] ;
    var attributesFilter: BonusAtributo[] = [];
    let order:Attribute[]=[];
     this.attributesFilter2.forEach(att=>{
        attributes.push(new Attribute(att.nombreAtributo));
        attributesFilter.push(att);
     });
     let filtred=$("#filter").prop('checked');
     let sorted=$("#sorted").prop('checked');
     
     attributesFilter.forEach(x=>{
        console.log("El bonus es "+ x.nombreAtributo+"  : "+x.valor);
     });
     this.sets = this.setService.crearPeticion(sorted, filtred, attributes, attributesFilter, order,this.setFilter);
  }

  selectOnChange(){

      var seleccion:any= $("#setFilter").children("option:selected").val();
      this.setFilter=seleccion;
  }
  public addBonus() {
    let attribute: string = "";
    attribute = $(".att").val() + "";
    let value: number = Number($("#attValue").val());
    let newBonus: BonusAtributo = new BonusAtributo(attribute, value);
    if (this.existsAttribute(newBonus) && this.contains(newBonus) && this.isSpecialAttribute(newBonus)) {
      this.attributesFilter.push(newBonus.clone());
      if (newBonus.nombreAtributo.length >= 40) {
       // newBonus.nombreAtributo = newBonus.nombreAtributo.substring(0, 40) + "...";
      }
      this.attributesFilter2.push(newBonus);
  
    }

  }

  isSpecialAttribute(newBonus: BonusAtributo) {
    if ((newBonus.nombreAtributo.indexOf("after") != -1 || newBonus.nombreAtributo.indexOf("when") != -1 || newBonus.nombreAtributo.indexOf("every") != -1)
      && newBonus.nombreAtributo != "damage after attack") {
      newBonus.valor = 0;
      return true;
    }
    return true;
  }

  contains(newBonus: BonusAtributo) {
    let condition: boolean = true;
    this.attributesFilter2.forEach(att => {
      if (newBonus.nombreAtributo === att.nombreAtributo) {
        att.valor = newBonus.valor;
        condition = false;
      }
    });
    return condition;
  }

  existsAttribute(newBonus: BonusAtributo): boolean {
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

  changeShowSet(i: number) {

    this.showSet = this.sets[i];
    this.showSetAux=this.showSet;
  }

  onBlurSet(i:number){
    console.log("quite el foco de "+i);
    this.showSet=this.showSetAux;
  }

  onFocusSet(i:number){
    console.log("puse el foco el foco en "+i);
    this.showSetAux=this.showSet;
    this.showSet=this.sets[i];
  }
  createSetAux() {
    let url = {
      "nombre": "amegakure set",
      "partes": [
        {
          "nombre": "amegakure armor",
          "atributo": {
            "nombre": "physical defense"
          },
          "valor": 59000
        },
        {
          "nombre": "amegakure belt",
          "atributo": {
            "nombre": "power"
          },
          "valor": 590000
        },
        {
          "nombre": "amegakure boots",
          "atributo": {
            "nombre": "speed"
          },
          "valor": 59000
        },
        {
          "nombre": "amegakure coat",
          "atributo": {
            "nombre": "strategy defense"
          },
          "valor": 59000
        },
        {
          "nombre": "amegakure headband",
          "atributo": {
            "nombre": "physical defense"
          },
          "valor": 59000
        },
        {
          "nombre": "amegakure kunai",
          "atributo": {
            "nombre": "physical attack"
          },
          "valor": 59000
        },
        {
          "nombre": "amegakure scroll",
          "atributo": {
            "nombre": "strategy attack"
          },
          "valor": 59000
        },
        {
          "nombre": "amegakure shuriken",
          "atributo": {
            "nombre": "physical attack"
          },
          "valor": 59000
        }
      ],
      "bonuses": [
        {
          "id": 2,
          "equipo": "amegakure set",
          "nombre": "2 effect : ",
          "listaBonus": [
            {
              "nombreAtributo": "attack",
              "valor": 25
            },
            {
              "nombreAtributo": "damage rate",
              "valor": 20
            },
            {
              "nombreAtributo": "force",
              "valor": 10000
            },
            {
              "nombreAtributo": "punch rate",
              "valor": 30
            }
          ]
        },
        {
          "id": 4,
          "equipo": "amegakure set",
          "nombre": "4 effect : ",
          "listaBonus": [
            {
              "nombreAtributo": "after release skill has 80% chance to make 2 random enemies enter frozen for 2 rounds",
              "valor": 0
            },
            {
              "nombreAtributo": "damage rate",
              "valor": 20
            },
            {
              "nombreAtributo": "increase the success rate of control skills by",
              "valor": 40
            }
          ]
        },
        {
          "id": 6,
          "equipo": "amegakure set",
          "nombre": "6 effect : ",
          "listaBonus": [
            {
              "nombreAtributo": "after release skill dispel 2 random allies debuff",
              "valor": 0
            },
            {
              "nombreAtributo": "agility",
              "valor": 50000
            },
            {
              "nombreAtributo": "weaken enemy attack",
              "valor": 30
            }
          ]
        }
      ]
    };

    return Object.assign(new Set("", [], []), url);
  }
}

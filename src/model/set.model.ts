import { Bonus } from "./bonus.model";
import { Part } from "./parte.model";

export class Set{

    nombre:  string ="";
    partes:  Part[]=[];
    bonuses: Bonus[]=[];

    constructor(nombre:string,partes:Part[],bonuses:Bonus[]){
        this.nombre=nombre;
        this.partes=partes;
        this.bonuses=bonuses;
    }

    /*constructor(){

    }*/
    public toString(){
        return "holaaaaaaaaaaaaaaaaaaaa";
    }

    
    


}
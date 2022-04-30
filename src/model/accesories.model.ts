
import { ParteAccesorio } from "./accesoriepart.model";
import { BonusAccesorio } from "./bonusaccesorie.model";

export class SetAccesorio {
    nombre:  string;
    partes:  ParteAccesorio[];
    bonuses: BonusAccesorio[];

    constructor(nombre:string,partes:ParteAccesorio[],bonuses:BonusAccesorio[]){
        this.nombre=nombre;
        this.partes=partes;
        this.bonuses=bonuses;
    }
}
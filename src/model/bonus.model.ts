import { BonusAtributo } from "./listbonus.model";

export class Bonus {
    id: number;
    equipo: string;
    nombre:     string;
    listaBonus: BonusAtributo[];

    constructor(id:number,equipo:string,nombre:string,listaBonus:BonusAtributo[]){
        this.id=id;
        this.equipo=equipo;
        this.nombre=nombre;
        this.listaBonus=listaBonus;
    }

}
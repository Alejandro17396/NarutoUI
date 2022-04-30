import { BonusAccesorioAtributo } from "./bonusaccesorieattribute.model";

export class BonusAccesorio{
    tipo:string;
    nombreAccesorioSet: string;
    bonuses:BonusAccesorioAtributo[];

    constructor(tipo:string,nombreAccesorioSet:string,bonuses:BonusAccesorioAtributo[]){
        this.tipo=tipo;
        this.nombreAccesorioSet=nombreAccesorioSet;
        this.bonuses=bonuses;
    }
}
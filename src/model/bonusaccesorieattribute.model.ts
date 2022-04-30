export class BonusAccesorioAtributo{

    tipoBonus:string;
    nombreSet:string;
    nombreAtributo:string;
    valor:number;

    constructor(tipoBonus:string,nombreSet:string,nombreAtributo:string,valor:number){
        this.tipoBonus=tipoBonus;
        this.nombreSet=nombreSet;
        this.nombreAtributo=nombreAtributo;
        this.valor=valor;
    }
    
    clone(){
        return new BonusAccesorioAtributo(this.tipoBonus,this.nombreSet,this.nombreAtributo,this.valor);
    }
}
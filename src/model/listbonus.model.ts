export class BonusAtributo {
    nombreAtributo: string;
    valor:          number;

    constructor(nombreAtributo: string,valor:number){
        this.nombreAtributo=nombreAtributo;
        this.valor=valor;
    }


    public clone():BonusAtributo{
        return new BonusAtributo(this.nombreAtributo,this.valor);
    }
}
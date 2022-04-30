import { Attribute } from "./attribute.model";

export class ParteAccesorio{
    nombre:    string;
    nombreSet: string;
    atributo:  Attribute;
    valor:     number;
    tipo:      string;

    constructor(nombre:string,nombreSet:string,atributo:Attribute,valor:number,tipo:string){
        this.nombre=nombre;
        this.nombreSet=nombreSet;
        this.atributo=atributo;
        this.valor=valor;
        this.tipo=tipo;

    }
}
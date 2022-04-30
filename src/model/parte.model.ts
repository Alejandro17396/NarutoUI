import { Attribute } from './attribute.model';
export class Part {

    constructor(nombre: string, valor: number, attribute: Attribute) {
        this.nombre = nombre;
        this.valor = valor;
        this.attribute = attribute;
    }
    nombre: string = "";
    valor: number = 0;
    attribute: Attribute = new Attribute("");


}
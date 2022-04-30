import { BonusAccesorioAtributo } from './bonusaccesorieattribute.model';
import { Attribute } from './attribute.model';
export class CreateComboSetAccesorio{

    attributes :Attribute[]=[];
    attributesFilter:BonusAccesorioAtributo[]=[];
    order:Attribute[]=[];
    setFilter:string="";

    constructor(attributes :Attribute[],attributesFilter:BonusAccesorioAtributo[],order:Attribute[],setFilter:string ){
        this.attributes=attributes;
        this.attributesFilter=attributesFilter;
        this.order=order;
        this.setFilter=setFilter;
    }
}
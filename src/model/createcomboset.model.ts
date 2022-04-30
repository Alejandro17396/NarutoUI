import { BonusAtributo } from './listbonus.model';
import { Attribute } from "./attribute.model";

export class CreateComboSet{
    attributes:Attribute[];
    attributesFilter:BonusAtributo[];
    order:Attribute[];
    setName:string;
    constructor(attributes:Attribute[],attributesFilter:BonusAtributo[],order:Attribute[],setName:string){
        this.attributes=attributes;
        this.attributesFilter=attributesFilter;
        this.order=order;
        this.setName=setName;
    }
}
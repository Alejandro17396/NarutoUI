export interface SetI {
    nombre:  string;
    partes:  PartI[];
    bonuses: BonusI[];
}

export interface ListaBonusI {
    nombreAtributo: string;
    valor:          number;
}

export interface BonusI {
    id:         number;
    equipo:     string;
    nombre:     string;
    listaBonus: ListaBonusI[];
}

export interface PartI {
    nombre:   string;
    atributo: AttributeI;
    valor:    number;
}

export interface AttributeI {
    nombre: string;
}
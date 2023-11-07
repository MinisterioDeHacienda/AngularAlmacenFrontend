import {EnumType} from 'typescript'

export interface ClienteI {
    id?: number;
    nombreCliente: string;
    direccionCliente: string;
    telefonoCliente: string;
    correoCliente: string;
    passwordCliente: string;
    estadoCliente: EnumType;
}

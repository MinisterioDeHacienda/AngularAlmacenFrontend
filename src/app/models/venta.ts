export interface VentaI {
    id?:number;
    fechaVenta: string;
    subtotal: number;
    ciudadExp: String;
    impuestos: number;
    descuentos: number;
    total: number;
    ClienteId: number;
}
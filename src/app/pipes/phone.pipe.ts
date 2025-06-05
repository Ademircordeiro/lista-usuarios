import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'phone'
})
export class PhonePipe implements PipeTransform {
    transform(value: string): string {
        const INVALID_PHONE = !value || value.length < 10 || value.length > 11 || undefined;
        const CELLPHONE = value.length >= 10;
        const PHONE = value.length === 10;

        if (INVALID_PHONE) {
            return '-';
        }
        if (CELLPHONE) {
            if (value.length === 10) { //Celulares de 10 dígitos
                return `(${value.substring(0, 2)}) ${value.substring(2, 6)}-${value.substring(6, 10)}`;
            } else { // Celulares de 11 dígitos
                return `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`;
            }
        }
        if (PHONE) {
            return `(${value.substring(0, 2)}) ${value.substring(2, 6)}-${value.substring(6, 10)}`;
        }
        throw new Error("Telefone inválido ou não definido.");
    }

}
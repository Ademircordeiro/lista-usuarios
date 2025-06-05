import { Pipe, PipeTransform } from "@angular/core";
import { IEndereco } from "../interfaces/user/address.interface";

@Pipe({
    name: 'address'
})
export class AddressPipe implements PipeTransform {
    transform(value: IEndereco): string {
        const INVALID_ADDRESS =
            !value ||
            !value.rua ||
            !value.estado ||
            !value.cidade
            ;

        if (!INVALID_ADDRESS) {
            return `${value.rua}, ${value.numero} - ${value.cidade}-${value.estado}
            `;
        } else {
            return '-'
        }
    }
}
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'status'
})
export class StatusPipe implements PipeTransform {
    transform(value: boolean | undefined | null): string {
        const INVALID_STATUS = value === undefined || value === null;

        if (!INVALID_STATUS) {
            return value ? 'Ativo' : 'Inativo';
        } else {
            return '-';
        }
    }
}
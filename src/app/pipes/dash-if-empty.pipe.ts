import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'dashIfEmpty'
})
export class DashIfEmpty implements PipeTransform {
    transform(value: any): string {
        const IS_EMPTY = value === undefined || value === '' || value === null;

        if (IS_EMPTY) {
            return '-';
        }
        return value;
    }
}
import { NgModule } from "@angular/core";
import { PhonePipe } from "./phone.pipe";
import { AddressPipe } from "./address.pipe";
import { StatusPipe } from "./status.pipe";
import { DashIfEmpty } from "./dash-if-empty.pipe";

@NgModule({
    declarations: [
        PhonePipe,
        AddressPipe,
        StatusPipe,
        DashIfEmpty

    ],
    exports: [
        PhonePipe,
        AddressPipe,
        StatusPipe,
        DashIfEmpty

    ],
})
export class pipesModule { }
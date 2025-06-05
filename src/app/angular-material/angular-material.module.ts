import { NgModule } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from "@angular/material/core";
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [],
    imports: [MatListModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatSelectModule, MatButtonModule, MatTableModule, MatCardModule],
    exports: [MatListModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatSelectModule, MatButtonModule, MatTableModule, MatCardModule],
    providers: [provideNativeDateAdapter()],
})
export class AngularMaterialModule { }
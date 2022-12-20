import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
  ],
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    CommonModule
  ]
})
export class MaterialModule {
}

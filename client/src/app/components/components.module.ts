import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TitleCardComponent} from "./title-card/title-card.component";
import {MaterialModule} from "../material/material.module";
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { GlobalRankComponent } from './sections/global-rank/global-rank.component';



@NgModule({
  declarations: [
    TitleCardComponent,
    BarChartComponent,
    GlobalRankComponent,
  ],
  exports: [
    TitleCardComponent,
    BarChartComponent,
    GlobalRankComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ]
})
export class ComponentsModule { }

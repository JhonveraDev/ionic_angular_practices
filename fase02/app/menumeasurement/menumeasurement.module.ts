import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenumeasurementPageRoutingModule } from './menumeasurement-routing.module';

import { MenumeasurementPage } from './menumeasurement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenumeasurementPageRoutingModule
  ],
  declarations: [MenumeasurementPage]
})
export class MenumeasurementPageModule {}

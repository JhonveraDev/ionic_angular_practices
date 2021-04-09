import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvancePageRoutingModule } from './advance-routing.module';

import { AdvancePage } from './advance.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvancePageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdvancePage]
})
export class AdvancePageModule {}

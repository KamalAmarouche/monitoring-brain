import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MonitoringBrainSharedModule } from 'app/shared/shared.module';

import { ConfigurationComponent } from './configuration.component';

import { configurationRoute } from './configuration.route';

@NgModule({
  imports: [MonitoringBrainSharedModule, RouterModule.forChild([configurationRoute])],
  declarations: [ConfigurationComponent],
})
export class ConfigurationModule {}

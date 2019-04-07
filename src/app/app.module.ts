import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
// ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
// reducers
import { temperatureReducer } from './store/reducers/temperature.reducer';
// effects
import { TemperatureEffects } from './store/effects/temperature.effects';
// components
import { ControlComponent } from './components/control/control.component';
import { TemperatureComponent } from './components/temperature/temperature.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlComponent,
    TemperatureComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ temperature: temperatureReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([TemperatureEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

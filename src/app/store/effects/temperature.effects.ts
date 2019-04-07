import { Injectable } from '@angular/core';
// ngrx
import { Actions, Effect, ofType } from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {TemperatureActionTypes} from '../actions/temperature.actions';
import {Increment, Decrement} from '../actions/temperature.actions';
// rxjs
import {tap} from 'rxjs/operators';
// models
import {Temperature} from '../../models/temperature.model';


@Injectable()
export class TemperatureEffects {

    @Effect({ dispatch: false })
    changeTemperature$ = this.actions$
        .pipe(
            ofType(TemperatureActionTypes.Change),
            tap(() => {

                this.store.dispatch(new Increment());
                this.store.dispatch(new Decrement());
                this.store.dispatch(new Decrement());
            }));

    constructor(
        private actions$: Actions,
        private store: Store<{ temperature: Temperature }>
    ) {}
}

import { Action } from '@ngrx/store';

export enum TemperatureActionTypes {
    Change =    '[Temperature] Change',
    Increment = '[Temperature] Increment',
    Decrement = '[Temperature] Decrement',
    Reset =     '[Temperature] Reset',
}

export class Change implements Action {
    readonly type = TemperatureActionTypes.Change;
}

export class Increment implements Action {
    readonly type = TemperatureActionTypes.Increment;
}

export class Decrement implements Action {
    readonly type = TemperatureActionTypes.Decrement;
}

export class Reset implements Action {
    readonly type = TemperatureActionTypes.Reset;
}

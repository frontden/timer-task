import { Action } from '@ngrx/store';
import { TemperatureActionTypes } from '../actions/temperature.actions';
import { Temperature } from '../../models/temperature.model';

export const initialState: Temperature = {
    minskTemperature: -5,
    londonTemperature: 10
};

export function temperatureReducer(state = initialState, action: Action) {
    switch (action.type) {

        case TemperatureActionTypes.Change:
            return state;

        case TemperatureActionTypes.Increment:
            state.minskTemperature++;
            return {minskTemperature: state.minskTemperature, londonTemperature: state.londonTemperature};

        case TemperatureActionTypes.Decrement:
            state.londonTemperature--;
            return {minskTemperature: state.minskTemperature, londonTemperature: state.londonTemperature};

        case TemperatureActionTypes.Reset:
            state.minskTemperature = -5;
            state.londonTemperature = 10;
            return {minskTemperature: state.minskTemperature, londonTemperature: state.londonTemperature};

        default:
            return state;
    }
}

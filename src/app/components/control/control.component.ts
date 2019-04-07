import { Component, OnInit } from '@angular/core';
// models
import {Temperature} from '../../models/temperature.model';
// ngrx
import { Store, select } from '@ngrx/store';
import {Change, Reset} from '../../store/actions/temperature.actions';
// rxjs
import {takeWhile, tap} from 'rxjs/operators';
import {timer} from 'rxjs';

@Component({
    selector: 'app-control',
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

    temperature: Temperature = {} as Temperature;

    isTimerRunning = false;

    constructor(private store: Store<{ temperature: Temperature }>) {

        store.pipe(select('temperature')).subscribe(
            (temperature: Temperature) => {

                    this.temperature = temperature;
                 });
    }

    ngOnInit() {
    }

    start() {

        if (!this.isTimerRunning) {

            this.isTimerRunning = true;

            timer(0, 1000).pipe(
                takeWhile(() => this.isTimerRunning),
                tap(() => this.store.dispatch(new Change()))
            ).subscribe();
        }
    }

    stop() {

        this.isTimerRunning = false;
    }

    reset() {

        this.isTimerRunning = false;
        this.store.dispatch((new Reset()));
    }

}

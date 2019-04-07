import {Component, Input, OnInit} from '@angular/core';
// models
import {Temperature} from '../../models/temperature.model';

@Component({
    selector: 'app-temperature',
    templateUrl: './temperature.component.html',
    styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

    @Input() temperature: Temperature;

    constructor() { }

    ngOnInit() {
    }

}

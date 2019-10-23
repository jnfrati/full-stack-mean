import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SensorEvent } from '../sensor-event';
import { SensorEventService } from '../sensor-event.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { SensorService } from '../sensor.service';
import { Sensor } from '../sensor';

@Component({
  selector: 'app-sensors-events',
  templateUrl: './sensors-events.component.html',
  styleUrls: ['./sensors-events.component.css']
})
export class SensorsEventsComponent implements OnInit{
  @ViewChild('rightSideBar', {static: false}) rightSideBar: MatSidenav;

  sensor: Sensor;
  newEvent:SensorEvent;
  events: Array<SensorEvent>;
  constructor(
    private sensorService: SensorService,
    private sensorEventService: SensorEventService,
    private route: ActivatedRoute,
  ){
    
  }

  ngOnInit(){
    this.sensorService.getSensor(this.route.snapshot.params.id).subscribe( (data:Sensor) => {
        this.sensor = data;
        this.newEvent = new SensorEvent(this.sensor.minValue, new Date(), this.sensor._id)
        console.log(this.sensor)
      })
    this.sensorEventService.getEvents().subscribe((events:Array<SensorEvent>) => {
      this.events = events
    })
  }
  onSubmit(){

  }
}

import { Component, ViewChild, OnInit} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {Sensor} from '../sensor'
import {SensorService} from '../sensor.service'
@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css'],
})
export class SensorsComponent implements OnInit{
  @ViewChild('rightSideBar', {static: false}) rightSideBar: MatSidenav;
  sensors: Array<Sensor> = [];
  loading: Boolean;
  displayedColumns: Array<String> = ['name', 'status','latitude', 'longitude', 'min-value', 'max-value'];
  constructor(
    private sensorService: SensorService
  ){
    
  }

  ngOnInit(){
    this.sensorService.getSensors()
    .subscribe(sensors => this.sensors = sensors)
  }
  refreshData(){
    this.loading= true;
    this.rightSideBar.close();
    this.sensorService.getSensors()
    .subscribe(sensors => {
      this.sensors = sensors;
      this.loading= false;
    })
  }

}

import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Sensor } from '../sensor';
import { FormGroup, FormBuilder, FormGroupDirective } from '@angular/forms';
import { SensorService } from '../sensor.service';


@Component({
  selector: 'app-sensor-form',
  templateUrl: './sensor-form.component.html',
  styleUrls: ['./sensor-form.component.css']
})
export class SensorFormComponent {

  @ViewChild(FormGroupDirective,{static: false}) formGroupDirective: FormGroupDirective;
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() create: EventEmitter<any> = new EventEmitter();
  newSensor: FormGroup;
  loading: Boolean;
  constructor(
    fb: FormBuilder,
    private sensorService: SensorService
    
    ) {
    this.newSensor = fb.group({
      name: fb.control(''),
      lat: fb.control(null),
      lng: fb.control(null),
      active: fb.control(false),
      minValue: fb.control(null),
      maxValue: fb.control(null)
    });
  }

  onSubmit(){
    const sensor: Sensor = new Sensor(
      this.newSensor.value.name,
      {
        lat: this.newSensor.value.lat,
        lng: this.newSensor.value.lng,
      },
      this.newSensor.value.minValue,
      this.newSensor.value.maxValue,
      this.newSensor.value.active
    )

    console.log(sensor)
    this.loading = true;
    this.sensorService.createSensor(sensor)
    .subscribe(data=>{
      this.loading = false;
      this.formGroupDirective.resetForm()
      this.create.emit();
    })

    //
  }

  cancelForm(e){
    e.preventDefault();
    this.newSensor.reset()
    this.cancel.emit();
  }
}

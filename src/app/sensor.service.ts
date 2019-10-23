import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Sensor } from './sensor';
@Injectable({
  providedIn: 'root'
})
export class SensorService {
  

  constructor(
    private http: HttpClient
  ) { }

  getSensors(){
    return this.http.get<Array<any>>('http://localhost:3000/sensors')
    .pipe(
      map(data=>data)
    )
  }

  createSensor(newSensor: Sensor){
    return this.http.post('http://localhost:3000/sensors', newSensor)
    .pipe(
      map(data=> data)
    )
  }

  getSensor(sensorId: string): any {
    return this.http.get<Sensor>(`http://localhost:3000/sensors/${sensorId}`)
    .pipe(
      map(data=>data)
    )
  }
}

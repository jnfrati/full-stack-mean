import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {map, tap} from 'rxjs/operators'
import { SensorEvent } from './sensor-event';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorEventService {
  constructor(private socket: Socket,private http: HttpClient) { }
 
  newEvent(event: SensorEvent){
      this.http.post('http://localhost:3000/events', event)
      .pipe(
        tap(success=> {console.log(success)}),
        tap(error => console.log(error))
      )
  }
   getEvents() {
      return this.socket
          .fromEvent("events")
          .pipe(map(data=>data))
  }
}

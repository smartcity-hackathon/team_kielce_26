import { Component, OnInit, ViewChild, HostListener, Inject, SimpleChange } from '@angular/core';
import { AgmMap, AgmCoreModule } from '@agm/core';
import { MapsAPILoader } from '@agm/core';
import { ProblemNotificationService } from '../service/problem-notification/problem-notification.service';
import { Marker } from '@agm/core/services/google-maps-types';
import { ProblemNotificationModel } from '../model/api/problem-notification';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr'
import { VertexModel } from '../models/vertex.model';
import { LatLngLiteral } from '../models/google-maps-types';

@Component({
  selector: 'app-problem-notifications',
  templateUrl: './problem-notifications.component.html',
  styleUrls: ['./problem-notifications.component.scss']
})
export class ProblemNotificationsComponent implements OnInit {
  markers: ProblemNotificationModel[];
  title: string = 'Kielce';
  lng: number = 20.628671;
  lat: number = 50.865544;
  zoom: number = 0;
  height: string = '500px';
 

  paths: Array<LatLngLiteral> = [
    { lat: 0, lng: 10 },
    { lat: 0, lng: 20 },
    { lat: 10, lng: 20 },
    { lat: 10, lng: 10 },
    { lat: 0, lng: 10 }
  ]


  @ViewChild(AgmMap) private myMap: AgmMap;
  @ViewChild('mapContainer') mapContainer: any;
  constructor(private mapsAPILoader: MapsAPILoader, @Inject('problemNotificationService') private problemNotificationService) {
  }

  ngOnInit() {



    const connection = new HubConnectionBuilder()
      .withUrl("http://localhost:60464/PhotoNotification")
      .build();

    connection.on("NewProblemNotification", (message, id) => {
      console.log(`recevie: ${message} - ${id}`)
      this.problemNotificationService.getById(id).subscribe(res => {
        this.markers.push(res);
      });
    });

    connection.start()
      //.then((m) => console.log(m))
      .catch(err => console.error(err.toString()));

    this.problemNotificationService.getList().subscribe(res => {
      this.markers = res;

    });
    setTimeout(() => {
      console.log(this.mapContainer.nativeElement.offsetHeight);
      // let h = this.mapContainer.nativeElement.offsetHeight - 10;
      // this.height = String(h) + 'px';
    }, 300);
  }
  ngDoCheck() {
    // let h = this.mapContainer.nativeElement.offsetHeight - 10;
    // this.height = String(h) + 'px';
  }
  private convertStringToNumber(value: string): number {
    return +value;
  }
}

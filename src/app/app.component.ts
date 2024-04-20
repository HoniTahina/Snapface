import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from "./face-snap/face-snap.component";
import { FaceSnap } from './models/face-snap.model';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FaceSnapComponent]
})
export class AppComponent implements OnInit{
  mySnap1!: FaceSnap;
  mySnap2!: FaceSnap;
  mySnap3!: FaceSnap;

  ngOnInit() {
      this.mySnap1 = new FaceSnap(
        'supra',
        "Vutututut....",
        'https://cdn.motor1.com/images/mgl/3ykxx/s3/the-fast-and-the-furious-toyota-supra-auction-three-quarters.jpg',
        new Date(),
        100,   
      )
      this.mySnap2 = new FaceSnap(
        'gtr',
        "ratatatata..",
        'https://hips.hearstapps.com/hmg-prod/images/2024-nissan-gt-r-119-1673621285.jpg?crop=0.635xw:0.564xh;0,0.171xh&resize=1200:*',
        new Date(),
        200,   
      )
      this.mySnap3 = new FaceSnap(
        'mt',
        "yamaha",
        'https://global.yamaha-motor.com/business/mc/lineup/mt/img/sec00_01_mt-10.jpg',
        new Date(),
        10,   
      )
  }
}


import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
@Input() faceSnap!: FaceSnap;

  buttonText!: string;

  ngOnInit(){
   this.buttonText = 'like';
  }

  onLike(){
    if (this.buttonText == 'like') {
      this.faceSnap.like++;
      this.buttonText = 'unlike';
    } else {
      this.faceSnap.like--;
      this.buttonText = 'like';
    }
    
    
  }
    
  
}

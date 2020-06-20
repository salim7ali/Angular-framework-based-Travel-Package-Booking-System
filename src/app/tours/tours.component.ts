import { Component, OnInit } from '@angular/core';
import {ShareService} from '../share.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  choice: number;
  text = '';
  choiceData = [
    ['Lotus temple',  4999],
    ['Taj Mahal',  4999],
    ['Delhi Streets',  1999],
    ['Himachal Buddisht Mountain pass',  3999],
    ['Rajasthan Chittor Fort',  5999],
    ['India Gate',  4499],
    ['Nanjangud(Karnataka)',  999],
    ['Golden Temple',  3999]
  ];
  choiceCostList = [4999, 4999, 1999, 3999, 5999, 4499, 999, 3999];
  constructor(private data: ShareService) { }

  updateText(text){
    this.data.updateData(text);
  }

  ngOnInit(): void {
      //choice selection service data
      this.data.shareData.subscribe(x => this.text = x);
      this.choice = parseInt(this.text);
      // alert('Choice :'+ this.choice);
      this.choice = parseInt(this.text);
  }

}

import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  text = '';
  constructor(private data: ShareService) { }
    
  ngOnInit(): void {
    this.data.shareData.subscribe(x => this.text = x);
  }

}

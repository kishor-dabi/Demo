import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private api:ApiService) { }

  ngOnInit() {
  	this.getDataList();
  }

  getDataList(){
  	this.api.POST('exchange/trades/', {pair:"anx/btc", timestamp:1573212003579}).subscribe(
      data => {
        console.log(data);
        
      },error =>{

      })
  }

}

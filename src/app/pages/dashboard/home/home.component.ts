import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  curDate: Date = new Date()

  rows = [
    {id_name: "MTN_LIFE", type: "Call", campaign: "Reminding Billing 20 September 2020", total_blast: "1255", status: "success", date: this.curDate},
    {id_name: "MTN_LIFE", type: "Call", campaign: "Reminding Billing 20 September 2020", total_blast: "1255", status: "failed", date: this.curDate},
    {id_name: "MTN_LIFE", type: "Call", campaign: "Reminding Billing 20 September 2020", total_blast: "1255", status: "progress", date: this.curDate},
    {id_name: "MTN_LIFE", type: "Call", campaign: "Reminding Billing 20 September 2020", total_blast: "1255", status: "pending", date: this.curDate},
  ]

  constructor() { }

  ngOnInit(): void {
 
  }

  getColor(val){
    let color;
    console.log('color', val)
    if(val === 'success'){
      color = "green"
    }
    if(val === 'failed'){
      color = "red"
    }
    if(val === 'pending'){
      color = "yellow"
    }
    if(val === 'progress'){
      color = "blue"
    }


    return color;

  }

}

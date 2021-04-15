import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss']
})
export class SmsComponent implements OnInit {

  message = ''
  maxChar = 1024;
  currChar = 1024;
  constructor() { }

  ngOnInit(): void {
  }

  messageType(message){
    console.log('asd')
    this.currChar = this.maxChar - message.length
  }

}

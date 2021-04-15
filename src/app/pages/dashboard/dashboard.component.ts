import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public pushRightClass: string;
  isNavbarCollapsed = false;
  collapedSideBar: boolean;
  constructor() {}
  

  ngOnInit(): void {
    this.pushRightClass = 'push-right';
  }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  closeSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.remove(this.pushRightClass);
  }

  
}

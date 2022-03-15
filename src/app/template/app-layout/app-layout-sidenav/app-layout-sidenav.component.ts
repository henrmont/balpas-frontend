import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-layout-sidenav',
  templateUrl: './app-layout-sidenav.component.html',
  styleUrls: ['./app-layout-sidenav.component.css']
})
export class AppLayoutSidenavComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onSidenavClose() {
    this.sidenavClose.emit();
  }

}

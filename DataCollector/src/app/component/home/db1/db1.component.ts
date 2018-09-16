import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-db1',
  templateUrl: './db1.component.html',
  styleUrls: ['./db1.component.sass']
})
export class Db1Component implements OnInit {

  constructor(public usage: HomeComponent) { }

  ngOnInit() {
    console.log("khedmat db 1");
    this.usage.ngOnInit();
  }

}

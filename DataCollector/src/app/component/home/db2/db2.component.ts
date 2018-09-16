import { Component, ChangeDetectorRef, OnInit, NgZone } from '@angular/core';
import { HomeComponent } from '../home.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-db2',
  templateUrl: './db2.component.html',
  styleUrls: ['./db2.component.sass']
})
export class Db2Component implements OnInit {

  constructor(private route: ActivatedRoute, public usage: HomeComponent) {}

  ngOnInit() {
    this.usage.ngOnInit();
    console.log("khedmat db 2");
  }

}

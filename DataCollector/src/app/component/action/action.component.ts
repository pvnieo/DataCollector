import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.sass']
})
export class ActionComponent implements OnInit {

  constructor(private _changeDetectorRef: ChangeDetectorRef, 
              public media: TdMediaService) { }

  ngOnInit() {
  }

}

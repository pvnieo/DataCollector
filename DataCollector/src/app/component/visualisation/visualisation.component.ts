import { Component, ChangeDetectorRef, OnInit } from '@angular/core';

import { TdMediaService } from '@covalent/core/media';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-visualisation',
  templateUrl: './visualisation.component.html',
  styleUrls: ['./visualisation.component.sass']
})
export class VisualisationComponent implements OnInit {

  constructor(private _changeDetectorRef: ChangeDetectorRef, 
              public media: TdMediaService) { }

  ngOnInit() {
  }

}

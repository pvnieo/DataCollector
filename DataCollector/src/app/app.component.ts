import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private _iconRegistry: MatIconRegistry,
              private _domSanitizer: DomSanitizer) {

    // import the svg files
      this._iconRegistry.addSvgIconInNamespace('assets', 'gcp',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/Google Cloud Platform.svg'));
    }
}

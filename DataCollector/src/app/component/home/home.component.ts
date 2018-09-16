import { Component, ChangeDetectorRef, OnInit, AfterViewInit } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';
// import { Db2Component } from './db2/db2.component';
import { Router} from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';

import { Highcharts, Chart } from 'angular-highcharts';

declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(
            private _changeDetectorRef: ChangeDetectorRef,
            public media: TdMediaService,
            private router: Router,){}

  

  ngAfterViewInit(): void {
      console.log("dkhalna home on check");
      Highcharts.chart('container', {

          title: {
              text: ''
          },
          yAxis: {
              title: {
                  text: ' '
              }
          },
          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle',
              enabled: true
          },
          xAxis: {
              categories: ['10/02/2018','17/02/2018','24/02/2018','03/03/2018','10/03/2018','17/03/2018','24/03/2018','31/03/2018']
          },
          plotOptions: {
              line: {
                  marker: {
                      enabled: true,
                      symbol: 'circle',
                      radius: 2,
                      states: {
                          hover: {
                              enabled: true
                          }
                      }
                  }
              }
          },
          credits: {
              enabled: false
          },
          series: [{
            name: 'Randstad_Interimbot',
            data: [1174, 1772, 1800, 1977, 2018, 2437, 3214, 3938]
            }, {
            name: 'LaPoste_Chatbot',
            data: [2400, 2406, 2974, 2985, 3028, 3249, 3412, 3854]
          }]
      });
      this.router.navigate(['/main/home/db2']);
  }

  ngOnInit() {
    console.log("dkhalna home on init");

    Highcharts.chart('container', {

        title: {
            text: ''
        },
        yAxis: {
            title: {
                text: ' '
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            enabled: true
        },
        xAxis: {
            categories: ['10/02/2018','17/02/2018','24/02/2018','03/03/2018','10/03/2018','17/03/2018','24/03/2018','31/03/2018']
        },
        plotOptions: {
            line: {
                marker: {
                    enabled: true,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
          name: 'Randstad_Interimbot',
          data: [1174, 1772, 1800, 1977, 2018, 2437, 3214, 3938]
          }, {
          name: 'LaPoste_Chatbot',
          data: [2400, 2406, 2974, 2985, 3028, 3249, 3412, 3854]
        }]
    });

  };
}

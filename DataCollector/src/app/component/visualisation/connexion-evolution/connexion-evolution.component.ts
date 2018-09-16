import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';

import { Highcharts, Chart } from 'angular-highcharts';


@Component({
  selector: 'app-connexion-evolution',
  templateUrl: './connexion-evolution.component.html',
  styleUrls: ['./connexion-evolution.component.sass']
})
export class ConnexionEvolutionComponent implements OnInit {

  constructor(private navcomponent: NavbarComponent) { }
  data: any[] = [];
  ngOnInit() {
    var dates = {};
    this.data = this.navcomponent.data;
    this.data.forEach(row => {
      const dt = row.createdAt.split(" ")[0];
      if (dates.hasOwnProperty(String(dt)) == true){
        dates[dt] += 1;
      } else {
        dates[dt] = 1;
      }
    });
    var days = Object.keys(dates).sort();
    var values = [];
    days.forEach(day => {
      if(values.length == 0){
        values.push(dates[day]);
      } else {
        values.push(values[values.length - 1] + dates[day]);
      }
      
    });
    
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
            enabled: false
        },
        xAxis: {
            categories: days
        },
        plotOptions: {
            line: {
                marker: {
                    enabled: false,
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
            name: '# of users',
            data: values,
            color: '#6b818c'
        }]
    });

  }

}

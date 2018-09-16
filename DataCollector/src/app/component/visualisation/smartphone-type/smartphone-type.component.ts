import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';

import { Highcharts, Chart } from 'angular-highcharts';

@Component({
  selector: 'app-smartphone-type',
  templateUrl: './smartphone-type.component.html',
  styleUrls: ['./smartphone-type.component.sass']
})
export class SmartphoneTypeComponent implements OnInit {

  constructor(private navcomponent: NavbarComponent) { }
  data: any[] = [];
  ngOnInit() {
    this.data = this.navcomponent.data;
    var canals = {}
    this.data.forEach(row => {
      if (row.questionId == 12){
        const cnl = row.response;
        if (canals.hasOwnProperty(String(cnl)) == true){
          canals[cnl] += 1;
        } else {
          canals[cnl] = 1;
        }
      }
    })
    var keys = Object.keys(canals);
    var values = [];
    keys.forEach(key => {
      values.push(canals[key]); 
    });
    console.log(keys, values);


    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: keys,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '# of users',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            shadow: true,
            enabled: false
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

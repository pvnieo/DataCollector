import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';

import { Highcharts, Chart } from 'angular-highcharts';

@Component({
  selector: 'app-messagerie-canal',
  templateUrl: './messagerie-canal.component.html',
  styleUrls: ['./messagerie-canal.component.sass']
})
export class MessagerieCanalComponent implements OnInit {

  constructor(private navcomponent: NavbarComponent) { }
  data: any[] = [];
  ngOnInit() {
    this.data = this.navcomponent.data;
    var canals = {}
    this.data.forEach(row => {
      if (row.questionId == 11){
        const cnl = row.response;
        if (canals.hasOwnProperty(String(cnl)) == true){
          canals[cnl] += 1;
        } else {
          canals[cnl] = 1;
        }
      }
    })
    var keys = Object.keys(canals);
    var keysDistinct = [];
    keys.forEach(key => {
        var arr = key.split("&").map(function(x){return x.trim()});
        arr.forEach(word => {
            if(keysDistinct.indexOf(word) == -1){
                keysDistinct.push(word);
            }
        })
    })
    var values = [];
    keysDistinct.forEach(key => {
        var counter = 0;
        keys.forEach(k => {
            if (k.includes(key)){
                counter += canals[k];
            }
        })
        values.push(counter); 
    });


    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: keysDistinct,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '# of users / channel',
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
            name: '# of users / channel',
            data: values,
            color: '#6b818c'
        }]
    });
  }

}

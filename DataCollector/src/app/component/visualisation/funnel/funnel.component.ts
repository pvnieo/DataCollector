import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';

import { Highcharts, Chart } from 'angular-highcharts';



@Component({
  selector: 'app-funnel',
  templateUrl: './funnel.component.html',
  styleUrls: ['./funnel.component.sass']
})
export class FunnelComponent implements OnInit {

  constructor(private navcomponent: NavbarComponent) { }
  data: any[] = [];
  pos: any[] = [];
  neg: any[] = [];
  max = 150;
  questions = ["question 1", "question 2", "question 3", "question 4", "question 5", "question 6", "question 7", "question 8", "question 9", "question 10", "question 11", "question 12"];
  ids = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];


  ngOnInit() {
    this.data = this.navcomponent.data;
    var sample = [];
    for (var i = 0; i < this.questions.length; i++) {
      sample.push([]);
    }
    this.data.forEach(row => {
      if( sample[parseInt(row.questionId) - 1].indexOf(row.userId) == -1){
        sample[parseInt(row.questionId) - 1].push(row.userId)
      }
    })
    for (var i = 0; i < this.questions.length; i++) {
      this.pos.push(sample[i].length);
      this.neg.push(-sample[i].length);
    }
    this.max = Math.max(...this.pos) + 10;

    Highcharts.chart('container', {
        chart: {
            type: 'area'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: this.questions
        },
        credits: {
            enabled: false
        },
        legend: {
              enabled: false
        },
        plotOptions: {
            area: {
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
        yAxis:{
            max: this.max,
            min: - this.max,
            startOnTick: false,
            endOnTick: false
        },
        series: [{
            name: 'pos',
            data: this.pos,
            color: '#6b818c'
        }, {
            name: 'neg',
            data: this.neg,
            color: '#6b818c'
        }]
    });
  }



}

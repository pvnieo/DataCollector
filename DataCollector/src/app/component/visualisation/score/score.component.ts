import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';

import { Highcharts, Chart } from 'angular-highcharts';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.sass']
})
export class ScoreComponent implements OnInit {

  constructor(private navcomponent: NavbarComponent) { }
  data: any[] = [];
  ngOnInit() {
    this.data = this.navcomponent.data;
    var usersScore = {};
    this.data.forEach(row =>{
      const user = row.userId;
      if (usersScore.hasOwnProperty(String(user)) == true){
        usersScore[user] += 5;
      } else {
        usersScore[user] = 5;
      }
    });
    console.log(usersScore);
    var scores = []
    var keys = []
    var arr = Object.values(usersScore);
    // console.log(arr);
    // arr = arr.map(parseInt)
    // var interm = Math.max( ...arr) / 100;
    var interm = Math.max.apply(Math, arr) / 100;
    var maxScoreFact = Math.floor(interm);
    for (var i = 0; i < maxScoreFact + 1; i++) {
        const scoreMin = i * 100 + 1;
        const scoreMax = (i+1) * 100;
        keys.push(String(scoreMin) + "-" + String(scoreMax));
        scores.push(Object.values(usersScore).filter(function(x){return (x <= scoreMax && x >= scoreMin)}).length);
    };

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
                  text: 'Score',
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
              name: 'Score',
              data: scores,
              color: '#6b818c'
          }]
      });

  }
}

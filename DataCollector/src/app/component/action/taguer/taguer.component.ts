import { Component, OnInit, Inject } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Title }     from '@angular/platform-browser';

import { Highcharts } from 'angular-highcharts';
import { MatDialog } from '@angular/material';

import { NavbarComponent } from '../../navbar/navbar.component';
import { AddtagComponent } from './addtag/addtag.component';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-taguer',
  templateUrl: './taguer.component.html',
  styleUrls: ['./taguer.component.sass']
})
export class TaguerComponent implements OnInit {

    constructor(private navcomponent: NavbarComponent, public dialog: MatDialog) { }
    data: any[] = [];
    doc = document as any;
    intents = [
        {value: '1', viewValue: 'intent-1'},
        {value: '2', viewValue: 'intent-2'},
        {value: '3', viewValue: 'intent-3'},
        {value: '4', viewValue: 'intent-4'},
        {value: '5', viewValue: 'intent-5'},
        {value: '6', viewValue: 'intent-6'},
        {value: '7', viewValue: 'intent-7'},
    ];

    questions = [
      {id: "1", value: 'Tout est clair pour vous ?'},
      {id: "2", value: 'Vous souhaitez visualiser la liste des missions...'},
      {id: "3", value: 'Comment demanderiez-vous à avoir accès à votre ...'},
      {id: "4", value: 'De quelle manière indiqueriez-vous vos disponibilités...'},
      {id: "5", value: 'Et si une de vos indisponibilités concernait mardi...'},
      {id: "6", value: 'Comment demanderiez-vous le montant de votre droit...'},
      {id: "7", value: 'Et si vous désiriez avoir une avance sur salaire de 200€...'},
      {id: "8", value: 'Auriez-vous en tête une ou plusieurs autres...'},
      {id: "9", value: 'Avez-vous un compte Facebook ?'},
      {id: "10", value: 'Avez-vous un compte Messenger ?'},
      {id: "11", value: "Quel autre canal de messagerie avez-vous l'habitude d'utiliser ?"},
      {id: "12", value: 'Avez-vous un smartphone ?'}
    ]
    responses = {};

  getSelectedText() {
      var text = "";
      const doc = document as any;
      if (typeof window.getSelection != "undefined") {
          text = window.getSelection().toString();
      } else if (typeof doc.selection != "undefined" && doc.selection.type == "Text") {
          text = doc.selection.createRange().text;
      }
      return text;
  }

  doSomethingWithSelectedText() {
      var selectedText = this.getSelectedText();
      if (selectedText) {
          alert("Got selected text " + selectedText);
      }
  }
  test(e){
      let dialogRef = this.dialog.open(AddtagComponent, {
        });
  }

  

  

  ngOnInit() {
      this.data = this.navcomponent.data;
      this.doc.onmouseup = this.doSomethingWithSelectedText;
      this.doc.onkeyup = this.doSomethingWithSelectedText;
      this.data.forEach(row => {
          if (this.responses.hasOwnProperty(row.questionId) == true){
            this.responses[row.questionId].push(row.response);
          } else {
            this.responses[row.questionId] = [row.response];
          }
      })
  }
}

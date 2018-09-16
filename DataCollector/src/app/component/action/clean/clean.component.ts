import { Component, OnInit, Inject } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { MatDialog } from '@angular/material';

import { ConfirmComponent } from '../confirm/confirm.component'
import { DataService } from '../../../services/data.service';

import { TdDataTableSortingOrder, TdDataTableService, ITdDataTableSortChangeEvent, ITdDataTableColumn } from '@covalent/core/data-table';
import { TdDigitsPipe } from '@covalent/core/common';
import { IPageChangeEvent } from '@covalent/core/paging';



declare var jquery:any;
declare var $ :any;

const DECIMAL_FORMAT: (v: any) => any = (v: number) => v.toFixed(2);

@Component({
  selector: 'app-clean',
  templateUrl: './clean.component.html',
  styleUrls: ['./clean.component.sass']
})

export class CleanComponent implements OnInit {
  columns: ITdDataTableColumn[] = [
    { name: 'userId',  label: 'User Id', sortable: true, width: 150 },
    { name: 'question', label: 'Question', filter: true, sortable: true },
    { name: 'response', label: 'Response', hidden: false },
    { name: 'id', label: 'id', hidden: true },
    { name: 'createdAt', label: 'Created at', sortable: true, width: 250 },
];

  constructor(private _dataTableService: TdDataTableService, private dataService: DataService, public dialog: MatDialog) {}

  data: any[] = [];

  selectable: boolean = true;
  clickable: boolean = true;
  multiple: boolean = true;

  filteredData: any[] = this.data;
  filteredTotal: number = this.data.length;

  searchTerm: string = '';
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 50;
  sortBy: string = 'userId';
  selectedRows: any[] = [];
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;

  filter(): void {
      let newData: any[] = this.data;
      let excludedColumns: string[] = this.columns
      .filter((column: ITdDataTableColumn) => {
        return ((column.filter === undefined && column.hidden === true) ||
                (column.filter !== undefined && column.filter === false));
      }).map((column: ITdDataTableColumn) => {
        return column.name;
      });
      newData = this._dataTableService.filterData(newData, this.searchTerm, true, excludedColumns);
      this.filteredTotal = newData.length;
      newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
      newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
      this.filteredData = newData;
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    this.filter();
  }

  showAlert(event: any): void {
    let row: any = event.row;
    // .. do something with event.row
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    this.filter();
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filter();
  }

  ngOnInit(): void {
    this.dataService.getCollectedData("Randstad_Interimbot")
      .then(data => {
        this.data = data;
        this.filter();
      },
        (err) => console.log(err)
        );
  }
  
  deleteRow(table, row) {
    const index: number = table.indexOf(row);
    if (index !== -1) {
        table.splice(index, 1);
    }        
  }

  delete(): void {

    this.selectedRows.forEach((row) => {
      var kind = "Randstad_Interimbot";
      var id = row.id;
      this.dataService.deleteEntity(kind, id)
          // .map(res => res.json())
          .subscribe();
      this.deleteRow(this.filteredData, row);
    });
    this.selectedRows = [];
  }

  deleteSelected(): void{
    let dialogRef = this.dialog.open(ConfirmComponent, {
        });

    dialogRef.afterClosed().subscribe(result => {
      if (result == true){
        this.delete();
      }
    });
  }
}

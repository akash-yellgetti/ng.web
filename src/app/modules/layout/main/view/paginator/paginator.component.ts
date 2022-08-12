import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  data: any = {
    draw: 0,
    length: 100,
    pageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
    pageIndex: 1,
    showFirstLastButtons: true,
    search: "",
    sort: {},
    displayedColumns: []
  }
  constructor() { }

  ngOnInit(): void {
  }

}

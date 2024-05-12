import { Component, OnInit, AfterViewInit, SimpleChanges, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: [
    './datatable.component.scss'
  ]
})
export class DatatableComponent implements OnInit, AfterViewInit {
  dataTable: any;
  @Input() columns: any;
  @Input() data: any;
  public id: any = Math.random().toString(36).substring(7);

  constructor() { 
    
  }

  ngOnInit() {
    this.loadData();
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    // console.log(changes)
    if (changes.data && changes.data.currentValue) {
      this.loadData();
    }
  }

  ngAfterViewInit() {
    this.initializeDataTable();
  }

  ngOnDestroy() {
    if (this.dataTable) {
      this.dataTable.destroy();
    }
  }

  loadData() {
    // Simulate fetching data (replace with actual HTTP call)
    // const data = [
    //   { id: 1, name: 'John Doe', age: 30 },
    //   { id: 2, name: 'Jane Smith', age: 25 },
    //   // Add more data as needed
    // ];

    // Use setTimeout to simulate async data loading
    // setTimeout(() => {
    //   // Initialize DataTable after data is loaded
    //   this.initializeDataTable();
    // }, 0);

    if(this.dataTable) { 
      // Fetch and set data for DataTable
      this.dataTable.clear();
      this.dataTable.rows.add(this.data);
      this.dataTable.draw();
    }
  }

  initializeDataTable() {
    // if ($.fn.DataTable.isDataTable('#example')) {
    //   // Destroy existing DataTable if it exists
    //   this.dataTable.destroy();
    // ...

    this.dataTable = $('#'+this.id).DataTable({
      dom: 'lBfrtip',
      buttons: ['copy', 'csv', 'excel', 'pdf', 'print', {
        text: 'Delete',
        action: function (e: any, dt: any, node: any, config: any) {
          console.log(e)
          // dt.ajax.reload();
        }
      }],
      lengthMenu: [
        [10, 15, 20, 25, 50,   -1],
        [10, 15, 20, 25, 50,  'All']
      ],
      pageLength: 10,
      select: {
        style: 'multi'
      },
      data: [], // Initialize with empty data
      columns: this.columns
    });

    // ...
    // Fetch and set data for DataTable
    this.dataTable.clear();
    this.dataTable.rows.add(this.data);
    this.dataTable.draw();
  }
}

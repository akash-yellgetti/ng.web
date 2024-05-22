import { Component, OnInit, AfterViewInit, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  @Output() toParentDataTableDelete: EventEmitter<any> = new EventEmitter();
  @Output() toParentDataTableEdit: EventEmitter<any> = new EventEmitter();
  public id: any = Math.random().toString(36).substring(7);

  constructor(private toastr: ToastrService) { 
    
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
    if(this.dataTable) { 
      // Fetch and set data for DataTable
      this.dataTable.clear();
      this.dataTable.rows.add(this.data);
      this.dataTable.draw();
    }
  }

  initializeDataTable() {
    const buttons: any = ['copy', 'csv', 'excel', 'pdf', 'print']



    if (this.toParentDataTableDelete.observers.length > 0) {
        buttons.push({
          text: 'Delete',
          action: function (e: any, dt: any, node: any, config: any) {
            const rows = dt.rows({ selected: true }).data();
            const rowsData = [];
            for (let i = 0; i < rows.length; i++) {
              rowsData.push(rows[i]);
            }
            self.toParentDataTableDelete.emit(rowsData);
          }
        });
    }

    if (this.toParentDataTableEdit.observers.length > 0) {
      buttons.push({
        text: 'Edit',
        action: function (e: any, dt: any, node: any, config: any) {
          const rows = dt.rows({ selected: true }).data();
          if (rows.length > 1) {
            // alert('Please select only one row to edit');
            self.toastr.error('Please select only one row to edit');
            return;
          }
          self.toParentDataTableEdit.emit(rows[0]);
        }
      });
    }

    
    
    const self = this;
    this.dataTable = $('#'+this.id).DataTable({
      dom: 'lBfrtip',
      buttons,
      // lengthMenu: [
      //   [10, 15, 20, 25, 50,   -1],
      //   [10, 15, 20, 25, 50,  'All']
      // ],
      // pageLength: 10,
      select: true,
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

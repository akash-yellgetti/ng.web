// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({
 
    dom: 'lBfrtip',
    // dom: 'lBrf',
    buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
  });
});

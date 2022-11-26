const gridOptions = {
    columnDefs: [
      { field: 'country', rowGroup: true, hide: true, filter: 'agNumberColumnFilter'},
      { field: 'year', rowGroup: true, hide: true },
      { field: 'athlete', filter: 'agNumberColumnFilter' },
      { field: 'sport', filter: 'agNumberColumnFilter' },
      { field: 'total', filter: 'agNumberColumnFilter' },
    ],
    defaultColDef: {
      flex: 1,
      minWidth: 100,
      sortable: true,
      resizable: true,
    },
    autoGroupColumnDef: {
      minWidth: 200,
    },
    animateRows: true,
  };
  
  // all of the HTML is loaded
  document.addEventListener('DOMContentLoaded', function () {
    var gridDiv = document.querySelector('#mainGrid');
    new agGrid.Grid(gridDiv, gridOptions);
  
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((response) => response.json())
      .then((data) => gridOptions.api.setRowData(data));
  });
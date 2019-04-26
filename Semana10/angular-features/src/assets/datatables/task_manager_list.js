
var _componentDatatable = function() {
if (!$().DataTable) {
    console.warn('Warning - datatables.min.js is not loaded.');
    return;
}

// Create an array with the values of all the input boxes in a column
$.fn.dataTable.ext.order['dom-text'] = function (settings, col) {
    return this.api().column(col, {order:'index'}).nodes().map( function (td, i) {
        return $('input', td).val();
    });
};
    
// Create an array with the values of all the select options in a column
$.fn.dataTable.ext.order['dom-select'] = function (settings, col) {
    return this.api().column(col, {order:'index'}).nodes().map( function (td, i) {
        return $('select', td).val();
    });
};

// Initialize data table
$('.tasks-list').DataTable({
    autoWidth: false,
    columnDefs: [
        {
            type: "natural",
            width: 20,
            targets: 0
        },
        {
            visible: false,
            targets: 1
        },
        {
            width: '40%',
            targets: 2
        },
        {
            width: '10%',
            targets: 3
        },
        {
            orderDataType: 'dom-text',
            type: 'string',
            targets: 4
        },
        {
            orderDataType: 'dom-select',
            type: 'string',
            targets: 5
        },
        { 
            orderable: false,
            width: 100,
            targets: 7
        },
        {
            width: '15%',
            targets: [4, 5, 6]
        }
    ],
    order: [[ 0, 'desc' ]],
    dom: '<"datatable-header"fl><"datatable-scroll-lg"t><"datatable-footer"ip>',
    language: {
        search: '<span>Buscar:</span> _INPUT_',
        searchPlaceholder: 'Escribe para buscar...',
        lengthMenu: '<span>Mostrar:</span> _MENU_',
        paginate: { 'first': 'First', 'last': 'Last', 'next': $('html').attr('dir') == 'rtl' ? '&larr;' : '&rarr;', 'previous': $('html').attr('dir') == 'rtl' ? '&rarr;' : '&larr;' },
        infoEmpty: "No hay resultados para su busqueda",
    },
    lengthMenu: [ 5, 10],
    displayLength: 5,
    drawCallback: function (settings) {
        var api = this.api();
        var rows = api.rows({page:'current'}).nodes();
        var last=null;

        // Grouod rows
        api.column(1, {page:'current'}).data().each(function (group, i) {
            if (last !== group) {
                $(rows).eq(i).before(
                    '<tr class="table-active table-border-double"><td colspan="8" class="font-weight-semibold">'+group+'</td></tr>'
                );
                last = group;
            }
        });

        // Initialize components
        _componentUiDatepicker();
        _componentSelect2();
    }
});
};

var _componentUiDatepicker = function() {
if (!$().datepicker) {
    console.warn('Warning - jQuery UI components are not loaded.');
    return;
}

// Initialize
$('.datepicker').datepicker({
    showOtherMonths: true,
    dateFormat: 'd MM, y'
});
};

var _componentSelect2 = function() {
if (!$().select2) {
    console.warn('Warning - select2.min.js is not loaded.');
    return;
}

// Initialize
$('.form-control-select2').select2({
    minimumResultsForSearch: Infinity
});

// Length menu styling
$('.dataTables_length select').select2({
    minimumResultsForSearch: Infinity,
    dropdownAutoWidth: true,
    width: 'auto'
});
};

_componentDatatable();
_componentSelect2();
_componentUiDatepicker();

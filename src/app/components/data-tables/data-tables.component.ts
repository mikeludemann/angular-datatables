import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';

import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'jszip';
import 'pdfmake';
import 'datatables.net-bs4';
import 'datatables.net-autofill-bs4';
import 'datatables.net-buttons-bs4';
import 'datatables.net-buttons/js/buttons.colVis.js';
import 'datatables.net-buttons/js/buttons.flash.js';
import 'datatables.net-buttons/js/buttons.html5.js';
import 'datatables.net-buttons/js/buttons.print.js';
import 'datatables.net-colreorder-bs4';
import 'datatables.net-fixedcolumns-bs4';
import 'datatables.net-fixedheader-bs4';
import 'datatables.net-keytable-bs4';
import 'datatables.net-responsive-bs4';
import 'datatables.net-rowgroup-bs4';
import 'datatables.net-rowreorder-bs4';
import 'datatables.net-scroller-bs4';
//import 'datatables.net-searchpanes-bs4';
import 'datatables.net-select-bs4';

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'data-tables',
	templateUrl: './data-tables.component.html',
	styleUrls: ['./data-tables.component.css']
})
export class DataTablesComponent implements OnInit {

	@Input() ngStyle: { [key: string]: string; }

	@Input() elementID: string;
	@Input() tableID: string;
	@Input() config: object;

	@ViewChild('mdt', {static: false}) el: ElementRef;

	constructor() { }

	ngOnInit() {
		var elem = "#" + this.tableID;
		var settings = this.config;
		$(document).ready(function() {
			$(elem).DataTable(settings);
		});
	}

}

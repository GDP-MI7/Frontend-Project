import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-list-tags',
  templateUrl: './list-tags.component.html',
  styleUrls: ['./list-tags.component.css']
})
export class ListTagsComponent implements OnInit {
  @ViewChild('editTmpl') editTmpl: TemplateRef<any>;
  @ViewChild('hdrTpl') hdrTpl: TemplateRef<any>;
  @ViewChild(DatatableComponent) table: DatatableComponent;
  
  temp = [];
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    {
      name: 'Name', cellTemplate: this.editTmpl,
      headerTemplate: this.hdrTpl,
    },
    {
      name: 'Gender', cellTemplate: this.editTmpl,
      headerTemplate: this.hdrTpl,
    },
    {
      name: 'Company', cellTemplate: this.editTmpl,
      headerTemplate: this.hdrTpl,
    }
  ];

  constructor() {

  }

  ngOnInit() {
    this.temp = [...this.rows]
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}

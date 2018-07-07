import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-tags',
  templateUrl: './list-tags.component.html',
  styleUrls: ['./list-tags.component.css']
})
export class ListTagsComponent implements OnInit {
  @ViewChild('editTmpl') editTmpl: TemplateRef<any>;
  @ViewChild('hdrTpl') hdrTpl: TemplateRef<any>;

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    {
      name: 'name', cellTemplate: this.editTmpl,
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
  
  }
}

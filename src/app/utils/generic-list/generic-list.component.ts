import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrl: './generic-list.component.css'
})
export class GenericListComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() list: any[] | undefined;
}

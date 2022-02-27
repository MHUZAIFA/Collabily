import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-conv-unit',
  templateUrl: './conv-unit.component.html',
  styleUrls: ['./conv-unit.component.css']
})
export class ConvUnitComponent implements OnInit {

  @Input() unit: any;

  constructor() { }

  ngOnInit(): void {
  }

}

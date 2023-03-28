import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-obj-card',
  templateUrl: './obj-card.component.html',
  styleUrls: ['./obj-card.component.scss']
})
export class ObjCardComponent implements OnInit {
  @Input() text: string = '';
  @Input() title: string = '';
  @Input() img: string = ''; 

  constructor() {}

  ngOnInit(): void {

  }
}

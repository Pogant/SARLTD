import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  @Input('isVertical') isVertical: boolean;
  @Input('horizontalAlign') horizontalAlign: string;
  @Input('verticalAlign') verticalAlign: string;

  alignClass: string = "side-menu-container";

  constructor() {
    
  }
  ngOnInit() {
    this.alignClass = (this.horizontalAlign) ? this.alignClass + ' ' + this.horizontalAlign : this.alignClass;
    this.alignClass = (this.verticalAlign) ? this.alignClass + ' ' + this.verticalAlign : this.alignClass;
    this.alignClass = (this.isVertical) ? this.alignClass + ' vertical' : this.alignClass;
  }
}
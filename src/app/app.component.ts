import { Line } from './line';
import { Point } from './point';
import { Component } from '@angular/core';
import { Utils } from './utils';
import * as d3 from 'd3';
import * as document from 'jsdom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public plist: Point[];
  public plines: Line[];
  public maxHeight: number;
  public maxWidth: number;

  constructor() {
    this.maxWidth = window.screen.width;
    this.maxHeight = window.screen.height;
    this.plist = Utils.generatePointSet(1000, (this.maxWidth/2) - 100 , (this.maxHeight/2) - 100);
    this.plines = Utils.generateRandomLines(this.plist);

    // for (const point of this.plist) {
    //   console.log(point);
    // }
    for (const line of this.plines) {
      console.log(line.p1);
    }
    console.log("Number of lines" + this.plines.length);
  }
}

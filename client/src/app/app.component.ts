import { Component } from '@angular/core';
import * as d3 from 'd3';
import * as document from 'jsdom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public maxHeight: number;
  public maxWidth: number;

  constructor() {
  }
}

import { NewTestBendComponent } from './../new-test-bend/new-test-bend.component';
import { Component, OnInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as d3 from 'd3';
@Component({
  selector: 'app-test-section',
  templateUrl: './test-section.component.html',
  styleUrls: ['./test-section.component.css']
})
export class TestSectionComponent implements OnInit, AfterContentInit {

  public maxHeight: number;
  public maxWidth: number;
  private width = 950;
  private height = 500;
  private shiftKey;

  private graph = {
    nodes: [
      { x: 5, y: 10 },
      { x: 5, y: 20 },
      { x: 10, y: 50 },
      { x: 30, y: 100 },
      { x: 150, y: 200 },
      { x: 5, y: 30 },
      { x: 124, y: 43 },
    ],
    links: [
      { source: 1, target: 0 },
      { source: 2, target: 0 },
      { source: 3, target: 0 },
      { source: 3, target: 2 },
      { source: 4, target: 0 },
      { source: 5, target: 0 }
    ]
  };

  private isSelectedNode(n: {x: number, y: number}): boolean {
    const idx = this.graph.nodes.indexOf(n);
    for (let l of this.graph.links) {
      if (l.source === idx || l.target === idx) {
        return true;
      }
    }
    return false;
  }


  private svg;

  constructor(public dialog: MatDialog) {
    this.maxWidth = window.screen.width;
    this.maxHeight = window.screen.height;
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(NewTestBendComponent);
  }

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.svg = d3.select('.map-image-contaiiner')
      .attr('tabindex', 1)
      .each(() => { focus(); })
      .append('svg')
      .attr('width', '100%')
      .attr('height', '80vh');

    const link = this.svg.append('g')
      .attr('class', 'link')
      .selectAll('line')
      .data(this.graph.links)
      .enter().append('line')
      .attr('style', 'stroke:rgb(0,204,0);stroke-width:1.5')
      .attr('x1',  (d) =>  this.graph.nodes[d.source].x)
      .attr('y1',  (d) => this.graph.nodes[d.source].y)
      .attr('x2',  (d) => this.graph.nodes[d.target].x )
      .attr('y2',  (d)  => this.graph.nodes[d.target].y);

    const node = this.svg.append('g')
      .attr('class', 'node')
      .selectAll('circle')
      .data(this.graph.nodes)
      .enter().append('circle')
      .attr('fill', (d) => this.isSelectedNode(d) ? 'blue' : 'purple')
      .attr('r', 4)
      .attr('cx',  (d) => d.x )
      .attr('cy',  (d) => d.y );
  }

  randomPoints() {
    alert('Random points function called max width ' + this.maxWidth + ' max height ' + this.maxHeight);
  }

}

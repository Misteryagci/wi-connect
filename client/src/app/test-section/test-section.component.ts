import { UnitDiskGraph } from './../unit-disk-graph';
import { PointService } from './../point.service';
import { NewTestBendComponent } from './../new-test-bend/new-test-bend.component';
import { Component, OnInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Point } from './../point';
import { Edge } from './../edge';
import { ElementRef, ViewChild } from '@angular/core';


import * as d3 from 'd3';

@Component({
  selector: 'app-test-section',
  templateUrl: './test-section.component.html',
  styleUrls: ['./test-section.component.css']
})
export class TestSectionComponent implements OnInit, AfterContentInit {

  @ViewChild('mapContainer') elementView: ElementRef;
  viewHeight: number;
  viewWidth: number;
  public maxHeight: number;
  public maxWidth: number;
  private width = 950;
  private height = 500;
  private shiftKey;
  public loaded: boolean;

  private graph: UnitDiskGraph;

  private svg;


  private isSelectedNode(n: Point): boolean {
    // for (let li = 0; this.graph.edges.length; li++) {
    //   const l: Edge = this.graph.edges[li];
    //   console.log('We are checking this edge', l);
    //   if ((l.src.equals(n) === true) || (l.destination.equals(n) === true)) {
    //     return true;
    //   }
    // }
    return false;
  }



  constructor(public dialog: MatDialog, private pointService: PointService) {
    this.maxWidth = window.screen.width;
    this.maxHeight = window.screen.height;
    this.loaded = false;
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(NewTestBendComponent);
  }

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.viewHeight = this.elementView.nativeElement.offsetHeight;
    this.viewWidth = this.elementView.nativeElement.offsetWidth;
    console.log('Element height ' + this.viewHeight + ' element width ' + this.viewWidth);
    this.pointService.testService(this.viewWidth - 20, this.viewHeight * 0.8, 4, 1000).subscribe((data: UnitDiskGraph) => {
      console.log('Le data obtenu de serveur : ' + JSON.stringify(data));
      this.graph = data;
      this.svg = d3.select('.map-image-contaiiner')
        .attr('tabindex', 1)
        .each(() => { focus(); })
        .append('svg')
        .attr('width', '100%')
        .attr('height', '80vh');

      const link = this.svg.append('g')
        .attr('class', 'link')
        .selectAll('line')
        .data(this.graph.edges)
        .enter().append('line')
        .attr('style', 'stroke:rgb(0,204,0);stroke-width:0.25')
        .attr('x1', (d) => d.src.x)
        .attr('y1', (d) => d.src.y)
        .attr('x2', (d) => d.destination.x)
        .attr('y2', (d) => d.destination.y);

      const node = this.svg.append('g')
        .attr('class', 'node')
        .selectAll('circle')
        .data(this.graph.points)
        .enter().append('circle')
        .attr('fill', (d) => this.isSelectedNode(d) ? 'blue' : 'purple')
        .attr('r', 4)
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y);
      this.loaded = true;
    });
  }

  randomPoints() {
    alert('Random points function called max width ' + this.maxWidth + ' max height ' + this.maxHeight);
  }

}

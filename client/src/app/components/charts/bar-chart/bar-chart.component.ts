import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import * as d3all from 'd3';

@Component({
  selector: 'app-bar-chart[data][yAxis][xAxis][yLabel]',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @Input()
  public data: any[]

  @Input()
  public xAxis: string

  @Input()
  public yAxis: string

  @Input()
  public xLabel: string

  @Input()
  public yLabel: string

  @Input()
  title = 'Bar Chart';

  private width: number;
  private height: number;
  private margin = {top: 20, right: 20, bottom: 30, left: 40};

  private x: any;
  private y: any;
  private svg: any;
  private g: any;


  ngOnInit() {
    console.log(this.data)
    this.initSvg();
    this.initAxis();
    this.drawAxis();
    this.drawBars();
  }

  private initSvg() {
    this.svg = d3.select('svg');
    this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
    this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
    this.g = this.svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  private initAxis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.3);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0, 1]);
    this.x.domain(this.data.map(d => d[this.xAxis]));
    this.y.domain([0, d3Array.max(this.data, d => d[this.yAxis])]);
  }

  private drawAxis() {
    this.g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3Axis.axisBottom(this.x));
    this.g.append('g')
      .attr('class', 'axis axis--y')
      .call(d3Axis.axisLeft(this.y).ticks(10))
      .append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text(this.yLabel);
  }

  private tryParseInt(value: any) {
    const result = +value
    if (isNaN(value)) {
      console.error(`Could not parse ${value} to int`)
    }
    return result
  }

  private drawBars() {

    this.g.selectAll('.bar')
      .data(this.data)
      .enter().append('rect')
      .attr('width', 0)
      .transition()
      .ease(d3all.easeBounce)
      .duration(450)
      .delay((d: any, i: any) => i * 80)
      .attr('class', 'bar')
      .attr('x', (d: any) => this.x(d[this.xAxis]))
      .attr('y', (d: any) => this.y(d[this.yAxis]))
      .attr('width', this.x.bandwidth())
      .attr('height', (d: any) => this.height - this.y(this.tryParseInt(d[this.yAxis])));
  }

}

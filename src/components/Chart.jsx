import * as d3 from 'd3';
import React from 'react';
import './style.css';

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      data: [
        { name: 'Ajinkya', height: 180 },
        { name: 'Sejal', height: 140 },
        { name: 'Jasmine', height: 145 },
        { name: 'Milind', height: 160 },
        { name: 'Swasti', height: 100 },
      ],
    };
  }

  componentDidMount() {
    const MARGIN = { TOP: 40, BOTTOM: 50, LEFT: 50, RIGHT: 10 };
    const WIDTH = 600 - MARGIN.LEFT - MARGIN.RIGHT;
    const HEIGHT = 400 - MARGIN.TOP - MARGIN.BOTTOM;

    const svg = d3
      .select(this.ref.current)
      .append('svg')
      .attr('width', WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr('height', HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .style('background-color', 'white');

    const data = this.state.data;

    const g = svg
      .append('g')
      .attr('transform', `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);

    // LABELS
    g.append('text')
      .text('Height (cm)')
      .attr('y', -35)
      .attr('x', -HEIGHT / 2)
      .attr('text-anchor', 'middle')
      .attr('font-size', '14px')
      .attr('transform', 'rotate(-90)');

    g.append('text')
      .text('Height comparission between friends!')
      .attr('y', -20)
      .attr('x', WIDTH / 2)
      .attr('text-anchor', 'middle')
      .attr('font-size', '16px');

    //y Scale
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.height)])
      .range([HEIGHT, 0]);

    const yAxis = d3.axisLeft(y);

    g.append('g').attr('class', 'y axis').call(yAxis);

    //x Scale
    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, WIDTH])
      .paddingInner(0.3)
      .paddingOuter(0.2);

    const xAxis = d3.axisBottom(x);

    g.append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0, ${HEIGHT})`)
      .call(xAxis)
      .selectAll('text')
      .attr('y', 5)
      .attr('x', -5)
      .attr('text-anchor', 'end')
      .attr('transform', 'rotate(-40)');

    // Bars with Data
    const barChart = g.selectAll('rect').data(data);

    barChart
      .enter()
      .append('rect')
      .attr('fill', 'blue')
      .attr('y', (d) => y(d.height))
      .attr('x', (d) => x(d.name))
      .attr('width', x.bandwidth)
      .attr('height', (d) => HEIGHT - y(d.height));
  }

  render() {
    return (
      <div
        ref={this.ref}
        style={{
          height: 400,
          width: '100%',
          marginRight: '0px',
          marginLeft: '0px',
        }}
      />
    );
  }
}

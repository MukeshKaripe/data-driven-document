const DUMMY_DATA = [
{ id:'d1',value:'1',country:'usa'},
{ id:'d2',value:'10',country:'india'},
{ id:'d3',value:'6',country:'africa'},
{ id:'d4',value:'5',country:'australia'},
{ id:'d5',value:'10',country:'canada'},

];


// .selectAll('p')
// .data(DUMMY_DATA )
// .enter()
// .append('p')
// .text(dta => dta.country);
const xscale = d3.scaleBand().domain(DUMMY_DATA.map(datapoint => datapoint.country)).rangeRound([0,250]).padding(0.1);
const yscale = d3.scaleLinear().domain([0,12]).range([500,0]);


 const container = d3.select('svg')
.classed('class',true)
.style('background','blue');



const bar =  container.selectAll('.bar').data(DUMMY_DATA)
.enter()
.append('rect')
.classed('bar',true)
// .style('background','red')
.style('fill','red')
.attr('width', xscale.bandwidth())
// width is calculated by positions and sizes not by width and height in d3 (browser ugives auto width by d3 libraries.)
// .style('height','auto')
// .style('height',data => (data.value * 15) + 'px' )
.style('height',data => 500 - yscale( data.value))
 .attr('x', data => xscale(data.country))
 .attr('y', data => yscale(data.value)) ;

 setTimeout(() => {
    bar.data(DUMMY_DATA.slice(0,2)).exit().remove();
 },2000);
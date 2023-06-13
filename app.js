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
 
 const container = d3.select('div')
.classed('class',true)
.style('background','blue');



const bar =  container.selectAll('.bar').data(DUMMY_DATA)
.enter()
.append('div')
.classed('bar',true)
.style('background','red')
// .style('width','40px')
// .style('height','auto')
.style('height',data => (data.value * 15) + 'px' )

      ;

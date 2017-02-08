
/**
 * Measures the accuracy as defined by assignment of two percentages.
 *
 * @param {number} userPercent The user's inputed judged percent
 * @param {number} truePercent The actual true percent
 * @return {number} The cm-error of the given percentages.
 */
function logError(userPercent, truePercent) {
  return Math.log2(Math.abs(userPercent - truePercent) + (1/8));
}



var width = 500;
var height = 500;

var x = d3.scaleTime()
    .domain([
      new Date(Date.parse('2014-01-01')),
      new Date(Date.parse('2014-04-01'))
    ])
    .range([0, 300]);

x(new Date(Date.parse('2014-02-01')));
// 103.3811949976841


// x is the d3.scaleTime()
var xAxis = d3.axisBottom(x)
  .ticks(4); // specify the number of ticks

var svg = d3.select('body')
  .append('svg')        // create an <svg> element
    .attr('width', width) // set its dimentions
    .attr('height', height);

svg.append('g')            // create a <g> element
  .attr('class', 'x axis') // specify classes
  .call(xAxis);            // let the axis do its thing

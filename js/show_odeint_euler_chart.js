
function show_odeint_chart(legend_name)
{
  var check_previous_object = document.getElementById('demo_chart2');

  for (var i =check_previous_object.childNodes.length-1; i>=0; i--) 
  {
    check_previous_object.removeChild(check_previous_object.childNodes[i]);
  }

  var object = document.getElementById('demo_chart2');
  var demo_chart = document.createElement('chart');
  demo_chart.innerHTML = "<svg id='chart_space2'></svg>";
  object.appendChild(demo_chart);

  nv.addGraph(function() 
  {
    var chart = nv.models.lineChart()
                  .showLegend(true)   
                  .showYAxis(true)   
                  .showXAxis(true);

    chart.xAxis     
        .axisLabel('x')
        .tickFormat(d3.format(',r'));

    chart.yAxis    
        .axisLabel('y')
        .tickFormat(d3.format('.02f'));

    var myData = get_graph_data();


    d3.select('#chart_space2')    
        .datum(myData)    
        .call(chart);    

    nv.utils.windowResize(function() { chart.update() });

    return chart;
  });


}

function get_graph_data() 
{
  var output_form_text = document.getElementById('output_form').value.split(/\n/);

  var x_array = [];
  var y_array = [];

  for (var i = 0 in output_form_text)
  {
    // skip header
    if (i == 0)
    {
      continue;
    }

    var xy_value = output_form_text[i].split(/,/);

    var casted_x_value = parseFloat(xy_value[0]);
    var casted_y_value = parseFloat(xy_value[1]);

    if (isNaN(casted_x_value))
    {
      continue;
    }

    if (isNaN(casted_y_value))
    {
      continue;
    }

    x_array.push(casted_x_value);
    y_array.push(casted_y_value);

  }

  var return_array = [];

  for (var i = 0 in x_array)
  {
    return_array.push({x: x_array[i], y: y_array[i]});
  }

  return [{values: return_array, key: "euler's method", color: "#ff0000"}];
 
}


function show_odeint_demo_chart(arg_legend_name)
{
  var check_previous_object = document.getElementById('demo_chart1');

  for (var i =check_previous_object.childNodes.length-1; i>=0; i--) 
  {
    check_previous_object.removeChild(check_previous_object.childNodes[i]);
  }

  var object = document.getElementById('demo_chart1');
  var demo_chart = document.createElement('chart');
  demo_chart.innerHTML = "<svg id='chart_space1'></svg>";
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

    var myData = get_demo_graph_data(arg_legend_name);

    d3.select('#chart_space1')    
        .datum(myData)    
        .call(chart);    

    nv.utils.windowResize(function() { chart.update() });

    return chart;
  });


}

function get_demo_graph_data(arg_legend_name) 
{
     var return_array = [];

     var demo_x_array = [];
     var demo_y_array = [];

     demo_x_array = get_x_demo_array(arg_legend_name);
     demo_y_array = get_y_demo_array(arg_legend_name);

    for (var i = 0 in demo_x_array)
    {
      return_array.push({x: demo_x_array[i], y: demo_y_array[i]});
    }

    return [{values: return_array, key: arg_legend_name, color: "#ff0000"}];
 
}


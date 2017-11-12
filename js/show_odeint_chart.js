
function show_odeint_chart(arg_legend_name, arg_element_prefix)
{
  // check previous graph
  var graph_id = arg_element_prefix + "_graph";
  var check_previous_object = document.getElementById(graph_id);

  for (var i =check_previous_object.childNodes.length-1; i>=0; i--) 
  {
    check_previous_object.removeChild(check_previous_object.childNodes[i]);
  }

  var graph_innerHTML = "<svg id=" + arg_element_prefix + "_graph_area></svg>";
  var d3_name = "#" + arg_element_prefix +"_graph_area";
  var output_textbox_name =  arg_element_prefix + "_textarea";


  var graph_position_object = document.getElementById(graph_id);

  var graph_area_object = document.createElement('chart');
  graph_area_object.innerHTML = graph_innerHTML;
  graph_position_object.appendChild(graph_area_object);

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

    var myData = get_graph_data(arg_legend_name, output_textbox_name);

    d3.select(d3_name)    
        .datum(myData)    
        .call(chart);    

    nv.utils.windowResize(function() { chart.update() });

    return chart;
  });


}

function get_graph_data(arg_legend_name, arg_output_textbox_name) 
{

  var output_form_text = document.getElementById(arg_output_textbox_name).value.split(/\n/);

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

  return [{values: return_array, key: arg_legend_name, color: "#ff0000"}];
 
}


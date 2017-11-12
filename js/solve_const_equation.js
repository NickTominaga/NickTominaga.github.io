function solve_const_equation()
{

  var input_equation = String(document.getElementById("equation").value);

  // get last answer --- TODO: one liner! {
  //var last_equation = output_form.value.match(/.*\n.* = .*$/);
  var output_form = document.getElementById("output_log");

  var last_equation = output_form.value.match(/.*[\s\S].*$/);

  var last_answer = "";

  if(last_equation != null)
  {
    var last_result = last_equation[0].match(/=.*/);

    if(last_result != null)
    {
      last_answer = last_result[0].substr(1, last_result[0].length);
    }
  }

  //console.log(last_answer);
  // get last answer --- TODO: one liner! }

  solver = cwrap('calculate_const_equation', 'number', ['string','number']);

  var result = _malloc(65536);

  setValue(result, 0, 'double');

  var return_value = solver(input_equation, result);

  if (return_value == 1)
  {
    output_form.value += "syntax error";
    output_form.value += '\n';
    //console.log("syntax error")
    return;
  }

  var getresult;

  //result_message = "" 

  getresult = getValue(result, 'double');

  var result_text = String(getresult);
  output_form.value += input_equation + ' = ' + result_text;
  output_form.value += '\n';

  _free();

  output_form.scrollTop = output_form.scrollHeight;
  
  var equation_text = document.getElementById("equation");
  equation_text.focus();


  return;

}

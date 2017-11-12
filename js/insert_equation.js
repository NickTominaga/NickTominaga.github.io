
function insert_equation(arg_equation)
{
  var input_equation = document.getElementById("equation");
  var output_form = document.getElementById("output_log");

  // get last answer --- TODO: one liner! {
  //var last_equation = output_form.value.match(/.*\n.* = .*$/);

// if(output_form.value != '')
// {
//     console.log('found');
//     var kkk = output_form.value.match(/([^ =]+)\n$/)[1];
// 
//     console.log(kkk);
// 
//     if(kkk != null)
//     {
//       console.log(kkk);
//     }
// }

  var last_equation = output_form.value.match(/.*[\s\S].*$/);

  var last_answer = "";

  if(last_equation != null)
  {
    var last_result = last_equation[0].match(/=.*/);

    if(last_result != null)
    {
      last_answer = last_result[0].substr(2, last_result[0].length);
    }
  }

  //console.log(last_answer);
  // get last answer --- TODO: one liner! }


  var original_text = input_equation.value

  var caret_position_start = input_equation.selectionStart;
  var caret_position_end = input_equation.selectionEnd;

  if(caret_position_start != caret_position_end)
  {
    var non_selected_text_left = original_text.substr(0, caret_position_start);
    var non_selected_text_right = original_text.substr(caret_position_end, original_text.length);

    input_equation.value = non_selected_text_left + non_selected_text_right;
    original_text = input_equation.value;
    input_equation.selectionStart = caret_position_start;
    input_equation.selectionEnd = caret_position_start;
  }

  var caret_position = input_equation.selectionStart;

  //var deleted_text = original_text.substr(0, (original_text.length-1));
  var carret_left_text = original_text.substr(0, caret_position);
  var carret_right_text = original_text.substr(caret_position, original_text.length);

  if(arg_equation == 'ans')
  {
    arg_equation = last_answer;
    // if not matched
    if (arg_equation == "")
    {
      return;
    }
  }


  if(arg_equation.match(/exp|log2|log10|ln|sqrt|abs|sin|cos|tan|asin|acos|atan|sinh|cosh|tanh|asinh|acosh|atanh|sum|avg|min|max/))
  {
    input_equation.value=carret_left_text + arg_equation + "()" + carret_right_text;

    input_equation.selectionEnd = input_equation.value.length - carret_right_text.length - 1;
    input_equation.selectionStart = input_equation.value.length - carret_right_text.length - 1;
  
    input_equation.focus();
    return;
  }

  input_equation.value=carret_left_text + arg_equation + carret_right_text;

  input_equation.selectionEnd = input_equation.value.length - carret_right_text.length;
  input_equation.selectionStart = input_equation.value.length - carret_right_text.length;
  
  input_equation.focus();
  return;

}

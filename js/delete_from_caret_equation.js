function delete_from_caret_equation()
{

  var input_equation = document.getElementById("equation");

  var original_text = input_equation.value

  if(original_text.length == 0)
  {
    return;
  }

  var caret_position = input_equation.selectionStart;

  if(original_text.length == caret_position)
  {
    return;
  }


  var caret_position_start = input_equation.selectionStart;
  var caret_position_end = input_equation.selectionEnd;

  if(caret_position_start != caret_position_end)
  {
    var non_selected_text_left = original_text.substr(0, caret_position_start);
    var non_selected_text_right = original_text.substr(caret_position_end, original_text.length);

    input_equation.value = non_selected_text_left + non_selected_text_right;
    original_text = input_equation.value;

    input_equation.selectionEnd = caret_position;
    input_equation.focus();

    return;
  }

  //var deleted_text = original_text.substr(0, (original_text.length-1));
  var carret_left_text = original_text.substr(0, caret_position);
  var carret_right_text = original_text.substr(caret_position + 1, original_text.length);

  var deleted_text = carret_left_text + carret_right_text;

  input_equation.value=deleted_text;

  input_equation.selectionEnd = carret_left_text.length;

  input_equation.focus();

  return;

}

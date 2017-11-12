function left_equation()
{

  var input_equation = document.getElementById("equation");

  var original_text = input_equation.value

  if(original_text.length == 0)
  {
    return;
  }

  var caret_position = input_equation.selectionStart;

  if(caret_position == 0)
  {
    return;
  }

  input_equation.selectionEnd = caret_position-1;

  input_equation.focus();

  return;

}

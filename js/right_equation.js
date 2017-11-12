function right_equation()
{

  var input_equation = document.getElementById("equation");

  var original_text = input_equation.value

  if(original_text.length == 0)
  {
    return;
  }

  var caret_position = input_equation.selectionStart;

  if(original_text.length == input_equation.selectionStart)
  {
    input_equation.focus();
    return;
  }

  input_equation.selectionStart = caret_position+1;

  input_equation.focus();

  return;

}

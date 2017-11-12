function end_equation()
{

  var input_equation = document.getElementById("equation");

  var original_text = input_equation.value

  if(original_text.length == 0)
  {
    return;
  }

  input_equation.selectionStart = original_text.length;

  input_equation.focus();

  return;

}

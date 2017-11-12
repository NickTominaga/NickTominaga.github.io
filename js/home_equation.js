function home_equation()
{

  var input_equation = document.getElementById("equation");

  var original_text = input_equation.value

  if(original_text.length == 0)
  {
    return;
  }

  input_equation.selectionEnd = 0;

  input_equation.focus();

  return;

}

function regex_test_20150927()
{
  var output_form = document.getElementById("output_log");

  var test_regex0 = output_form.value.match(/.*\n.* = .*$/);

  var test_regex1 = output_form.value.replace(/\n/g, "").match(/= +([^ ]+)$/)[1]; 
  var test_regex2 = /^(.*\n)*.+ = (.+)$/m; 
  var test_regex3 = output_form.value.match(/^(.*\n)*.+ = (.+)$/m); 
  var test_regex4 = output_form.value.match(/([^ =]+)$/)[1];

  if(test_regex0 != null)
  {
    console.log("regex0");
    console.log(test_regex0);
  }
  if(test_regex1 != null)
  {
    console.log("regex1");
    console.log(test_regex1);
  }
  if(test_regex2 != null)
  {
    console.log("regex2");
    console.log(test_regex2);
  }
  if(test_regex3 != null)
  {
    console.log("regex3");
    console.log(test_regex3);
  }
  if(test_regex4 != null)
  {
    console.log("regex4");
    console.log(test_regex4);
  }

}

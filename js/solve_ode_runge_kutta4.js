function solve_ode_runge_kutta4() {
    var arg_input_equation = String(document.getElementById("ode_equation").value);
    var arg_initial_y = parseFloat(document.getElementById("initial_y").value);
    var arg_initial_x = parseFloat(document.getElementById("initial_x").value);
    var arg_final_x = parseFloat(document.getElementById("final_x").value);
    var arg_dx = parseFloat(document.getElementById("dx").value);
    var output_form = document.getElementById("user_result_textarea");
    solver = cwrap("odeint_runge_kutta4", "number", [ "string", "number", "number", "number", "number", "number" ]);
    var result_array_size = (arg_final_x - arg_initial_x) / arg_dx;
    var result = _malloc(65536);
    for (var i = 0; i < result_array_size; i++) {
        setValue(result + i * 8, 0, "double");
    }
    var return_value = solver(arg_input_equation, arg_initial_y, arg_initial_x, arg_final_x, arg_dx, result);
    if (return_value == 1) {
        output_form.value = "";
        output_form.value = "syntax error";
        return;
    }
    var getresult = [];
    for (var i = 0; i < result_array_size; i++) {
        getresult[i] = getValue(result + i * 8, "double");
    }
    var x_value = arg_initial_x;
    output_form.value = "";
    output_form.value = "x, y";
    output_form.value += "\n";
    for (var i = 0; i < result_array_size; i++) {
        var result_text = String(x_value) + ", " + String(getresult[i]);
        output_form.value += result_text;
        output_form.value += "\n";
        x_value += arg_dx;
    }
    _free();
    return;
}

function get_x_demo_array(arg_legend_name){

switch(arg_legend_name)
{
case  'euler':
return x_euler_demo_array=
[
0,.1,.2,.30000000000000004,.4,.5,.6,.7,.7999999999999999,.8999999999999999,.9999999999999999,1.0999999999999999,1.2,1.3,1.4000000000000001,1.5000000000000002,1.6000000000000003,1.7000000000000004,1.8000000000000005,1.9000000000000006,2.0000000000000004,2.1000000000000005,2.2000000000000006,2.3000000000000007,2.400000000000001,2.500000000000001,2.600000000000001,2.700000000000001,2.800000000000001,2.9000000000000012,3.0000000000000013,3.1000000000000014,3.2000000000000015,3.3000000000000016,3.4000000000000017,3.5000000000000018,3.600000000000002,3.700000000000002,3.800000000000002,3.900000000000002,4.000000000000002,4.100000000000001,4.200000000000001,4.300000000000001,4.4,4.5,4.6,4.699999999999999,4.799999999999999,4.899999999999999,4.999999999999998,5.099999999999998,5.1999999999999975,5.299999999999997,5.399999999999997,5.4999999999999964,5.599999999999996,5.699999999999996,5.799999999999995,5.899999999999995,5.999999999999995,6.099999999999994,6.199999999999994,6.299999999999994,6.399999999999993,6.499999999999993,6.5999999999999925,6.699999999999992,6.799999999999992,6.8999999999999915,6.999999999999991,7.099999999999991,7.19999999999999,7.29999999999999,7.39999999999999,7.499999999999989,7.599999999999989,7.699999999999989,7.799999999999988,7.899999999999988,7.999999999999988,8.099999999999987,8.199999999999987,8.299999999999986,8.399999999999986,8.499999999999986,8.599999999999985,8.699999999999985,8.799999999999985,8.899999999999984,8.999999999999984,9.099999999999984,9.199999999999983,9.299999999999983,9.399999999999983,9.499999999999982,9.599999999999982,9.699999999999982,9.799999999999981,9.89999999999998,9.99999999999998,10.09999999999998,10.19999999999998,10.29999999999998,10.399999999999979,10.499999999999979,10.599999999999978,10.699999999999978,10.799999999999978,10.899999999999977,10.999999999999977,11.099999999999977,11.199999999999976,11.299999999999976,11.399999999999975,11.499999999999975,11.599999999999975,11.699999999999974,11.799999999999974,11.899999999999974,11.999999999999973,12.099999999999973,12.199999999999973,12.299999999999972,12.399999999999972,12.499999999999972,12.599999999999971,12.69999999999997,12.79999999999997,12.89999999999997,12.99999999999997,13.09999999999997,13.199999999999969,13.299999999999969,13.399999999999968,13.499999999999968,13.599999999999968,13.699999999999967,13.799999999999967,13.899999999999967,13.999999999999966,14.099999999999966,14.199999999999966,14.299999999999965,14.399999999999965,14.499999999999964,14.599999999999964,14.699999999999964,14.799999999999963,14.899999999999963,14.999999999999963,15.099999999999962,15.199999999999962,15.299999999999962,15.399999999999961,15.499999999999961,15.59999999999996,15.69999999999996,15.79999999999996,15.89999999999996,15.99999999999996,16.09999999999996,16.19999999999996,16.29999999999996,16.399999999999963,16.499999999999964,16.599999999999966,16.699999999999967,16.79999999999997,16.89999999999997,16.99999999999997,17.099999999999973,17.199999999999974,17.299999999999976,17.399999999999977,17.49999999999998,17.59999999999998,17.69999999999998,17.799999999999983,17.899999999999984,17.999999999999986,18.099999999999987,18.19999999999999,18.29999999999999,18.39999999999999,18.499999999999993,18.599999999999994,18.699999999999996,18.799999999999997,18.9,19,19.1,19.200000000000003,19.300000000000004,19.400000000000006,19.500000000000007,19.60000000000001,19.70000000000001,19.80000000000001,19.900000000000013,

];

break;
case  'runge_kutta4':
var x_runge_kutta4_demo_array=
[
0,                        
0.1,                      
0.2,                      
0.30000000000000004,      
0.4,                      
0.5,                      
0.6,                      
0.7,                      
0.7999999999999999,       
0.8999999999999999,       
0.9999999999999999,       
1.0999999999999999,       
1.2,                      
1.3,                      
1.4000000000000001,       
1.5000000000000002,       
1.6000000000000003,       
1.7000000000000004,       
1.8000000000000005,       
1.9000000000000006,       
2.0000000000000004,       
2.1000000000000005,       
2.2000000000000006,       
2.3000000000000007,       
2.400000000000001,        
2.500000000000001,        
2.600000000000001,        
2.700000000000001,        
2.800000000000001,        
2.9000000000000012,       
3.0000000000000013,       
3.1000000000000014,       
3.2000000000000015,       
3.3000000000000016,       
3.4000000000000017,       
3.5000000000000018,       
3.600000000000002,        
3.700000000000002,        
3.800000000000002,        
3.900000000000002,        
4.000000000000002,        
4.100000000000001,        
4.200000000000001,        
4.300000000000001,        
4.4,                      
4.5,                      
4.6,                      
4.699999999999999,        
4.799999999999999,        
4.899999999999999,        
4.999999999999998,        
5.099999999999998,        
5.1999999999999975,       
5.299999999999997,        
5.399999999999997,        
5.4999999999999964,       
5.599999999999996,        
5.699999999999996,        
5.799999999999995,        
5.899999999999995,        
5.999999999999995,        
6.099999999999994,        
6.199999999999994,        
6.299999999999994,        
6.399999999999993,        
6.499999999999993,        
6.5999999999999925,       
6.699999999999992,        
6.799999999999992,        
6.8999999999999915,       
6.999999999999991,        
7.099999999999991,        
7.19999999999999,         
7.29999999999999,         
7.39999999999999,         
7.499999999999989,        
7.599999999999989,        
7.699999999999989,        
7.799999999999988,        
7.899999999999988,        
7.999999999999988,        
8.099999999999987,        
8.199999999999987,        
8.299999999999986,        
8.399999999999986,        
8.499999999999986,        
8.599999999999985,        
8.699999999999985,        
8.799999999999985,        
8.899999999999984,        
8.999999999999984,        
9.099999999999984,        
9.199999999999983,        
9.299999999999983,        
9.399999999999983,        
9.499999999999982,        
9.599999999999982,        
9.699999999999982,        
9.799999999999981,        
9.89999999999998,         
9.99999999999998,         
10.09999999999998,        
10.19999999999998,        
10.29999999999998,        
10.399999999999979,       
10.499999999999979,       
10.599999999999978,       
10.699999999999978,       
10.799999999999978,       
10.899999999999977,       
10.999999999999977,       
11.099999999999977,       
11.199999999999976,       
11.299999999999976,       
11.399999999999975,       
11.499999999999975,       
11.599999999999975,       
11.699999999999974,       
11.799999999999974,       
11.899999999999974,       
11.999999999999973,       
12.099999999999973,       
12.199999999999973,       
12.299999999999972,       
12.399999999999972,       
12.499999999999972,       
12.599999999999971,       
12.69999999999997,        
12.79999999999997,        
12.89999999999997,        
12.99999999999997,        
13.09999999999997,        
13.199999999999969,       
13.299999999999969,       
13.399999999999968,       
13.499999999999968,       
13.599999999999968,       
13.699999999999967,       
13.799999999999967,       
13.899999999999967,       
13.999999999999966,       
14.099999999999966,       
14.199999999999966,       
14.299999999999965,       
14.399999999999965,       
14.499999999999964,       
14.599999999999964,       
14.699999999999964,       
14.799999999999963,       
14.899999999999963,       
14.999999999999963,       
15.099999999999962,       
15.199999999999962,       
15.299999999999962,       
15.399999999999961,       
15.499999999999961,       
15.59999999999996,        
15.69999999999996,        
15.79999999999996,        
15.89999999999996,        
15.99999999999996,        
16.09999999999996,        
16.19999999999996,        
16.29999999999996,        
16.399999999999963,       
16.499999999999964,       
16.599999999999966,       
16.699999999999967,       
16.79999999999997,        
16.89999999999997,        
16.99999999999997,        
17.099999999999973,       
17.199999999999974,       
17.299999999999976,       
17.399999999999977,       
17.49999999999998,        
17.59999999999998,        
17.69999999999998,        
17.799999999999983,       
17.899999999999984,       
17.999999999999986,       
18.099999999999987,       
18.19999999999999,        
18.29999999999999,        
18.39999999999999,        
18.499999999999993,       
18.599999999999994,       
18.699999999999996,       
18.799999999999997,       
18.9,                     
19,                       
19.1,                     
19.200000000000003,       
19.300000000000004,       
19.400000000000006,       
19.500000000000007,       
19.60000000000001,        
19.70000000000001,        
19.80000000000001,        
19.900000000000013,       
];


return x_runge_kutta4_demo_array
break;
}
}

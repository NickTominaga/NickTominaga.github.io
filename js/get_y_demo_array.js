function get_y_demo_array(arg_legend_name)
{

switch(arg_legend_name)
{
case  'euler':
return y_euler_demo_array=
[0,.1,.1995004165278026,.29750707431192674,.39304072322448735,.4851468226247759,.5729050788138131,.6554386403047809,.7319228590332298,.8015935299679464,.8637545267950129,.9177847573818269,.9631443695243846,.999380144972052,1.0261300278345107,1.0431267421245347,1.050200462291305,1.0472805100611762,1.0343960606316236,1.011675851162315,.9793468944759646,.9377322108212504,.8872476003612646,.82839748863573,.7617698865077476,.688030514953623,.6079161533989297,.522227278062035,.43182006386032884,.337597829793463,.2405020132785039,.14150276361845937,.04158924859113142,-.0582402289883439,-.1569882059792304,-.2536680252371765,-.34731369396625617,-.43698953559967085,-.5217995387707117,-.6008963099621534,-.6734895403821674,-.7388539024685286,-.7963362971218554,-.8453623792559253,-.8854422964639228,-.9161755834617648,-.9372551634048427,-.9484704160983481,-.9497092824446371,-.9409593841006925,-.9223081471584349,-.8939419286121123,-.8561441543408141,-.8092924872107764,-.7538550535928602,-.6903857659985967,-.6195187885694707,-.5419622007184457,-.4584909222345297,-.36993897054039776,-.27719112746599417,-.18117409880095758,-.0828472549566991,.016806954745622646,.11679281838396416,.21611131025978342,.3137700728325858,.4087933320284387,.5002316468519706,.5871713958869531,.6687439058994888,.7441341313338193,.8125887979780999,.8734239294313254,.9260316811694359,.9698864139268749,1.0045499457103775,1.029675929968603,1.0450133161723894,1.0504088582286542,1.0458086456647004,1.031258642283839,1.00690422691026,.9729887408118764,.9298510563148142,.8779221909031457,.8177210006346634,.7498489959026621,.6749843313429221,.5938750299367566,.5073315090126453,.4162184828241776,.3214463226110664,.22396196047065003,.12473942792538968,.024770123721869028,-.07494709189776882,-.1734158774771815,-.26965236546031246,-.3626949926707878,-.4516141079333239,-.5355212608409692,-.6135780788578875,-.6850046440606075,-.7490872858201068,-.8051857115628296,-.8527394043624288,-.8912732234396116,-.920402151611746,-.9398351422572795,-.9493780273573745,-.9489354575585695,-.9385118548719996,-.9182113684901244,-.8882368341624229,-.8488877475276339,-.8005572716523333,-.7437283086755357,-.678968674810148,-.6069254269110641,-.5283183972969602,-.44393300142371095,-.35461239027277863,-.26124902586531484,-.16477576407665384,-.06615653384876746,.033623294069090606,.1335667526191911,.23267523980061638,.3299584963703599,.42444450018634594,.5151891783313656,.6012858399775961,.6818742357416411,.756149153012008,.8233684613673549,.8828605276983441,.9340309269436589,.9763683813887253,1.00944986918363,1.0329448510376122,1.0466185728583957,1.0503344113374782,1.04405523904507,1.027843795395098,1.0018620597737224,.9663696330948519,.9217211439536251,.8683627052947133,.8068274569992412,.7377302389273286,.6617614476414464,.5796801381921795,.49230643989107137,.40051336184964204,.305218070160924,.20737272387903558,.10795496136065404,.007958132025720044,-.09161862886160882,-.18978038322224727,-.28554633125458573,-.3779596112618987,-.46609686029812214,-.549077440105187,-.626072236159394,-.6963119419096654,-.759094745434304,-.8137933417137275,-.8598612004548638,-.8968380268411807,-.9243543606463405,-.9421352677586521,-.9500030872318361,-.9478792064144715,-.9357848464216237,-.9138408501004778,-.8822664746085535,-.8413772006686655,-.791581580389824,-.7333771551496114,-.6673454843252035,-.5941463345443088,-.5145110875151164,-.4292354323020291,-.3391714150635521,-.2452189256887265,-.1483167063948215,-.0494329721254069,.05044426353331413,.15031706025766428,.2491875220763312,.34606776801705225,.4399898026867392,.5300151881614696,.6152444205480159,.6948259175294103,.7679645270939599,.8339294724313058,.8920616536127494,
];
break;
case  'runge_kutta4':
var y_runge_kutta4_demo_array=

[
        0,
          0.09983342011429819,
          0.1986693376953555,
                          0.29552021692551256,
          0.3894183558341459,
          0.47942555525587865,
          0.5646424930065133,
          0.6442177096130197,
                         0.7173561158151353,
                         0.7833269368344313,
                         0.8414710140343369,
                         0.8912073910153474,
          0.9320391183393288,
          0.9635582188840345,
                         0.9854497642156511,
                         0.9974950212496079,
                         0.9995736377592542,
                         0.9916648448955251,
                         0.9738476647024153,
                         0.9463001205548379,
                         0.9092974584079081,
                         0.8632093966303438,
                         0.8084964319007388,
                         0.74570523807697,
                        0.6754632040117151,
                        0.598472164890425,
                        0.5155013897261455,
                        0.42737989507782626,
                        0.3349881617909001,
                         0.2392493375237232,
                         0.14112001296132565,
                         0.04158066387749282,
                         -0.05837414545506386,
                         -0.1577456996221606,
                         -0.2555411109024283,
                         -0.35078323987321963,
                        -0.4425204586647204,
                        -0.5298361593110588,
                        -0.6118579121941098,
                        -0.6877661830718529,
                        -0.7568025215936159,
                        -0.818277139485269,
                        -0.8715758026856455,
                        -0.9161659685702428,
          -0.9516021069410916,
          -0.9775301516172201,
          -0.9936910381468966,
                        -0.9999232922939951,
                        -0.9961646434351874,
                        -0.9824526467474266,
                        -0.9589243079690333,
                        -0.9258147144836463,
                         -0.8834546864047951,
                        -0.83226747113068,
                        -0.7727645143960763,
                         -0.7055403500756137,
                        -0.6312666597978278,
                        -0.5506855617243566,
                        -0.4646021955505806,
                        -0.3738766778159304,
                        -0.27941550790374187,
                        -0.1821625105990662,
                        -0.0830894057034049,
                        0.016813901068338945,
                        0.11654920889854468,
                        0.21511999555948247,
                         0.3115413743340062,
                        0.40484993467807107,
                        0.4941133683004286,
                         0.5784397844788923,
                        0.656986621537614,
                        0.7289690654448354,
                       0.793667891415268,
                       0.8504366501664035,
                       0.8987081270260575,
                        0.9380000093538773,
                        0.9679197056498126,
                        0.9881682681986108,
                        0.9985433800565697,
                        0.99894137653556,
                        0.9893582809863243,
                        0.96988984453184,
                        0.9407305893537511,
                        0.9021718650910285,
                        0.8545989377706861,
                        0.7984871403569893,
                        0.7343971233816018,
                        0.6629692531087987,
                        0.5849172132074311,
                        0.5010208738596192,
                        0.41211849955568386,
                        0.3190983734324521,
                        0.22288992184178172,
                        0.12445442782968066,
                        0.024775426313869683,
                        -0.07515112307200238,
                        -0.17432678727779752,
                        -0.2717606358498874,
                        -0.366479141980688,
                       -0.4575359096667156,
                       -0.5440211297846171,
                        -0.6250706706031874,
                        -0.6998747119019835,
                        -0.7676858364272762,
                         -0.8278264978381866,
                         -0.8796957905257564,
                         -0.9227754536631599,
                         -0.9566350494965716,
                         -0.9809362641369183,
                         -0.995436287880427,
                         -0.9999902412829235,
                         -0.9945526227473467,
                         -0.9791777631606664,
                         -0.9540192830376198,
                         -0.9193285575953086,
                         -0.8754522050951232,
                         -0.8228286235476517,
                         -0.7619836103846729,
                         -0.6935251088650238,
                         -0.6181371337065171,
                         -0.5365729366369852,
                         -0.44964748015200795,
                         -0.3582292946790474,
                         -0.26323180050851497,
                         -0.1656041812001661,
                         -0.06632189965472944,
                         0.033623048388951984,
                        0.13323204604743308,
                        0.2315098331424673,
                        0.3274744505117183,
                        0.4201670514201176,
                        0.5086614820394886,
                         0.5920735352714519,
                         0.669569785452473,
                         0.7403759156675975,
                         0.8037844544691106,
                         0.859161844697384,
                         0.9059547737745881,
                         0.9436957022210695,
                         0.9720075351552829,
                         0.9906073901011978,
                         0.999309423456489,
                         0.9980266873803801,
                         0.9867719985477277,
                         0.965657810089042,
                         0.9348950879959793,
                         0.8947912032188897,
                         0.8457468605178841,
                         0.7882520947533264,
                         0.7228813746194935,
                         0.6502878627432758,
                         0.5711968894991155,
                         0.4863987057476683,
                         0.3967405869104261,
                         0.30311836727377683,
                         0.20646748910893858,
                        0.10775365604200182,
                        0.007963184062516407,
                        -0.091906853419843,
                        -0.1908585880031979,
                        -0.28790332666468615,
                        -0.38207143045432773,
                        -0.47242200280689306,
                        -0.558052290669364,
                         -0.6381067045110285,
                         -0.7117853670912513,
                         -0.7783521055684589,
                         -0.8371418070958252,
                        -0.8875670644089804,
                        -0.9291240450052253,
                        -0.9613975252713535,
                         -0.9840650392607404,
                         -0.9969001006664877,
                         -0.9997744657977367,
                         -0.9926594149482343,
                        -0.9756260393541457,
                        -0.9488445308739222,
                        -0.912582481487508,
                         -0.8672022096057326,
                         -0.813157139904515,
                         -0.7509872728553848,
                         -0.6813137892192714,
                        -0.604832843413675,
                        -0.5223086077678458,
                        -0.43456563716547125,
                         -0.34248063036484044,
                         -0.24697367031464917,
                         -0.14899903098931516,
                         -0.0495356425988673,
           0.050422689558122014,
         0.1498772148685717,
           0.247834216590875,
                         0.34331494074410235,
                         0.4353653754942458,
                         0.5230657833251102,
                         0.6055398907515501,
                        0.681963643754476,
                        0.7515734414562165,
                        0.8136737657680756,
                         0.8676441307771673,
];

return y_runge_kutta4_demo_array
}
}

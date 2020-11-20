
// check same thing in array
// true  -> exist
// false -> not exist
function exist_same_value(a){
  var s = new Set(a);
    return s.size != a.length;
}

function draw_card(n)
{
    var result_array = [];

    while(true)
    {
        // get card from No.201 to No.300
	for (var i = 0; i < n; i++) 
	{
            result_array.push(201 + Math.floor(100 * Math.random()));
	}

	if (exist_same_value(result_array))
	{
	   // remove card and try again
	   result_array.splice(0);
	   continue;
	}

	return result_array;
    }

}

function buy_card(n)
{
    var cards = [];

    for (var i = 0; i < n; i++) 
    {
        cards_in_package = draw_card(3);

        for (var j = 0; j < cards_in_package.length; j++) 
	{
            cards.push(cards_in_package[j]);
	}
    }

    return cards;

}

function monte_curry()
{

    var character_list = 
    { 
    201: "みしらぬネコ ",
    202: "フータ ",
    203: "たぬきち ",
    204: "ぺりこ ",
    205: "ぺりみ ",
    206: "ぺりお",
    207: "きぬよ ",
    208: "レイジ ",
    209: "セイイチ ",
    210: "カイゾー ",
    211: "ゲコ ",
    212: "まめきち",
    213: "ケント ",
    214: "ラケットさん ",
    215: "しずえ ",
    216: "フランクリン ",
    217: "ジングル ",
    218: "レイニー",
    219: "アンチョビ ",
    220: "トラこ ",
    221: "アイダホ ",
    222: "ミランダ ",
    223: "ヤマト ",
    224: "レイチェル",
    225: "クロベエ ",
    226: "マール ",
    227: "ロデオ ",
    228: "チャコ ",
    229: "ハルマキ ",
    230: "ピティエ",
    231: "キング ",
    232: "キャンベラ ",
    233: "アンソニー ",
    234: "タコリーナ ",
    235: "ポーク ",
    236: "マグロ",
    237: "タケル ",
    238: "サブリナ ",
    239: "カジロウ ",
    240: "ナディア ",
    241: "スナイル ",
    242: "ユキ",
    243: "タツオ ",
    244: "ヒャクパー ",
    245: "チャンプ ",
    246: "エレフィン ",
    247: "サム ",
    248: "アイリス",
    249: "ベアード ",
    250: "ドミグラ ",
    251: "パンタ ",
    252: "さっち ",
    253: "ゲンジ ",
    254: "ふくこ",
    255: "ロボ ",
    256: "アイーダ ",
    257: "クマロス ",
    258: "バニラ ",
    259: "アセクサ ",
    260: "エイプリル",
    261: "はじめ ",
    262: "しのぶ ",
    263: "モサキチ ",
    264: "ジュン ",
    265: "ためこ ",
    266: "リチャード",
    267: "ロッタ ",
    268: "ヴァヤシコフ ",
    269: "サラ ",
    270: "マイク ",
    271: "カルロス ",
    272: "リリィ",
    273: "ジンペイ ",
    274: "フララ ",
    275: "ハムスケ ",
    276: "キッズ ",
    277: "サルモンティ ",
    278: "とめ",
    279: "ロビン ",
    280: "セントアロー ",
    281: "オズモンド ",
    282: "ウズメ ",
    283: "ハルク ",
    284: "チーズ",
    285: "パティ ",
    286: "ビス ",
    287: "マリリン ",
    288: "ハムカツ ",
    289: "ショーイ ",
    290: "キャロライン",
    291: "ちゅんのすけ ",
    292: "トロワ ",
    293: "チョモラン ",
    294: "メープル ",
    295: "マコト ",
    296: "シャンティ",
    297: "アポロ ",
    298: "ボン ",
    299: "フランソワ ",
    300: "クリスチーヌ   "
    
    };

    var bought_n = document.getElementById("bought_number").value;

    var result_array = [];

    result = buy_card(parseInt(bought_n));
    console.log(result.sort());

    for (var i = 0; i < bought_n; i++) 
    {
        result_array.push(character_list[result[i]]);
    }

    //console.log("exist? ", exist_same_value(result));

    var example_output_form = document.getElementById("user_result_textarea");

    example_output_form.value = "";

    for (var i=0 in result_array)
    {
      var result_text = String(result[i]) + ", " + String(result_array[i]);
      example_output_form.value += result_text;
      example_output_form.value += '\n';
    }

    return;
}


//曜日取得
var today = new Date();
var week = today.getDay();
//変数宣言
var str;
//条件分岐
switch(week){
case 0: str="今日まで課題シバくDAY"; break;
case 1: str="ｽﾔｧ(¦3[___]"; break;
case 2: str="こちら時間外労働対策本部です"; break;
case 3: str="うぇどねすでー"; break;
case 4: str="木曜日、測量士"; break;
case 5: str="㊎ｷﾗｷﾗ～"; break;
case 6: str="土曜休みだｺﾗｧ!!!!!"; break;
}

document.write(str);

function element(num) {
    // 桁数が1桁だったら先頭に0を加えて2桁に調整する
    var ret;
    if( num < 10 ) { ret = "0" + num; }
    else { ret = num; }
    return ret;
 }
 
function getNow() {
	var time = new Date();
	var year = time.getFullYear();
	var mon = time.getMonth()+1;
	var date = time.getDate();
	var hour = element(time.getHours());
	var min = element(time.getMinutes());
	var sec = element(time.getSeconds());
    var day = time.getDay(); //曜日(0～6=日～土)
    
	//出力
    var youbi = new Array("日","月","火","水","木","金","土")
	var s = year + "/" + mon + "/" + date + "/" + "(" + youbi[day] + ")" +hour + ":" + min + ":" + sec ; 
	return s;
}
function clock() {
    document.getElementById("Realtime").innerHTML = getNow();
 }
setInterval('clock()',500);
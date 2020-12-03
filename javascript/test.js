//課題１
let element = document.getElementById("star");
let star_black = '<span>★</span>'
for(let i=1; i < 5 ; i++){
	element.insertAdjacentHTML("afterbegin", star_black);
}

//課題２
let black = document.getElementsByClassName("black")[0];
let white = document.getElementsByClassName("white")[0];
let star_white = '<span>☆</span>'
let star_white2 = '<br>☆'
let star_black2 = '<br>★'
//上3行
	for (let i=1; i < 5; i++){
		if (i % 2 != 1){
			white.insertAdjacentHTML("beforeend" , star_white);
		}else{
			white.insertAdjacentHTML("beforeend" , star_black);
		}
	}
	white.insertAdjacentHTML("beforeend" , star_black2);
	for (let i=1; i < 5; i++){
		if (i % 2 != 1){
			white.insertAdjacentHTML("beforeend" , star_black);
		}else{
			white.insertAdjacentHTML("beforeend" , star_white);
		}
	}
	white.insertAdjacentHTML("beforeend" , star_white2);
	for (let i=1; i < 5; i++){
		if (i % 2 != 1){
			white.insertAdjacentHTML("beforeend" , star_white);
		}else{
			white.insertAdjacentHTML("beforeend" , star_black);
		}
	}

//下２行
	for(let i=1; i < 5; i++){
		if (i % 2 != 1){
			black.insertAdjacentHTML("beforeend" , star_black);
		}else{
			black.insertAdjacentHTML("beforeend" , star_white);
		}
	}
	black.insertAdjacentHTML("beforeend" , star_white2);
	for (let i=1; i < 5; i++){
		if (i % 2 != 1){
			black.insertAdjacentHTML("beforeend" , star_white);
		}else{
			black.insertAdjacentHTML("beforeend" , star_black);
		}
	}

//課題３
//buttonを押して入力した金額が値段より少ないならお金が足りません
//そうでなければ入力した金額ー値段円おつりがでる


var juice = [
	{name:"コーヒー",price:150},
	{name:"お茶",price:130},
	{name:"オレンジジュース",price:160},
	{name:"水",price:100}
]
	//選択した値(value)を取得

document.getElementById("button").onclick = function(){
	var money = document.getElementById("coin").value;
	var str = document.getElementById("drink").value;
	if(str === "コーヒー"){
		if (money < juice[0].price){
				document.getElementById("text").innerHTML = "お金が足りません";
			}else{
				document.getElementById("text").innerHTML = str + "を購入できました" + "<br>おつりは" + (money-juice[0].price) + "円です";
			}

	}else if(str === "お茶"){
		if (money < juice[1].price){
			document.getElementById("text").innerHTML = "お金が足りません";
		}else{
			document.getElementById("text").innerHTML = str + "を購入できました" + "<br>おつりは" + (money-juice[1].price) + "円です";
		}
	}else if(str === "オレンジジュース"){
		if (money < juice[2].price){
			document.getElementById("text").innerHTML = "お金が足りません";
		}else{
			document.getElementById("text").innerHTML = str + "を購入できました" + "<br>おつりは" + (money-juice[2].price) + "円です";
		}
	}else if(str === "水"){
		if (money < juice[3].price){
			document.getElementById("text").innerHTML = "お金が足りません";
		}else{
			document.getElementById("text").innerHTML = str + "を購入できました" + "<br>おつりは" + (money-juice[3].price) + "円です";
		}
	}
}






var finish = false
var nbCoup = 0
var player=null

function setCase(selectedCase){
	if(!finish && selectedCase.value=="."){
	player = "Joueur";
	selectedCase.value = "X";
	nbCoup++;
	checkWin();
	if(nbCoup<=8 && !finish){
		ordi();
	}
}
}
function findCase(){
  var n
  var trouve=false
  while(!trouve){
    n = Math.floor((Math.random() * 9) + 1);
    if(document.getElementById(n).value=="."){
      trouve = true
    }
  }
  return n
}
function ordi(){
  player="ordi"
  var changer = document.getElementById(findCase());
  changer.value = "O";
  nbCoup++
  checkWin()
}

function checkWin(){
	if (document.getElementById("1").value==document.getElementById("2").value && document.getElementById("2").value==document.getElementById("3").value && document.getElementById("1").value!="."){
	finish=true;
	}else if(document.getElementById("4").value==document.getElementById("5").value && document.getElementById("5").value==document.getElementById("6").value && document.getElementById("4").value!="."){
	finish=true;
	}else if(document.getElementById("7").value==document.getElementById("8").value && document.getElementById("8").value==document.getElementById("9").value && document.getElementById("7").value!="."){
	finish=true;
	}else if(document.getElementById("1").value==document.getElementById("4").value && document.getElementById("4").value==document.getElementById("7").value && document.getElementById("1").value!="."){
	finish=true;
	}else if(document.getElementById("2").value==document.getElementById("5").value && document.getElementById("5").value==document.getElementById("8").value && document.getElementById("2").value!="."){
	finish=true;
	}else if(document.getElementById("3").value==document.getElementById("6").value && document.getElementById("6").value==document.getElementById("9").value && document.getElementById("3").value!="."){
	finish=true;
	}else if(document.getElementById("1").value==document.getElementById("5").value && document.getElementById("5").value==document.getElementById("9").value && document.getElementById("1").value!="."){
	finish=true;
	}else if(document.getElementById("3").value==document.getElementById("5").value && document.getElementById("5").value==document.getElementById("7").value && document.getElementById("3").value!="."){
	finish=true;
	}
	if(finish){
		var elem = document.getElementById("player");
	  elem.innerHTML = player+" gagne la partie !";
    finish=true;
  }
  if(!finish && nbCoup==8){
  	var elem = document.getElementById("player");
  	elem.innerHTML = "Match Nul !";
  	finish=true;
  }


}
 

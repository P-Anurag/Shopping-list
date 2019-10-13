var input = document.getElementById("inp");
var button = document.getElementById("clicked");
var ul = document.getElementsByTagName("ul")[0];


function inputLenght(){
	return input.value.length;
}
function appendElement(){
	var li = document.createElement("li");
	var but = document.createElement("button");
	but.innerHTML = "Delete";
	but.classList.add("buttonClass");
	li.classList.add("liClass");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(but);
	ul.appendChild(li);
	input.value=""
}

function ifButtonClicked(){
	if(inputLenght() > 0 ){
		appendElement();
	}
}

function ifKeyPressed(event){
	if(event.which === 13 && inputLenght() > 0 ){
		appendElement();
	}
}

function removeElt(e){
	var tg = e.target;
	// console.log(tg);
	if(tg.tagName === "BUTTON"){
		ul.removeChild(tg.parentNode);
	}
	else if(tg.tagName === "LI"){
		tg.classList.toggle("done");
	}
}


button.addEventListener("click",ifButtonClicked);
ul.addEventListener("click",removeElt);
input.addEventListener("keypress",ifKeyPressed);


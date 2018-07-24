var searchBtn = document.getElementById("searchBtn");
var previous = document.getElementById("previous");
var next = document.getElementById("next");
var data;

previous.addEventListener("click", function() {
	var text = data.id - 1;
 	if (text != null && text > 0){
		document.getElementById("searchTxt").value = text;
	  var ourRequest = new XMLHttpRequest();
	  ourRequest.open('GET', 'http://40.118.8.76/pokemons/' + text);
	  ourRequest.onload = function() {
	    data = JSON.parse(ourRequest.responseText);
	    renderHTML();
	  };
	  ourRequest.send();
	}
});

next.addEventListener("click", function() {
	var text = data.id + 1;
 	if (text != null && text < 7){
		document.getElementById("searchTxt").value = text;
	  var ourRequest = new XMLHttpRequest();
	  ourRequest.open('GET', 'http://40.118.8.76/pokemons/' + text);
	  ourRequest.onload = function() {
	    data = JSON.parse(ourRequest.responseText);
	    renderHTML();
	  };
	  ourRequest.send();
	}
});

searchBtn.addEventListener("click", function() {
	var text = document.getElementById("searchTxt").value;
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'http://40.118.8.76/pokemons/' + text);
  ourRequest.onload = function() {
    data = JSON.parse(ourRequest.responseText);
    renderHTML();
  };
  ourRequest.send();
});

function renderHTML() {
		var code = document.getElementById("code");
		var normalSprite = document.getElementById("normalSprite");
		var shinySprite = document.getElementById("shinySprite");
		var name = document.getElementById("name");
		var type = document.getElementById("type");
		var hm = document.getElementById("HM");
		code.innerHTML = "";
		normalSprite.innerHTML = "";
		shinySprite.innerHTML = "";
		name.innerHTML = "";
		type.innerHTML = "";
		hm.innerHTML = "";
		code.insertAdjacentHTML('beforeEnd',  data.id);
		var ns = "<img src='" + data.images[0].front + "'></img>";
		normalSprite.insertAdjacentHTML('beforeEnd',  ns);
		var ss = "<img src='" + data.images[1].front_shiny + "'></img>";
		shinySprite.insertAdjacentHTML('beforeEnd',  ss);
		name.insertAdjacentHTML('beforeEnd',  data.name);
		for (i = 0; i < data.types.length; i++)
			type.insertAdjacentHTML('beforeEnd',  "<p>" + data.types[i].type.name + "</p>");
		if (data.moves.HM != null) {
			for (i = 0; i < data.moves.HM.length; i++) {
				hm.insertAdjacentHTML('beforeEnd',  "<p>" + data.moves.HM[i] + "</p>");
			}
		}
		else {
			hm.insertAdjacentHTML('beforeEnd',  "null");
		}
}

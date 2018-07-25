var searchBtn = document.getElementById("searchBtn");
var previous = document.getElementById("previous");
var next = document.getElementById("next");
var data
var text;

previous.addEventListener("click", function() {
  if (text != null && (text > '0' && text < '7')) {
	 if (data.id != null && data.id > 0) {
		text = data.id - 1;
	  var ourRequest = new XMLHttpRequest();
	  ourRequest.open('GET', 'http://40.118.8.76/pokemons/' + text);
	  ourRequest.onload = function() {
	    data = JSON.parse(ourRequest.responseText);
	    renderHTML();
	  };
	  ourRequest.send();
	 }
  }
  else if (text != null) {
    if (data[0].id != null && data[0].id > 0){
  		text = data[0].id - 1;

  	  var ourRequest = new XMLHttpRequest();
  	  ourRequest.open('GET', 'http://40.118.8.76/pokemons/' + text);
  	  ourRequest.onload = function() {
  	    data = JSON.parse(ourRequest.responseText);
  	    renderHTML();
  	  };
  	  ourRequest.send();
  	}
  }
});

next.addEventListener("click", function() {
  if (text != null && (text > '0' && text < '7')) {
	 if (data.id != null && data.id < 6) {
		text = data.id + 1;
	  var ourRequest = new XMLHttpRequest();
	  ourRequest.open('GET', 'http://40.118.8.76/pokemons/' + text);
	  ourRequest.onload = function() {
	    data = JSON.parse(ourRequest.responseText);
	    renderHTML();
	  };
	  ourRequest.send();
	 }
  }
  else if (text != null) {
    if (data[0].id != null && data[0].id < 6){
  		text = data[0].id + 1;

  	  var ourRequest = new XMLHttpRequest();
  	  ourRequest.open('GET', 'http://40.118.8.76/pokemons/' + text);
  	  ourRequest.onload = function() {
  	    data = JSON.parse(ourRequest.responseText);
  	    renderHTML();
  	  };
  	  ourRequest.send();
  	}
  }
});

searchBtn.addEventListener("click", function() {
	text = document.getElementById("searchTxt").value;
	console.log(text);
	if (text > 0 && text < 7) {
	  var ourRequest = new XMLHttpRequest();
	  ourRequest.open('GET', 'http://40.118.8.76/pokemons/' + text);
	  ourRequest.onload = function() {
	    data = JSON.parse(ourRequest.responseText);
	    renderHTML();
	  };
	  ourRequest.send();
	}
	else{
		console.log('http://40.118.8.76/pokemons?name=' + text);
		var ourRequest = new XMLHttpRequest();
	  ourRequest.open('GET', 'http://40.118.8.76/pokemons?name=' + text);
		ourRequest.onload = function() {
	    data = JSON.parse(ourRequest.responseText);
      if (data != null)
	     renderHTML2();
			console.log("wat3");
	  };
	  ourRequest.send();
	}
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

function renderHTML2() {
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
		var ns = "<img src='" + data[0].images[0].front + "'></img>";
		normalSprite.insertAdjacentHTML('beforeEnd',  ns);
		var ss = "<img src='" + data[0].images[1].front_shiny + "'></img>";
		shinySprite.insertAdjacentHTML('beforeEnd',  ss);
		name.insertAdjacentHTML('beforeEnd',  data.name);
		for (i = 0; i < data[0].types.length; i++)
			type.insertAdjacentHTML('beforeEnd',  "<p>" + data[0].types[i].type.name + "</p>");
		if (data[0].moves.HM != null) {
			for (i = 0; i < data[0].moves.HM.length; i++) {
				hm.insertAdjacentHTML('beforeEnd',  "<p>" + data[0].moves.HM[i] + "</p>");
			}
		}
		else {
			hm.insertAdjacentHTML('beforeEnd',  "null");
		}
}

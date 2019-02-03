var genders = {
	Male : 1,
	Female : 2,
	Undefined : 0,

	names : {
		1 : [
			"Pierre",
			"Valentin",
			"Louis",
			"Kévin",
			"Eric",
			"Benjamin",
			"Alexandre",
			"Ronan"
		],
		2 : [
			"Béatrice",
			"Irène",
			"Florence",
			"Clarisse",
			"Nathalie",
			"Audrey",
			"Aurore"
		],
		0 : [
			"Dominique",
			"Camille",
			"Sam"
		]
	}
}

function loadJSON(callback, name) {   
	let xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', name, true);
	xobj.onreadystatechange = function () {
	      if (xobj.readyState == 4 && xobj.status == "200") {
	        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
	        callback(xobj.responseText);
	      }
	};
	xobj.send(null);  
}
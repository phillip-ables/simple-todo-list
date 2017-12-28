console.log("main.js is here");

document.querySelector('#input-text').addEventListener('keypress', function (e) {
	var key = e.which || e.keyCode;
	if (key == 13) {
		alert("the enter key has been keyed!!");
	}
})
console.log("main.js is here");

document.querySelector('#input-text').addEventListener('keypress', function (e) {
	var key = e.which || e.keyCode;
	if (key == 13) {
		// let the games beggin
		console.log("the enter key has been keyed!!");

		var userText = document.getElementById('input-text');
		alert(userText.value)

	}
})
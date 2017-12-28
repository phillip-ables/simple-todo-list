console.log("main.js is here");

document.querySelector('#input-text').addEventListener('keypress', function (e) {
	var key = e.which || e.keyCode;
	if (key == 13) {
		// let the games beggin
		console.log("the enter key has been keyed!!");

		var inputText = document.getElementById('input-text');
		addList(inputText.value);
		inputText.value = "";
		inputText.focus();
	}
})

function addList(userText) {
	var listHolder = document.getElementById('list');
		var listItem = document.createElement("li");
		listItem.innerHTML = userText;
		listHolder.appendChild(listItem);

}
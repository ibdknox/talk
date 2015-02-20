var button = document.getElementById('the-button');
var count = 0;

button.onclick = function() {
	count += 1;
	button.textContent = count;
};
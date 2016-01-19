var button = document.getElementById("test-button");

button.addEventListener("click", countClicks);

var count = 0;
function countClicks() {
	//onclick 
	count++; 
	console.log(count);
}


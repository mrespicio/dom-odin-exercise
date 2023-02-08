// Method two
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

// Method three
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
	alert("Hello World");
	});

// alertFunction() to be used in all previous methods
function alertFunction(){
	alert("Yay! You successfully clicked the button");
}

// Method two w/ function
const btn2F = document.querySelector('#btn2F');
btn2F.onclick = alertFunction;

// Method three w/ function
const btn3F = document.querySelector('#btn3F');
btn3F.addEventListener('click', alertFunction)

// function (e) is callback from addEventListener
// e references the event itself
btn3F.addEventListener('click', function (e){
	e.target.style.background = 'blue';
});
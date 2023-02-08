const container = document.getElementById('container');

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

// attaching listeners to group of nodes
// use querySelectorAll to get nodelist of all items from a matching selector
// add listening to each of them - iterate through the list

// buttons is a nodelist containing all buttons in the container
const buttons = container.querySelectorAll('button');

//use .forEach method to iterate through each button
buttons.forEach((button) => {
	// add a click listener to ever button
	button.addEventListener('click', () => {
		alert(button.id);
	});
});

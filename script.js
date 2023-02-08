const body = document.body;
const container = document.getElementById('container');

//const text = "<h1>Hello World</h>"
//outerContainer.innerHTML = text;

const redText = document.createElement('p');
redText.textContent = "Hi! I'm red!";
redText.style.color = 'red';
container.append(redText);

const blueText = document.createElement('h3');
blueText.textContent = "I'm a blue h3!";
blueText.style.color = 'blue';
container.append(blueText);

const newDiv = document.createElement('div');
newDiv.setAttribute('style', 'border: solid black 1px; background: pink')

const divHeadOne = document.createElement('h1');
divHeadOne.textContent = "I'm in a div";
newDiv.append(divHeadOne);

const divPara = document.createElement('p');
divPara.textContent = "ME TOO!";
newDiv.append(divPara);

container.append(newDiv);
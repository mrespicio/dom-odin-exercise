const text = document.createElement('p');
text.style.color = 'red';

body.text = "Hello I'm Red!";
body.append(text);

const container = document.querySelector('#container');
container.append("I've appended to the container")
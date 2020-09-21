const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// a <p> with red text that says "Hey I'm red!"
const p = document.createElement('p');
p.style.color = 'red';
p.textContent = "Hey I'm red!";
container.appendChild(p);

// an <h3> with blue text that says "I'm a blue h3!"
const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

// a div with a black border and pink background color with the following elements inside of it:

const content2 = document.createElement('div');
content2.style.borderColor = 'black';
content2.style.backgroundColor = 'pink';

    // 1. another <h1> that says "I'm in a div"
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

    // 2. a <p> that says "ME TOO!"
const p2 = document.createElement('p');
p2.textContent = "ME TOO!";

content2.appendChild(h1);
content2.appendChild(p2);

container.appendChild(content2);
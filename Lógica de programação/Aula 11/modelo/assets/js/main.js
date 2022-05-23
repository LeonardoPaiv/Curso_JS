const paragrafors = document.querySelector('.paragrafos');
const ps = paragrafors.querySelectorAll('p');

const styleBody = getComputedStyle(document.body);
const backgroundColorBody = styleBody.backgroundColor;

for (let i of ps) {
    i.style.backgroundColor = backgroundColorBody;
    i.style.color = 'white';
}
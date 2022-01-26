const textElement = document.getElementById("text");
const speedElement = 1.5;
const text = "Contactez-nous";
let index = 1;
let speed = 300 / speedElement;
let longueur = 0;

const writeText = () => {
    textElement.innerText = text.slice(0, index);
    index++;
    if (index > text.length) index = 1;
    myTimeout = setTimeout(writeText, speed);
    longueur++;   
    if (longueur >= 14)
    clearTimeout(myTimeout);
};

writeText();

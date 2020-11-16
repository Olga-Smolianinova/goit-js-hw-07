// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

//  <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const inputRef = document.querySelector('input#font-size-control');
// console.dir(inputRef);
// console.log(inputRef.value)

const textRef = document.querySelector('span#text')
console.log(textRef.style.fontSize);


inputRef.addEventListener('input', event => {

    textRef.style.fontSize = inputRef.value + 'px';
});
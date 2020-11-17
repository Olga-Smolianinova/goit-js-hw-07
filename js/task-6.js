// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputRef = document.querySelector("#validation-input");
// console.dir(inputRef);
// console.log(inputRef);

// console.log(inputRef.value.length);
// console.log(Number(inputRef.getAttribute('data-length')));

inputRef.addEventListener("blur", handleInputBlur);

function handleInputBlur(event) {
  //   console.log(event.target.value.length);
  //   console.log(Number(event.target.getAttribute("data-length")));

  if (
    event.target.value.length ===
    Number(event.target.getAttribute("data-length"))
  ) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}

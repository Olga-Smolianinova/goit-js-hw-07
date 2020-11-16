// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

//  <div id="counter">
//       <button type="button" data-action="decrement">-1</button>
//       <span id="value">0</span>
//       <button type="button" data-action="increment">+1</button>
//     </div>

let counterValue = 0;

// Поиск элемента
const currentValueRef = document.querySelector('#value');
console.log(currentValueRef);

const decrementBtnRef = document.querySelector('[data-action="decrement"]');

const incrementBtnRef = document.querySelector('[data-action="increment"]');


const changeCounterValue = () => currentValueRef.textContent = counterValue;

const decrement = () => counterValue -= 1;
const increment = ()=> counterValue +=1

// Создаем Слушателя
decrementBtnRef.addEventListener('click', () => {
    decrement();
    changeCounterValue();
})

incrementBtnRef.addEventListener('click', () => {
    increment();
   changeCounterValue();
})

// console.log(document)
// console.dir(document)

// Поиск елементов в HTML
// Поиск только одного элемента
// по тегу
const titleRef = document.querySelector("h1")
// console.log(titleRef)
// console.dir(titleRef)

// по class
const titleRefClass = document.querySelector(".page-title")
// console.log(titleRefClass)
// console.dir(titleRefClass)

const linkRef = document.querySelector('.nav-link')
// console.log(linkRef)

// Поиск всех подходящих под критерий элементов
const linkRefAll = document.querySelectorAll('.nav-link')
// console.log(linkRefAll)
// console.dir(linkRefAll)
//==============================================
// // СВОЙСТВА
// // ввод или замена текста
// titleRef.textContent = 'Hello! It is changing title';
// // console.log(titleRef.textContent)

// linkRef.textContent = 'Not Portfolio'
// // console.log(linkRef.textContent)

// // СТИЛИ
// const buttonRef = document.querySelector('.btn');

// buttonRef.style.backgroundColor = 'yellow';
// // console.log(buttonRef.style); // объект инлайн стилей

// linkRef.style.color = 'palevioletred'

// // classlist
// console.log(linkRef.classList)

// // classList.contains
// console.log(linkRef.classList.contains('red'))

// // classList.add
// linkRef.classList.add('nav-nav-link-link')
// console.log(linkRef)

// //classList.remove
// linkRef.classList.remove('nav-nav-link-link')
// console.log(linkRef)

//============================================
// // АТРИБУТЫ
// const imageRef = document.querySelector('img')
// console.dir(imageRef)

// // hasAttribute
// console.log(imageRef.hasAttribute('name'))


// imageRef.alt = 'Empty'
// console.log(imageRef)

// // getAttribute
// console.log(imageRef.alt)
// // or
// console.log(imageRef.getAttribute('alt'))

// //setAttribute
// imageRef.setAttribute('alt', 'Nothing else')
// console.log(imageRef.alt)

// // // removeAttribute
// // imageRef.removeAttribute('alt')
// // console.log(imageRef.alt)

// // attributes
// console.log(imageRef.attributes)

//===========================================
//СОЗДАНИЕ ЭЛЕМЕНТОВ / createElement
const mainTitleRef = document.createElement("h1") //и наполняем содержимое тега:
mainTitleRef.textContent = 'Create Main Title H1'
mainTitleRef.id = 'title'
mainTitleRef.classList.add('main-title')
// console.log(mainTitleRef)

// 1. Создание карточки товара

// const product = {
//   name: 'Сервоприводы',
//   description:
//     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
//   price: 2000,
//   available: true,
// };

// 1. Создание
// 1.1. Создание div
// const containerRef = document.createElement('div')
// containerRef.classList.add('product-card')
// console.log(containerRef)

// 1.2. Создание h2
// const titleProductRef = document.createElement('h2')
// // titleProductRef.textContent = 'Сервоприводы' или:
// titleProductRef.textContent = product.name
// console.log(titleProductRef)
// titleProductRef.classList.add('product-card-name')

// 1.3. Создание p description
// const descriptionRef = document.createElement('p')
// descriptionRef.textContent = product.description
// console.log(descriptionRef)

// 1.4. Создание p price
// const priceRef = document.createElement('p')
// priceRef.textContent = `Цена ${product.price} кредитов`
// console.log(priceRef)

// 2. Вставка эдементов appendChild. Проектируем DOM-дерево
// 2.1. вложили в div - h2, p description, p price

// appendChild (встравдяет только по одному елементу)
// containerRef.appendChild(titleProductRef)
// containerRef.appendChild(descriptionRef)
// containerRef.appendChild(priceRef)

//append (вставляет сразу несколько)
// containerRef.append(titleProductRef, descriptionRef, priceRef)
// console.log(containerRef)

// 3 Добавление элементов в DOM-дерево. Отображение на странице в браузере. В DOMе уже должен быть к-л элемент до начала встравки. В данном примере это <div id="root"></div>
// const cardRootRef = document.querySelector('#root')
// cardRootRef.appendChild(containerRef)
// console.log(cardRootRef)

//4. Делаем тоже самое, только через функцию
import products from './products.js'

// console.table(products)

const CreateProductCard = product => {
    const containerRef = document.createElement('div')
    containerRef.classList.add('product-card')

    const titleProductRef = document.createElement('h2')
    titleProductRef.textContent = product.name

    const inStockClass = product.available?'product-card-name-available':'product-card-name-not-available'

    titleProductRef.classList.add('product-card-name', inStockClass)

    const descriptionRef = document.createElement('p')
    descriptionRef.textContent = product.description

    const priceRef = document.createElement('p')
    priceRef.textContent = `Цена ${product.price} кредитов`

    containerRef.append(titleProductRef, descriptionRef, priceRef)

    return containerRef
    
}
// console.log(CreateProductCard(products[1]))

const productCards = products.map(product => CreateProductCard(product))
// console.log(productCards)

const productListRef = document.querySelector('.js-products')
// console.log(productListRef)

// productListRef.append(...productCards)

// =========================================
// СОБЫТИЯ
const targetBtnRef = document.querySelector('.js-target-btn');
const addListenerBtnRef = document.querySelector('.js-add-listener');
const removeListenerBtnRef = document.querySelector('.js-remove-listener');

//Создаем ссылку для передачи callback-функцией, чтобы работал removeEventListener. Это ссылка на функцию, которую надо поставить обработчиком, чтобы обрабатывала событие.
const doStuffOnClick = () => {
    console.log('Cl-Rem')
}

// // Создаем Слушателя
// addListenerBtnRef.addEventListener('click', () => {
//     targetBtnRef.addEventListener('click', doStuffOnClick);
// });
 
// // Удаляем слушателя
// removeListenerBtnRef.addEventListener('click', () => {
//     targetBtnRef.removeEventListener('click', doStuffOnClick);
// })


// ОБЪЕКТ СОБЫТИЯ
targetBtnRef.addEventListener('click', (event) => {
    console.log(event)
    console.dir(event.target)
})
 //полезное свойство объекта event.target (ссылка на тот элемент, на котором произошло событие)

//  INPUT События
const inputRef = document.querySelector('.js-input');

const nameLabelRef = document.querySelector('.js-button > span')

console.log(nameLabelRef.textContent);

// Тип инпута "input" срабатывает сразу при начале ввода символов. Подходит для текстового поля в "input"
inputRef.addEventListener('input', event => {
    console.log(event);
    console.log('Change working!');
    console.log(event.target.value);

    //в btn 'Зарегистрироваться как Аноним - изменяет Аноним на введеное в input значение
    nameLabelRef.textContent = event.target.value
});

// Тип инпута "change" cрабатывает когда элемент теряет фокус. Подходит для checkbox.
const licenseRef = document.querySelector('.js-license')
const btnRef = document.querySelector('.js-button');
console.log(btnRef);

licenseRef.addEventListener('change', event => {
    console.log(event);
    // меняем значение disabled. Если "Принимаю лицензинное соглашение" checked, button "Зарегистрироваться как Аноним" становиться активна
    btnRef.disabled = !event.target.checked
})

//Тип инпута 'focus' и 'blur'
inputRef.addEventListener('focus', () => {
    console.log('Получил фокус!');
});

inputRef.addEventListener('blur', () => {
    console.log('Потерял фокус!');
})


// //  SUBMIT ФОРМЫ
// const submitRer = document.querySelector('.js-register-form')

// submitRer.addEventListener('submit', event => {
//     event.preventDefault() //вызываем это св-во, чтобы предотварить дефолтное поведение браузера(т.е. перезагрузку страницы)
//     console.dir(event.target);
//     console.log('Submit')

// // чтобы получить доступ к элементам формы:
//     const formElements = event.target.elements
//     console.log(formElements)
//     console.log(formElements.subscription.value)
  
// // чтобы собрать все данные для submit используем конструктор formData, в который передаем ссылку на узел нашей формы:
//     const formRef = event.target;
//     const formData = new FormData(formRef);
//     console.log(formData)
   
//     const submittedData = {};
// // чтобы заполнить formData данными используем:
//     formData.forEach((value, key) => {
//         console.log('value', value);
//         console.log('key', key);

//         // для отправки на backend:
        
//         submittedData[key] = value;
//     });

// console.log(submittedData)

// });


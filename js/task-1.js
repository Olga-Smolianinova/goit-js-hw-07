// Напиши скрипт, который выполнит следующие операции.

// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'

// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

//1 Пока оставляю это решение
const catagoriesRef = document.querySelector('#categories')

// console.log(catagoriesRef)
// console.dir(catagoriesRef)

console.log(`В списке ${catagoriesRef.children.length} категории`)

// 2

console.log(`Категория: ${catagoriesRef.firstElementChild.children[0].textContent}`);

console.log(`Количество элементов: ${catagoriesRef.firstElementChild.children[1].children.length}`);

// через функцию (недоработано)
//1
// const categoriesRef = document.querySelector('#categories')
// console.log(`В списке ${categoriesRef.children.length} категории`)

// console.log(categoriesRef)
// console.dir(categoriesRef)

// // 2
// const headingCollection = categoriesRef.childNodes
// console.log(headingCollection);

// const headingRef = headingCollection.forEach (elm => {
//     console.log(headingCollection)

// })





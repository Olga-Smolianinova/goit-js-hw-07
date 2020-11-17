// Напиши скрипт, который выполнит следующие операции.

// 1. Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'

// 2. Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

//  Способ 1. Решение через querySelector("#categories");
const categoriesRef = document.querySelector("#categories");
console.log(`В списке ${categoriesRef.children.length} категории`);

categoriesRef.childNodes.forEach((elm) => {
  // первый элемент при переборе это пустой #text; прописываем шаг, что если при переборе встречает elm=0 то return, следовательно firstElementChild будет будет след.элемент - (h2).
  if (elm.childNodes.length === 0) {
    return;
  }
  console.log(`Категория: ${elm.firstElementChild.textContent}`);

  console.log(`Количество элементов: ${elm.lastElementChild.children.length}`);
});

// Способ 2. Решение через querySelector(".item");

// const categoriesRef = document.querySelectorAll(".item");

// console.log(`В списке ${categoriesRef.length} категории`);

// categoriesRef.forEach((elm) => {
//   console.log(`Категория: ${elm.firstElementChild.textContent}`);

//   console.log(`Количество элементов: ${elm.lastElementChild.children.length}`);
// });

// Способ 3.  Достучаться черех index элемента.
// const catagoriesRef = document.querySelector("#categories");

// // console.log(catagoriesRef)
// // console.dir(catagoriesRef)

// console.log(`В списке ${catagoriesRef.children.length} категории`);

// console.log(
//   `Категория: ${catagoriesRef.firstElementChild.children[0].textContent}`
// );

// console.log(
//   `Количество элементов: ${catagoriesRef.firstElementChild.children[1].children.length}`
// );

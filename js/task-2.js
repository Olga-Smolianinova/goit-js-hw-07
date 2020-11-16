// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const catalogRef = document.getElementById('ingredients');

const createCatalogOfIngridients = ingredient => {
  const elementName = document.createElement('li');
  elementName.textContent = ingredient;
  return elementName;
};

const catalogOfIngridients = ingredients.map(elm => createCatalogOfIngridients(elm))
console.log(catalogOfIngridients);

catalogRef.append(...catalogOfIngridients)


// // 1. Создание
// const potatoElm = document.createElement('li');
// potatoElm.textContent = ingredients[0];
// // console.log(potatoElm);

// const mushroomsElm = document.createElement('li');
// mushroomsElm.textContent = ingredients[1];
// // console.log(mushroomsElm);

// const garlicElm = document.createElement('li');
// garlicElm.textContent = ingredients[2];
// // console.log(garlicElm);

// const tomatoElm = document.createElement('li');
// tomatoElm.textContent = ingredients[3];
// // console.log(tomatoElm);

// const greensElm = document.createElement('li');
// greensElm.textContent = ingredients[4];
// // console.log(greensElm);

// const seasoningsElm = document.createElement('li');
// seasoningsElm.textContent = ingredients[5];
// // console.log(seasoningsElm);

// // 2. Вставка и добавление эдементов
// catalogRef.append(potatoElm, mushroomsElm, garlicElm, tomatoElm, greensElm, seasoningsElm)






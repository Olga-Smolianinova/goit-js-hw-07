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
// console.log(catalogOfIngridients);

catalogRef.append(...catalogOfIngridients)







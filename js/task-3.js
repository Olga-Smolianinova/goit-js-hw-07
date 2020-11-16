// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const catalogRef = document.querySelector('#gallery');
// console.log(catalogRef);


const createGallery = img => {
//  li
  const elmOfGallery = document.createElement('li')
   // class into li
  elmOfGallery.classList.add('js__gallery__element')

  console.log(elmOfGallery);

// img
  const imgOfGallery = document.createElement('img');
  // console.log(imgOfGallery);

    // атрибуты&class в img
  imgOfGallery.src = img.url;
  imgOfGallery.alt = img.alt;
  // imgOfGallery.width = '300';

  imgOfGallery.classList.add('js__gallery__img')
 
//вставка  img в li
elmOfGallery.append(imgOfGallery)
 
  return elmOfGallery;
};

const imagesGallery = images.map(img => createGallery(img));

catalogRef.append(...imagesGallery);
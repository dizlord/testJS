import { galleryItems } from './gallery-items.js';
// import users from './users.js';

// function getCommonElements(array1, array2) {
//   const result = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       result.push(array1[i]);
//     }
//   }
//   return result;
// }
// console.log(getCommonElements([1, 2, 3, 5], [5, 6, 1]));
// const number = Number(prompt('Enter number'));
// const power = Number(prompt('Enter power'));
// console.log('Number: ' + number + ' in power: ' + power + ' is ' + number ** power);
// let balans = 10000;
// const payment = 2000;

// if (payment < balans) {
//   balans -= payment;
//   console.log(`На счету осталось ${balans} кредитов`);
// }
// else {
//   console.log('На счету недостаточно средств');
// }
// console.log('Операция завершена');
// const book = {
//   title: 'The Last Kingdom',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38
// };
// const keys = Object.keys(book);
// console.log(keys);
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 }
// ];

// function getAllPropValues(propName) {
//   const resultArray = [];
//   for (const product of products) {
//     if (product[propName] === undefined) {
//       return resultArray;
//     }
//     console.log(product[propName]);
//   }
//   return resultArray;
// }
// getAllPropValues('name');
// getAllPropValues('category');
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//     return {
//     category: category,
//     priority: priority,
//     ...data,
//     completed: completed,
//   };
//   // Change code above this line
// }
// console.log(makeTask({}));
// console.log(makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }));
// const bookShelf = {
//   books: ["Последнее королевство"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // []
// bookShelf.addBook("Мгла");
// bookShelf.addBook("Страж снов");
// console.log(bookShelf.getBooks()); // ["Последнее королевство", "Мгла", "Страж снов"]
// bookShelf.removeBook("Мгла");
// console.log(bookShelf.getBooks()); // ["Последнее королевство", "Страж снов"]

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 }
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const { name } of this.potions) {
//       if (name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     let potionIndex = -1;
//       for (let i = 0; i < this.potions.length - 1; i += 1) {
//       if (this.potions[i].name.toLowerCase() === potionName.toLowerCase()) {
//         potionIndex = i;
//         break;
//       }
//     }

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//     updatePotionName(oldName, newName) {
//         let potionIndex = -1;
//         for (const potion of this.potions) {
//             if (potion.name.toLowerCase() === oldName.toLowerCase()) {
//                 potionIndex = 1;
//                 potion.name = newName;
//                 break;
//       }
//     }

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }
//   },
//   // Change code above this line
// };
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     else {
//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//     }
//   }
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((number) => {
//     totalPrice += number;
//   });
//   return totalPrice;
// };
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log('Welcome to the future'.split('').reverse().join(''));
/* Задача. В переменной value лежит число от 0 до 59.
 Определите в какую четверть часа попадает это число(в первую, вторую, третью или четвертую).
*/
// function checkQuarter(value) {
//   if (value > 0 && value < 15) {
//     return `Переменна ${value} попадає в першу четверть`;
//   }
//   if (value >= 15 && value < 30) {
//     return `Переменна ${value} попадає в другу четверть`;
//   }
//   if (value >= 30 && value < 45) {
//     return `Переменна ${value} попадає в третю четверть`;
//   }
//   return `Переменна ${value} попадає в четверту четверть`;
// }
// console.log(checkQuarter(36));
// console.log(checkQuarter(14));
// console.log(checkQuarter(55));
// const words = [
//   'HTML',
//   'CSS',
//   'JS',
//   'React',
//   'JS',
//   'CSS',
//   'JS',
//   'Node.js',
//   'JS',
//   'React',
//   'CSS',
//   'React',
//   'HTML',
//   'Node.js',
// ];

// function unique(arr) {
//   const newArray = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (i === arr.indexOf(arr[i])) {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }
// console.log(unique(words));
// const findLongestWord = string =>
//   string.split(' ').sort((a, b) => b.length - a.length)[0];

// console.log(
//   findLongestWord(
//     'But I must explain to you how all this mistaken idea of denouncing',
//   ),
// ); // denouncing

// Напишите функцию caculculateAverage()
// которая принимает произвольное количество
// аргументов и возвращает их среднее значение.
// Добавить проверку, что аргументы это числа.

// const caculculateAverage = function (...args) {
//   let sumOfNumbers = 0;
//   let lengthArray = 0;
//   for (let arg of args) {
//     if (typeof arg === 'number') {
//       sumOfNumbers += arg;
//       lengthArray += 1;
//     }
//   }
//   if (lengthArray === 0) {
//     return 0;
//   }
//   return sumOfNumbers / lengthArray;
// };
// console.log(caculculateAverage(1, 2, 3, 4, 5, 'hello', 'world', 10, 20, 15)); // 7.5
// console.log(caculculateAverage('hello', 'world')); // 0
// console.log(caculculateAverage('some', 'word', 10)); // 10
// console.log(caculculateAverage('some', 'word', 0, 0, 0)); // 0

// Напишите решение, которое вычисляет сумму
// квадратных корней для всех чисел у которых квадратный корень будет целым числом
// и пушить корни числа в новый массив.

// getNumsSqrt([4, 3, 5, 16, 16, 33, 4, 9]) // поверне [2, 4, 4, 2, 3]

// const getNumsSqrt = function (array) {
//   const resultArray = [];
//   for (let arr of array) {
//     if (Number.isInteger(Math.sqrt(arr))) {
//       resultArray.push(Math.sqrt(arr));
//     }
//   }
//   return resultArray;
// };
// console.log(getNumsSqrt([4, 3, 5, 16, 16, 33, 4, 9]));

// const productBasket = {
//   products: [],
//   getProduct() {
//     return this.products;
//   },
//   addProduct(addedProduct) {
//     const { products } = this;
//     for (const product of products) {
//       if (product.name === addedProduct.name) {
//         product.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...addedProduct,
//       quantity: 1,
//     };

//     this.products.push(newProduct);
//   },
//   removeProduct(productName) {
//     const { products } = this;
//     for (let i = 0; i < products.length; i += 1) {
//       const { name } = products[i];
//       if (name === productName) {
//         products.splice(i, 1);
//         return;
//       }
//     }
//   },
//   increaseProductQuantity(productName, quantity) {
//     const { products } = this;
//     for (const product of products) {
//       if (product.name === productName) {
//         product.quantity += quantity;
//         return;
//       }
//     }
//   },
//   decreaseProductQuantity(productName, quantity) {
//     const { products } = this;
//     for (const product of products) {
//       if (product.name === productName) {
//         if (product.quantity - quantity < 0) {
//           const result = confirm(
//             `Продукта ${productName} меньше в корзине, чем удаляемого количества.
//              Хотите удалить этот продукт из корзины?`,
//           );
//           if (result) {
//             this.removeProduct(productName);
//           } else {
//             console.log(
//               `Колчество продукта ${productName} меньше чем пытаемся удалить. Операция невозможна`,
//             );
//           }
//         } else {
//           product.quantity -= quantity;
//         }
//         return;
//       }
//     }
//   },
//   countCostTotal() {
//     let total = 0;
//     const { products } = this;
//     for (const product of products) {
//       const { price, quantity } = product;
//       total += price * quantity;
//     }
//     return total;
//   },
// };

// productBasket.addProduct({ name: '🍎', price: 50 });
// productBasket.addProduct({ name: '🍇', price: 150 });
// productBasket.addProduct({ name: '🍓', price: 90 });
// productBasket.addProduct({ name: '🍓', price: 90 });
// productBasket.addProduct({ name: '🍋', price: 30 });

// console.table(productBasket.getProduct());

// console.log(productBasket.countCostTotal());

// productBasket.removeProduct('🍓');

// console.table(productBasket.getProduct());

// console.log(productBasket.countCostTotal());

// productBasket.increaseProductQuantity('🍋', 2);

// console.table(productBasket.getProduct());

// console.log(productBasket.countCostTotal());

// productBasket.decreaseProductQuantity('🍋', 1);

// console.table(productBasket.getProduct());

// console.log(productBasket.countCostTotal());

// productBasket.decreaseProductQuantity('🍋', 3);

// console.table(productBasket.getProduct());

// console.log(productBasket.countCostTotal());

// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest('Манго', function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest('Поли', function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

// const filter = function (array, action) {
//   const newArray = [];
//   for (let arr of array) {
//     if (action(arr)) {
//       newArray.push(arr);
//     }
//   }
//   return newArray;
// };

// const bigger = function (val) {
//   return val >= 3;
// };

// const smaller = function (val) {
//   return val < 3;
// };

// console.log(filter([1, 2, 3, 4, 5], bigger));
// console.log(filter([1, 2, 3, 4, 5], smaller));

// numbers = [5, 10, 20, 30, 40, 5];
// doubleNumbers = numbers.map((number, index, array) =>
//   array.indexOf(number) === index ? array[index] * 2 : array[index],
// );
// console.log(doubleNumbers);
// console.log(Math.max(numbers));
// function hello(one, two, ...restArg) {
//   console.log(one, two, restArg);
//   restArg.forEach(num => (num > 3 ? num : 0));
// }
// hello(1, 2, 3, 4);

// const array = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getFriends = function (users) {
//   return users.flatMap(user => user.friends);
// };
// console.log(getFriends(array));

// const getNamesSortedByFriendCount = users =>
//   users
//     .map(user => user.friends)
//     .sort(
//       (firstFriend, secondFriend) => secondFriend.length - firstFriend.length,
//     );
// console.log(getNamesSortedByFriendCount(array));

// function foo(array) {
//   if (Array.isArray(array) && array.length > 0) {
//     return array
//       .sort((firstArr, secondArr) => firstArr - secondArr)
//       .slice(1, array.length - 1)
//       .reduce((total, num) => total + num, 0);
//   } else {
//     return 0;
//   }
// }
// console.log(foo(null));
// console.log(foo([]));
// console.log(foo([4, 2, 3, 10, 11, 5, 7, 2, 8]));

// const litres = litr => Math.floor(litr * 0.5);
// console.log(litres(1.4));

// const invert = arr => arr.map(num => -num);

// console.log(invert([1, 2, 3, 4, 5]));
// console.log(invert([1, -2, 3, -4, 5]));
// console.log(invert([]));
// console.log(invert([0]));

// const betterThanAverage = (classPoints, yourPoints) =>
//   yourPoints >
//   classPoints.reduce((total, point) => total + point, yourPoints) /
//     (classPoints.length + 1);
// // const betterThanAverage = function (classPoints, yourPoints) {
// //     console.log(classPoints.length);
// //     total = classPoints.reduce((total, point) => total + point, yourPoints)
// //     console.log(total);
// //     return yourPoints >= total;
// // };

// console.log(betterThanAverage([2, 3], 5));
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));

// const removeChar = str => str.slice(1, str.length - 1);

// console.log(removeChar('e'));

// const solution = (str, ending) =>
//   ending.length === 0 ? true : str.slice(-ending.length) === ending;

// console.log(solution('abc', 'bc'));
// console.log(solution('abc', 'ab'));
// console.log(solution('abc', ''));

// const XO = str =>
//   str
//     .toLowerCase()
//     .split('')
//     .reduce((total, sym) => (sym === 'x' ? total + 1 : total + 0), 0) ===
//   str
//     .toLowerCase()
//     .split('')
//     .reduce((total, sym) => (sym === 'o' ? total + 1 : total + 0), 0);

// console.log(XO('xo'));

// const XO = function (str) {
//   newArray = str.toLowerCase().split('');

//   console.log(newArray);

//   const numX = newArray.reduce(
//     (total, sym) => (sym === 'x' ? total + 1 : total + 0),
//     0,
//   );
//   console.log(numX);
// };

// console.log(XO('xxOoo'));

// const nbYear = (p0, percent, aug, p) => {
//   let tempYears = p0;
//   let numEntire = 0;
//   let per = percent / 100;
//   per = Number(per.toFixed(3));
//   console.log(per);
//   while (tempYears <= p) {
//     tempYears += tempYears * per + aug;
//     numEntire += 1;
//   }
//   return numEntire;
// };

// console.log(nbYear(1500, 5, 100, 5000));
// console.log(nbYear(1500000, 2.5, 10000, 2000000));

// от GoIT Academy 4 для Все (09:09)
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

// const findBestEmployee = emploees =>
//   Object.entries(emploees).sort((a, b) => b[1] - a[1])[0][0];

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence
// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango
// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

// const cars = [
//   {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: 'Honda',
//     model: 'Accord',
//     type: 'sedan',
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: 'Mazda',
//     model: 'Mazda 6',
//     type: 'sedan',
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: 'Mazda',
//     model: 'CX-9',
//     type: 'suv',
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: 'Toyota',
//     model: '4Runner',
//     type: 'suv',
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Sequoia',
//     type: 'suv',
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: 'Toyota',
//     model: 'Tacoma',
//     type: 'truck',
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'F-150',
//     type: 'truck',
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Fusion',
//     type: 'sedan',
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// function fn(carsArray) {
//   return carsArray.reduce((accum, car) => {
//     if (!accum.hasOwnProperty(car.type)) {
//       accum[car.type] = [car];
//     } else {
//       accum[car.type] = [...accum[car.typr], car];
//     }
//     return accum;
//   }, {});
// }

// console.log(fn(cars));
// { 'suv': [{...}, {...}], 'sedan': [...], 'truck': [...] }

//Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
//Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   // return arr.reduce(()product => (product.hasOwnProperty(prop) ? product.name : ''));
//   return arr.reduce(
//     (accum, product) =>
//       product.hasOwnProperty(prop) ? [...accum, product[prop]] : accum,
//     [],
//   );
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

//Напишите функцию caculculateAverage()
//которая принимает произвольное количество
//аргументов и возвращает их среднее значение.
//Добавить проверку, что аргументы это числа.

// function calculateAverage(...args) {
//   let len = 0;
//   total = args.reduce((total, arg) => {
//     if (typeof arg === 'number') {
//       total += arg;
//       len += 1;
//     }
//   }, 0);
// }

// console.log(calculateAverage(12, 43, 654, 23, 54, 78, 'hello', 'abchsakjbc')); // 144

// напиши функцію

// function calculate(str) {
//   return str
//     .split('')
//     .reduce(
//       (acum, item) =>
//         !acum.hasOwnProperty(item)
//           ? { ...acum, [item]: 1 }
//           : { ...acum, [item]: (acum[item] += 1) },
//       {},
//     );
// }

// console.log(calculate('aaabbbbbccccccc')); // {a:3, b: 5, c:7 }

// class Car {
//   // Change code below this line
//   #price;

//   static MAX_PRICE = 50000;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     console.log(newPrice);
//     console.log(Car.MAX_PRICE);
//     if (!(newPrice > this.MAX_PRICE)) {
//       this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// function logPerson() {
//   console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
// }
// const person1 = { name: 'Михаил', age: 23, job: 'accountant' };
// const person2 = { name: 'Ярослав', age: 39, job: 'CFO' };

// function bind(context, func) {
//   return function (...args) {
//     func.apply(context, args);
//   };
// }

// bind(person1, logPerson)();
// bind(person2, logPerson)();

// const mango = {
//   username: 'Mango',
//   showUsername() {
//     console.log(this);
//     console.log(`My username is: ${this.username}`);
//   },
// };

// const btn = document.querySelector('.js-btn');

// // ✅ Работает
// mango.showUsername();

// // ✅ Не забывайте привязывать контекст методов объекта
// btn.addEventListener('click', mango.showUsername.bind(mango));

//Расставь отсутствующие this в методах объекта account.

// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

//Исправь ошибки которые будут в консоли, чтобы скрипт заработал.

// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action.call(inventory, itemName);
// };

// invokeInventoryAction('Medkit', inventory.add);
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction('Gas mask', inventory.remove);
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

//Получить массив всех умений всех пользователей (поле skills),
// при этом не должно быть повторяющихся умений и они должны быть отсортированы
// в алфавитном порядке.

// const getSortedUniqueSkills = users => {
//   return users
//     .flatMap(user => user.skills)
//     .filter((skill, index, arr) => arr.indexOf(skill) === index)
//     .sort();
// };

// const getSortedUniqueSkills = users => {
//   return users
//     .reduce((arr, user) => {
//       for (const skill of user.skills) {
//         if (!arr.includes(skill)) {
//           arr.push(skill);
//         }
//       }
//       return arr;
//     }, [])
//     .sort();
// };

// const getSortedUniqueSkills = users => [
//   ...new Set(users.flatMap(({ skills }) => skills).sort()),
// ];

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// let counterValue = 0;
// const refs = {
//   incrementBtn: document.querySelector('[data-action="increment"]'),
//   decrementBtn: document.querySelector('[data-action="decrement"]'),
//   textEl: document.querySelector('#value'),
// };

// [decrementBtn, textEl, incrementBtn] =
//   document.querySelector('#counter').children;
// incrementBtn.addEventListener('click', onIncrementClick);
// decrementBtn.addEventListener('click', onDecrementClick);

// function onIncrementClick() {
//   const step = Number(incrementBtn.getAttribute('step'));
//   textEl.textContent = Number(textEl.textContent) + step;
// }

// function onDecrementClick() {
//   const step = decrementBtn.getAttribute('step');
//   textEl.textContent = Number(textEl.textContent) - step;
// }

// class Counter {
//   constructor(
//     initialValue,
//     step,
//     selector,
//     incrementBtnName,
//     decrementBtnName,
//     bgColor,
//   ) {
//     this.wrapper = document.querySelector(selector);
//     this.initialValue = initialValue;
//     this.step = step;
//     this.incrementBtnName = incrementBtnName;
//     this.decrementBtnName = decrementBtnName;
//     this.bgColor = bgColor;
//   }

//   createCounterMarkup() {
//     this.wrapper.style.backgroundColor = this.bgColor;
//     return `
//     <button class="increment">${this.incrementBtnName}</button>
//     <span class="value">${this.initialValue}</span>
//     <button class="decrement">${this.decrementBtnName}</button>
//     `;
//   }

//   handleIncrement = ref => {
//     this.initialValue += this.step;
//     ref.textContent = this.initialValue;
//   };

//   handleDecrement = ref => {
//     this.initialValue -= this.step;
//     ref.textContent = this.initialValue;
//   };
//   addListeners() {
//     const incrementBtnRef = this.wrapper.querySelector('.increment');
//     const spanRef = this.wrapper.querySelector('.value');
//     const decrementBtnRef = this.wrapper.querySelector('.decrement');
//     incrementBtnRef.addEventListener('click', () =>
//       this.handleIncrement(spanRef),
//     );
//     decrementBtnRef.addEventListener('click', () =>
//       this.handleDecrement(spanRef),
//     );
//   }

//   render() {
//     const counterMarkup = this.createCounterMarkup();
//     this.wrapper.insertAdjacentHTML('beforeend', counterMarkup);
//     this.addListeners();
//   }
// }

// const counter = new Counter(
//   100,
//   5,
//   '.counterWrapper',
//   'increment',
//   'decrement',
//   'blue',
// );
// counter.render();
// const counter2 = new Counter(0, 10, '.counterWrapper2', '+1', '-1', 'yellow');
// counter2.render();

// function createMarkup(images) {
//   return images
//     .map(image => {
//       return `
//       <div class="gallery__item">
//         <a class="gallery__link" href="${image.original}">
//         <img
//           class="gallery__image"
//           src="${image.preview}"
//           data-source="${image.original}"
//           alt="${image.description}"
//         />
//         </a>
//         </div>
//     `;
//     })
//     .join('');
// }

// const createdMarkup = createMarkup(galleryItems);
// const galleryEl = document.querySelector('.gallery');

// galleryEl.innerHTML = createdMarkup;

// galleryEl.addEventListener('click', onElementClick);

// function onElementClick(evt) {
//   evt.preventDefault();

//   if (evt.target.nodeName !== 'IMG') {
//     return;
//   }

//   const instance = basicLightbox.create(
//     `
//     <img src="${evt.target.dataset.source}" width="800" height="600">
// `,
//     {
//       onShow: () => {
//         window.addEventListener('keydown', closeByEscape);
//       },
//       onClose: () => {
//         window.removeEventListener('keydown', closeByEscape);
//       },
//     },
//   );
//   function closeByEscape(evt) {
//     if (evt.keyCode === 27) {
//       instance.close();
//     }
//   }
//   instance.show();
// }

let x = {};

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(r => r.json())
  .then(pokemon => {
    console.log(pokemon);

    x = pokemon;
  })
  .catch(error => {
    console.log('Это в блоке catch');
    console.log(error);
  });

setTimeout(() => {
  console.log(x);
}, 5000);

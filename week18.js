//Задание 1
//Создайте функцию makeOne которая записывает в Local Storage ключ games со значением 11. Вызывается функция по кнопке Задание 1.

function makeOne() {
	localStorage.setItem('games', '11')
	console.log('***  ЗАДАНИЕ_1  ***');
	console.log('Ключ games со значением 11 был записана в Local Storage.');
}

//добавьте слушатель события
const Button1 = document.querySelector('.b-1');
Button1.addEventListener('click', makeOne);

//Задание 2
//Создайте функцию makeTwo, которая сохраняет в Local Storage строку "7,6,5". Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 2.

function makeTwo() {
	localStorage.setItem('key2', '7,6,5')
	console.log('***  ЗАДАНИЕ_2  ***');
	console.log('Строка "7,6,5" была записана в Local Storage.');
}

//добавьте слушатель события
const Button2 = document.querySelector('.b-2');
Button2.addEventListener('click', makeTwo);
//Задание 3
//Создайте функцию makeThree, которая сохраняет в Local Storage строку "name=John, age=25". Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 3.

function makeThree() {
	localStorage.setItem('userInfo', 'name=John, age=25');
	console.log('***  ЗАДАНИЕ_3  ***');
	console.log('Строка "name=John, age=25" была записана в Local Storage.');
}

//добавьте слушатель события
const Button3 = document.querySelector('.b-3');
Button3.addEventListener('click', makeThree);
//Задание 4
//Создайте функцию makeFour, которая сохраняет в Local Storage логическое значение true. Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 4.

function makeFour() {
	localStorage.setItem('key4', true);
	console.log('***  ЗАДАНИЕ_4  ***');
	console.log('Логическое значение true было записано в Local Storage.');
}

//добавьте слушатель события
const Button4 = document.querySelector('.b-4');
Button4.addEventListener('click', makeFour);
//Задание 5
//Создайте функцию makeFive, которая сохраняет в Local Storage значение null. Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 5.

function makeFive() {
	localStorage.setItem('key5', null);
	console.log('***  ЗАДАНИЕ_5  ***');
	console.log('Значение null было записано в Local Storage.');
}

//добавьте слушатель события
const Button5 = document.querySelector('.b-5');
Button5.addEventListener('click', makeFive);

//Задание 6
//Создайте функцию makeSix, которая сохраняет в Local Storage по ключу objectSix объект obj = { name: "Алиса", age: 30 }. Вызывается функция по кнопке Задание 6.
//Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()

function makeSix() {
	const obj6 = { name: "Алиса", age: 30 };
	const objString6 = JSON.stringify(obj6);
	localStorage.setItem('objectSix', objString6)
	console.log('***  ЗАДАНИЕ_6  ***');
	console.log('Объект obj был записан в Local Storage.');
}

//добавьте слушатель события
const Button6 = document.querySelector('.b-6');
Button6.addEventListener('click', makeSix);

//Задание 7
//Создайте функцию makeSeven, которая сохраняет в Local Storage по ключу objectSeven объект obj = {
//   city: "Лондон",
//   country: "Великобритания",
//   population: 8900000,
//   language: "английский"
// }. Вызывается функция по кнопке Задание 7.
//Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()

function makeSeven() {
	const obj7 = {
		city: "Лондон",
		country: "Великобритания",
		population: 8900000,
		language: "английский"
	};
	const objString7 = JSON.stringify(obj7);
	localStorage.setItem('objectSeven', objString7);
	console.log('***  ЗАДАНИЕ_7  ***');
	console.log('Объект obj был записан в Local Storage.');
}
const Button7 = document.querySelector('.b-7');
Button7.addEventListener('click', makeSeven);
//добавьте слушатель события

//Задание 8
//Создайте функцию makeEight, которая сохраняет в Local Storage по ключу objectEight объект obj = {
//   fruit: "Яблоко",
//   color: "красное",
//   quantity: 10,
//   price: 199
// }. Вызывается функция по кнопке Задание 8.
//Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()

function makeEight() {
	const obj8 = {
		fruit: "Яблоко",
		color: "красное",
		quantity: 10,
		price: 199
	};
	const objString8 = JSON.stringify(obj8);
	localStorage.setItem('objectEight', objString8);
	console.log('***  ЗАДАНИЕ_8  ***');
	console.log('Объект obj был записан в Local Storage.');
}
const Button8 = document.querySelector('.b-8');
Button8.addEventListener('click', makeEight);
//добавьте слушатель события

//Задание 9
//Создайте функцию makeNine, которая сохраняет в Local Storage по ключу arrayNine массив arr = [1, 2, 3, 4, 5]. Вызывается функция по кнопке Задание 9.
//Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()

function makeNine() {
	const arr9 = [1, 2, 3, 4, 5];
	const arrString9 = JSON.stringify(arr9);
	localStorage.setItem('arrayNine', arrString9);
	console.log('***  ЗАДАНИЕ_9  ***');
	console.log('Массив arr был записан в Local Storage.');
}
const Button9 = document.querySelector('.b-9');
Button9.addEventListener('click', makeNine);
//добавьте слушатель события

//Задание 10
//Создайте функцию makeTen, которая сохраняет в Local Storage по ключу arrayTen массив arr = ["яблоко", "банан", "апельсин"]. Вызывается функция по кнопке Задание 10.
//Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()

function makeTen() {
	const arr10 = ["яблоко", "банан", "апельсин"];
	const arrString10 = JSON.stringify(arr10);
	localStorage.setItem('arrayTen', arrString10);
	console.log('***  ЗАДАНИЕ_10  ***');
	console.log('Массив arr был записан в Local Storage.');
}
const Button10 = document.querySelector('.b-10');
Button10.addEventListener('click', makeTen);
//добавьте слушатель события

//Задание 11
//Создайте функцию makeEleven, которая сохраняет в Local Storage по ключу arrayEleven массив arr = [
// { name: "Алиса", age: 30 },
// { name: "Филин", age: 35 },
// { name: "Кот", age: 40 }
// ]. Вызывается функция по кнопке Задание 11.
//Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()


function makeEleven() {
	const arr11 = [
		{ name: "Алиса", age: 30 },
		{ name: "Филин", age: 35 },
		{ name: "Кот", age: 40 }
	];
	const arrString11 = JSON.stringify(arr11);

	localStorage.setItem('arrayEleven', arrString11);
	console.log('***  ЗАДАНИЕ_11  ***');
	console.log('Массив arr был записан в Local Storage.');
}
const Button11 = document.querySelector('.b-11');
Button11.addEventListener('click', makeEleven);
//добавьте слушатель события

//Задание 12
//Создайте функцию showEleven, которая при нажатии кнопки Задание 12 получит из Local Storage сохраннённый массив arrayEleven. Выведите в practicum12 в формате ключ пробел значение. Вызывается функция по кнопке Задание 12.
//Подсказка: Для преобразования строки в объект используйте метод JSON.parse()

function showEleven() {
	const arrayElevenString = localStorage.getItem('arrayEleven');
	const arrayEleven = JSON.parse(arrayElevenString);
	let output = '';
	for (let i = 0; i < arrayEleven.length; i++) {
		const object = arrayEleven[i];
		for (let key in object) {
			output += `${key} ${object[key]},\n`;
		}
	}
	document.querySelector('.practicum12').textContent = output;
	console.log('***  ЗАДАНИЕ_12  ***');
	console.log(output);
}
const Button12 = document.querySelector('.b-12');
Button12.addEventListener('click', showEleven);
//добавьте слушатель события

//Задание 13
//Создайте функцию showTen, которая при нажатии кнопки Задание 12 получит из Local Storage сохраннённый массив arrayTen. Выведите в элемент с классом practicum13 в формате ключ пробел значение перенос строки. Вызывается функция по кнопке Задание 13.
//Подсказка: Для преобразования строки в объект используйте метод JSON.parse(). Для работы с массивом используйте циклы.

const showTen = () => {
	const arrayTenString = localStorage.getItem('arrayTen');
	if (arrayTenString) {
		const arrayTen = JSON.parse(arrayTenString);
		const resultElement = document.querySelector('.practicum13');
		for (const key in arrayTen) {
			const value = arrayTen[key];
			resultElement.innerHTML += `${key}: ${value}<br>`;
		}
		console.log('***  ЗАДАНИЕ_13  ***');
		console.log(arrayTen);
	} else {
		console.log('Массив arrayTen не найден в Local Storage.');
	}
};
const Button13 = document.querySelector('.b-13');
Button13.addEventListener('click', showTen);
//добавьте слушатель события

//Задание 14
//Создайте функцию showNine, которая при нажатии кнопки Задание 14 получит из Local Storage сохраннённый массив arrayNine. Выведите в элемент с классом practicum14 в формате ключ пробел значение перенос строки. Вызывается функция по кнопке Задание 14.
//Подсказка: Для преобразования строки в объект используйте метод JSON.parse(). Для работы с массивом используйте циклы.

const showNine = () => {
	const arrayNineString = localStorage.getItem('arrayNine');
	if (arrayNineString) {
		const arrayNine = JSON.parse(arrayNineString);
		const resultElement = document.querySelector('.practicum14');
		for (const key in arrayNine) {
			const value = arrayNine[key];
			resultElement.innerHTML += `${key}: ${value}<br>`;
		}
		console.log('***  ЗАДАНИЕ_14  ***');
		console.log(arrayNine);
	} else {
		console.log('Массив arrayNine не найден в Local Storage.');
	}
};

document.querySelector('.b-14').addEventListener('click', showNine);

//Задание 15
//Создайте функцию showEight, которая при нажатии кнопки Задание 15 получит из Local Storage сохраннённый объект objectEight. Выведите в элемент с классом practicum15 в формате значение точка с запятой. Вызывается функция по кнопке Задание 15.

const showEight = () => {
	const objectEightString = localStorage.getItem('objectEight');
	if (objectEightString) {
		const obj8 = JSON.parse(objectEightString);
		const resultElement = document.querySelector('.practicum15');
		for (const key in obj8) {
			const value = obj8[key];
			resultElement.innerHTML += `${value}; `;
		}
		console.log('***  ЗАДАНИЕ_15  ***');
		console.log(obj8);
	} else {
		console.log('Объект objectEight не найден в Local Storage.');
	}
};

document.querySelector('.b-15').addEventListener('click', showEight);

//Задание 16
//Создайте функцию showSeven, которая при нажатии кнопки Задание 16 получит из Local Storage сохраннённый объект objectSeven. Выведите в элемент с классом practicum16 строку: "В Лондоне живёт 8900000 человек", вместо названия города и числа жителей, используйте значения по ключу city и population соответственно. Вызывается функция по кнопке Задание 16.

const showSeven = () => {
	const objectSevenString = localStorage.getItem('objectSeven');
	if (objectSevenString) {
		const obj7 = JSON.parse(objectSevenString);
		const resultElement = document.querySelector('.practicum16');
		const { city, population } = obj7;
		resultElement.textContent = `В городе ${city} живёт ${population} человек`;
		console.log('***  ЗАДАНИЕ_16  ***');
		console.log(`В городе ${city} живёт ${population} человек`);
	} else {
		console.log('Объект objectSeven не найден в Local Storage.');
	}
};

document.querySelector('.b-16').addEventListener('click', showSeven);

//Задание 17
//Создайте функцию showSix, которая при нажатии кнопки Задание 17 получит из Local Storage сохраннённый объект objectSix. Выведите в элемент с классом practicum17 строку: "Привет! Я Алиса. Мне 30 лет.", вместо имени и возраста, используйте значения по ключу name и age соответственно. Вызывается функция по кнопке Задание 17.

const showSix = () => {
	const objectSixString = localStorage.getItem('objectSix');
	if (objectSixString) {
		const obj6 = JSON.parse(objectSixString);
		const resultElement = document.querySelector('.practicum17');
		const { name, age } = obj6;
		resultElement.textContent = `Привет! Я ${name}. Мне ${age} лет.`;
		console.log('***  ЗАДАНИЕ_17  ***');
		console.log(`Привет! Я ${name}. Мне ${age} лет.`);
	} else {
		console.log('Объект objectSix не найден в Local Storage.');
	}
};

document.querySelector('.b-17').addEventListener('click', showSix);

//Задание 18
//Создайте функцию clearLocalStorage, которая очищает весь Local Storage. Вызывается функция по кнопке Задание 18.

const clearLocalStorage = () => {
	window.localStorage.clear();
	console.log('***  ЗАДАНИЕ_18  ***');
	console.log('Local Storage очищен.');
};
document.querySelector('.b-18').addEventListener('click', clearLocalStorage);
//добавьте слушатель события

//Задание 19
//Cоздана форма с одним поле ввода, в которое пользователь может вводить только числа. Создайте массив numbers. Когда пользователь нажимает кнопке Задание 19 число должно добавляться в массив. Массив должен сохраняться в Local Storage с ключем task19. Вызывается функция по кнопке Задание 19. Что произойдёт, если нажать на кнопке трижды?

let numbers = [];

const addToNumbers = () => {
	const numberInput = document.getElementById('numberInput');
	const number = parseInt(numberInput.value);

	if (number) {
		numbers.push(number);
		localStorage.setItem("task19", JSON.stringify(numbers));
		console.log('***  ЗАДАНИЕ_19  ***');
		console.log('Число добавлено в массив numbers и сохранено в Local Storage. Если нажать на кнопку трижды, каждый раз будет добавлено новое число в массив, Local Storage будет обновлён.');
	}
};

document.querySelector('.b-19').addEventListener('click', addToNumbers);

//Задание 20
//Создайте функцию removeLastElement, которая при вызове удаляет из массива numbers последний элемент. После чего массив сохраняется в Local Storage с ключем task19 (используйте массив из задания 19). Вызывается функция по кнопке Задание 20.

const removeLastElement = () => {
	console.log('***  ЗАДАНИЕ_20  ***');
	if (numbers.length > 0) {
		numbers.pop();
		localStorage.setItem("task19", JSON.stringify(numbers))
		console.log('Последний элемент удален из массива numbers и сохранен в Local Storage.');
	} else {
		console.log('Массив numbers пуст.');
	}
};
document.querySelector('.b-20').addEventListener('click', removeLastElement);
//добавьте слушатель события

//Задание 21
//Создайте функцию addToCart, которая при нажатии кнопки Задание 21 получает из Local Storage сохранённый массив cartItems. Затем добавляет новый элемент в массив, представляющий товар, введённый вами в поле ввода. Массив cartItems должен сохраняться в Local Storage с ключом task21. Вызывается функция по кнопке Задание 21.
//Подсказка: необходимо проверить существует ли значение и не является пустым. Если значение в хранилище есть, то оно преобразуется из JSON в массив. В противном случае, устанавливается пустой массив.

const addToCart = () => {
	const productInput = document.getElementById('productInput');
	const product = productInput.value;

	if (product.trim() !== '') {
		let cartItems = localStorage.getItem('cartItems');
		cartItems = cartItems ? JSON.parse(cartItems) : []; //код из подсказки

		//Ваш код
		cartItems.push(product);
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
		console.log('***  ЗАДАНИЕ_21  ***');
		console.log(cartItems);
		console.log(`Товар "${product}" добавлен в корзину и сохранен в Local Storage.`);
	} else {
		console.log('***  ЗАДАНИЕ_21  ***');
		console.log('Введите название товара.');
	}
};

document.querySelector('.b-21').addEventListener('click', addToCart);

//Задание 22
//Создайте функцию removeFromCart, которая при нажатии кнопки Задание 22 получает из Local Storage сохранённый массив cartItems. Затем удаляет последний элемент из массива. Массив cartItems должен сохраняться в Local Storage с ключом cartItems. Вызывается функция по кнопке Задание 22.
//Подсказка: необходимо проверить, существует ли значение и не является ли оно пустым. Это может вызвать ошибку, если cartItems не существует в Local Storage или является пустым.

const removeFromCart = () => {
	console.log('***  ЗАДАНИЕ_22  ***');
	let cartItems = localStorage.getItem('cartItems');
	if (cartItems && cartItems !== "") {
		cartItems = JSON.parse(cartItems);
		if (cartItems.length > 0) {
			cartItems.pop();
			localStorage.setItem("cartItems", JSON.stringify(cartItems));
			console.log(cartItems);
			console.log('Последний элемент удален из массива cartItems и массив сохранен в Local Storage.');
		} else {
			console.log('Массив cartItems пуст.');
		}
	} else {
		console.log('Массив cartItems не существует в Local Storage или является пустым.');
	}
};


document.querySelector('.b-22').addEventListener('click', removeFromCart);

//Задание 23
//Создайте функцию showCart, которая при нажатии кнопки Задание 23 получает из Local Storage сохранённый массив cartItems. Выведите элементы массива в элемент с классом practicum23. Вызывается функция по кнопке Задание 23.

const showCart = () => {
	console.log('***  ЗАДАНИЕ_23  ***');
	//Ваш код
	const cartItems = localStorage.getItem('cartItems');
	if (cartItems && cartItems !== '[]') {
		const parsedCartItems = JSON.parse(cartItems);
		const practicum23 = document.querySelector('.practicum23');

		practicum23.innerHTML = '';

		parsedCartItems.forEach(item => {
			const itemElement = document.createElement('p');
			itemElement.textContent = item;
			practicum23.appendChild(itemElement);
		});
		console.log(cartItems);
		console.log('Элементы массива cartItems выведены на страницу.');
	} else {
		console.log('Массив cartItems не существует в Local Storage или является пустым.');
	}
};

document.querySelector('.b-23').addEventListener('click', showCart);

//Задание 24
//Создайте функцию updateCartCount, которая при нажатии кнопки Задание 24 обновляет количество товаров в корзине. Получите из Local Storage сохранённый массив cartItems и выведите количество товаров в элемент с классом practicum24 (например: "Количество товаров в корзине 3"). Вызывается функция по кнопке Задание 24.

const updateCartCount = () => {
	console.log('***  ЗАДАНИЕ_24  ***');
	//Ваш код
	const cartItems = localStorage.getItem('cartItems');
	if (cartItems) {
		const cartItemsCount = JSON.parse(cartItems).length;
		const practicum24 = document.querySelector('.practicum24');
		practicum24.textContent = `Количество товаров в корзине: ${cartItemsCount}`;
		console.log(`Количество товаров в корзине: ${cartItemsCount}`);
	} else {
		console.log('Массив cartItems не существует в Local Storage.');
	}

};

document.querySelector('.b-24').addEventListener('click', updateCartCount);

//Задание 25
//Создайте функцию clearCart, которая при нажатии кнопки Задание 25 очищает весь массив cartItems в Local Storage. Вызывается функция по кнопке Задание 25.

const clearCart = () => {
	console.log('***  ЗАДАНИЕ_25  ***');
	//Ваш код
	localStorage.removeItem('cartItems');
	console.log('Корзина очищена.');
};

document.querySelector('.b-25').addEventListener('click', clearCart);

//Задание 26
//При загрузке страницы установите cookie с именем "username" и значением "Кот Учёный". Выведите сообщение в консоль, подтверждающее успешное создание cookie.

//Ваш код
document.addEventListener('DOMContentLoaded', function () {
	document.cookie = 'username=Кот Учёный';
	console.log('***  ЗАДАНИЕ_26  ***');
	console.log('Cookie с именем "username" и значением "Кот Учёный" успешно установлен.');
});


//Задание 27
//Допишите функцию getCookie, которая принимает имя cookie. Функция должна получать значение cookie с указанным именем, возвращать его и записывать в элемент с классом practicum27. Если cookie с указанным именем не найден, функция должна возвращать пустую строку. Вызывается функция по кнопке Задание 27. Выведите куку с именем "username".

const getCookie = (name) => {
	console.log('***  ЗАДАНИЕ_27  ***');
	const cookieContainer = document.querySelector('.practicum27');
	const cookies = document.cookie.split('; ');
	for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i].split('=');
		if (cookie[0] === name) {
			const value = cookie[1] || '';
			//Ваш код
			cookieContainer.textContent = `Значение cookie с именем "${name}": ${value}`;
			console.log(`Значение cookie с именем "${name}": ${value}`);
			return value;
		}
	}
	cookieContainer.textContent = `Cookie с именем "${name}" не найден.`;
	return '';
};

document.querySelector('.b-27').addEventListener('click', () => {
	getCookie('username');
});

//Задание 28
//Создайте функцию checkCookie, которая будет проверять, существует ли cookie с именем "username". Если cookie существует, выведите его значение в консоль. В противном случае выведите сообщение "Cookie с именем 'username' не найден." Вызывается функция по кнопке Задание 28.
//Подсказка: используйте функцию getCookie

const checkCookie = () => {
	console.log('***  ЗАДАНИЕ_28  ***');
	const username = getCookie('username');
	if (username !== '') {
		//Ваш код 
		console.log(username);
	} else {
		//Ваш код 
		console.log("Cookie с именем 'username' не найден.");
	}
};

// добавьте слушатель события
document.querySelector('.b-28').addEventListener('click', checkCookie);

//Задание 29
//Создайте функцию setCookie, которая принимает имя и значение cookie. Функция должна устанавливать cookie с указанным именем и значением. После установки cookie, выведите сообщение в консоль. Вызывается функция по кнопке Задание 29.

const setCookie = (name, value) => {
	document.cookie = `${name}=${value}`;
	//Ваш код
	console.log('***  ЗАДАНИЕ_29  ***');
	console.log(`Cookie с именем "${name}" и значением "${value}" установлен.`);
};

document.querySelector('.b-29').addEventListener('click', () => {
	setCookie('testCookie', 'Hello');
});

//Задание 30
//Создайте функцию deleteCookie, которая принимает имя cookie. Функция должна удалять cookie с указанным именем. После удаления cookie, выведите сообщение в консоль. Вызывается функция по кнопке Задание 30.

const deleteCookie = (name) => {
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
	//Ваш код
	console.log('***  ЗАДАНИЕ_30  ***');
	console.log(`Cookie с именем "${name}" удален.`);
}; 


document.querySelector('.b-30').addEventListener('click', () => {
	deleteCookie('testCookie');
});

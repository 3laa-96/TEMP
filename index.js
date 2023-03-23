// Defined variables
let todoList = document.getElementById("todoList");
let dateInput = document.getElementById("dateInput");
let todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
let total = 0;
let todoS = [];

// let deleteBtn = document.createElement("button");

// Render function
function render() {
  document.getElementById("todoList").innerHTML = "";
  todoS.forEach(function (todo) {
    const element = document.createElement("ul");
    element.textContent = `${todo.todoName} ${todo.todoDate}`;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.style = "margin-left:10px";
    deleteBtn.id = todo.id;
    todoList.appendChild(element);
    element.appendChild(deleteBtn);
    deleteBtn.onclick = deleteFunction;
  });
}

// Add todo (push objects to array)
addTodoBtn.addEventListener("click", function addTodo() {
  let id = new Date().getTime();
  todoS.push({
    todoName: todoInput.value,
    todoDate: dateInput.value,
    id: id,
  });
  render();
});

// Delete function
function deleteFunction(event) {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;
}

// 1:01:56

// function displayReceipt(cartItems) {
//   cartItems.forEach(function (item) {
//     total += item.price;
//     let cart = document.createElement("div");
//     cart.innerText = `${item.name} $ ${item.price} * ${item.quantity}`;
//     receipt.appendChild(cart);
//   });
//   render("cart total =$" + total);
// }

// cmToInch.addEventListener("click", function () {
//   total = textInput.value * 0.393701;
//   render(total);
// });
// inchToCm.addEventListener("click", function () {
//   total = textInput.value * 2.54;
//   render(total);
// });

// // const testing = "exam";1
// // let array = ["a", "b", "c"];
// // let numArr = [1, 2, 3, 4];
// // let newParm = "";
// // let counter = 0;
// // let total = 0;
// // const upBtn = document.getElementById("up-btn");
// // const downBtn = document.getElementById("down-btn");
// // let countDiv = document.getElementById("count-div");
// // const todoBtn = document.getElementById("todo");
// // const divStart = document.getElementById("divStart");
// // const cmToInch = document.getElementById("cmToInch");
// // const inchToCm = document.getElementById("inchToCm");
// // const textInput = document.getElementById("textInput");

// // render function

// divStart.addEventListener("click", function () {
//   let element = textInput.value;
//   let div = document.createElement("div");
//   div.innerText = element;
//   document.body.appendChild(div);
// });

// //
// function toUpper(string) {
//   string.forEach(function (letters) {
//     letters.toUpperCase();
//   });
//   console.log(array);
// }
// toUpper(array);
// let upEL = document.createElement("button");
// upEL.innerText = "up";
// document.body.appendChild(upEL);

// upBtn.addEventListener("click", function up() {
//   countDiv.innerText = counter += 1;
// });
// downBtn.addEventListener("click", function down() {
//   countDiv.innerText = counter -= 1;
// });
// function arrayDouble() {
//   array.forEach(function (arr) {
//     array.push(arr);
//   });
//   console.log(array);
// }
// arrayDouble();
// function arraySum() {
//   numArr.forEach(function (num) {
//     total += num;
//   });
//   console.log(total);
// }
// arraySum();

// todoBtn.addEventListener("click", function () {
//   todoBtn.innerHTML = "DONE";
// });

// PRACTICING ON OBJECTS
// const band = {
//   vocals: "robert plant",
//   guitar: "jimmy page",
//   bass: "john paul jones",
//   drums: "john bonHam",
// };
// console.log(Object.values(band));
// for (let job in band) {
//   console.log(`on ${job}, there is ${band[job]}`);
// }

// let person = new Object();
// person.name = "alaa";
// person.age = 26;
// person.profession = "isf";
// person.updateProfession = function () {
//   return ` ${person.profession} and web developer`;
// };
// console.log(person);
// console.log(person.updateProfession());

// let total1 = 0;
// let totalOfCart = 0;
// const cartArray = [
//   { name: "apple", price: 4, quantity: 2 },
//   { name: "orange", price: 2, quantity: 4 },
// ];
// // function cartTotal(cArray) {
// //   cArray.forEach(function (item) {
// //     total1 += item.price * item.quantity;
// //   });
// //   console.log(total1);
// // }

// // cartTotal(cartArray);

// function displayReceipt(array) {
//   array.forEach(function (item) {
//     total = item.price * item.quantity;
//     console.log(`${item.name} $ ${item.price}* ${item.quantity} = ${total}`);
//     totalOfCart += total;
//   });
//   console.log(`total price of items in cart = ${totalOfCart}`);
// }
// displayReceipt(cartArray);

let totalX = 0;
let groceryCart = [
  { name: "apple", price: 5 },
  { name: "orange", price: 4 },
  { name: "eggs", price: 10 },
];
function createCart(cart) {
  cart.forEach(function (items) {
    const id = new Date().getTime();
    groceryCart.push({ id: id });
    let element = document.createElement("div");
    element.innerText = `${items.name} `;
    document.body.appendChild(element);
    const addToCartBtn = document.createElement("button");
    addToCartBtn.innerText = "ADD";
    addToCartBtn.id = items.id;
    element.appendChild(addToCartBtn);
  });
}
createCart(groceryCart);

function toUpperCase(str) {
  return str.toUpperCase();
}
// const temps = [1, -2, 3, -4, 5, -6];
// // const freezingTemp = temps.filter((temp) => temp < 0);
// // temps = freezingTemp;
// function testTemps(temp) {
//   const tempsToTest = temp.filter(function (temp) {
//     return temp < 0;
//   });
//   return tempsToTest;
// }
// testTemps([-1, -2, 3, 5, -6]);
// // 1:07:59

function aboveFreezing(temps) {
  // Assume we're using Fahrenheit
  const tempsAboveFreezing = temps.filter(function (temp) {
    return temp > 32;
  });

  return tempsAboveFreezing;
}

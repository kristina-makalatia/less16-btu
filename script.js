

// cookies, localstorage, sessionstorage

// const form = document.getElementById("login");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let checkbox = document.getElementById("save");

//   if (checkbox.checked) {
//     let usernameFieldValue = document.getElementById("username").value;
//     Cookies.set("savedUsername", usernameFieldValue);
//   } else {
//     Cookies.remove("savedUsername");
//   }

//   this.submit();
// });

// let saved_username = Cookies.get("savedUsername");

// if (saved_username) {
//   document.getElementById("username").value = saved_username;
//   document.getElementById("save").checked = true;
// }

// ------
// to do + localstorage
//localstorag-ის მნიშვნელობა არის ტექსტი,
//ანუ შეგვიძლია ჩავვდოთ მასივი ან ობიქტი უბრალოდ მოგვიწევს
//ჯადაყვანა სტრინგად Json ის საშუალებით

// const btn = document.getElementById("btn-add");
// const ul = document.getElementById("todoul");

// // events
// btn.addEventListener("click", handleClick);
// // 4.
// // გვერდის ჩატვირთვის დროს ამოწმებს არის რამე ლოკალში თუ არა
// document.addEventListener("DOMContentLoaded", loadToDoItems);

// // 1.
// function handleClick() {
//   // console.log(this); //button
//   const inputValue = this.previousElementSibling.value.trim();
//   // console.log(inputValue);

//   if (inputValue) {
//     createToDo(inputValue);
//     savetoStorage(inputValue);
//     this.previousElementSibling.value = "";
//   }
// }

// // 2.
// function createToDo(text) {
//   const li = document.createElement("li");
//   li.innerText = text;
//   ul.appendChild(li);
// }

// // 3.
// function savetoStorage(todo) {
//   const todoElements = JSON.parse(localStorage.getItem("tasks")) || [];
//   localStorage.setItem("tasks", JSON.stringify([...todoElements, todo]));
//   // ყველა აქამდე ჩაწერილი + ახალი
// }

// // 5.
// function loadToDoItems() {
//   const toDoLocalArray = JSON.parse(localStorage.getItem("tasks"));
//   console.log(toDoLocalArray); // ['item1', 'item2', 'item3', 'item4']

//   if (toDoLocalArray) {
//     toDoLocalArray.forEach((element) => createToDo(element));
//   }
// }

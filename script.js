// cookies, localstorage, sessionstorage

const form = document.getElementById("login");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let checkbox = document.getElementById("save");

  if (checkbox.checked) {
    let usernameFieldValue = document.getElementById("username").value;
    Cookies.set("savedUsername", usernameFieldValue);
  } else {
    Cookies.remove("savedUsername");
  }

  form.submit();
});

let saved_username = Cookies.get("savedUsername");

if (saved_username) {
  document.getElementById("username").value = saved_username;
  document.getElementById("save").checked = true;
}

// ------
// to do + localstorage
//localstorag-ის მნიშვნელობა არის ტექსტი,
//ანუ შეგვიძლია ჩავვდოთ მასივი ან ობიქტი უბრალოდ მოგვიწევს
//ჯადაყვანა სტრინგად Json ის საშუალებით

const btn = document.getElementById("btn-add");
const ul = document.getElementById("todoul");

// // events
btn.addEventListener("click", handleClick);
// // 4.
// გვერდის ჩატვირთვის დროს ამოწმებს არის რამე ლოკალში თუ არა
document.addEventListener("DOMContentLoaded", loadToDoItems);

// // 1.
function handleClick() {
  // console.log(this); //button
  const inputValue = this.previousElementSibling.value.trim();
  // console.log(inputValue); //input value

  if (inputValue) {
    createToDo(inputValue);
    savetoStorage(inputValue);
    this.previousElementSibling.value = "";
  }
}

// // 2.
function createToDo(text) {
  const li = document.createElement("li");
  li.innerText = text;
  ul.appendChild(li);
}

// // 3.
function savetoStorage(todo) {
  const todoElements = JSON.parse(localStorage.getItem("tasks")) || [];
  localStorage.setItem("tasks", JSON.stringify([...todoElements, todo]));
  // ყველა აქამდე ჩაწერილი + ახალი
}

// // 5.
function loadToDoItems() {
  const toDoLocalArray = JSON.parse(localStorage.getItem("tasks"));
  console.log(toDoLocalArray); // ['item1', 'item2', 'item3', 'item4']

  if (toDoLocalArray) {
    toDoLocalArray.forEach((element) => createToDo(element));
  }
}

//
const formEl = document.getElementById("resgitration");

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  let errors = {};
  console.log(this); //mtliani forma

  //username
  let usernameValue = document.getElementById("usernamefield").value;
  if (usernameValue === "") {
    errors.username = "Username field can not be empty";
  }

  //pasw
  let passw1 = document.getElementById("passwordfield").value;
  let passw2 = document.getElementById("passwordfield2").value;

  if (passw1 === "") {
    errors.passw = "Password field can not be empty";
  }

  if (passw1 != passw2) {
    errors.passw2 = "Passwords do not match";
  }

  //
  let agree = document.getElementById("agree").checked;
  if (!agree) {
    errors.check = "You must agree our terms and conditions";
  }

  //
  let gender = false;

  formEl.querySelectorAll(".radio-el").forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "Select Your gender";
  }

  console.log(errors);

  formEl.querySelectorAll(".error-text").forEach((el) => {
    el.textContent = " ";
  });

  for (let item in errors) {
    // console.log(item);
    let pErrorElement = document.getElementById("error-" + item);
    console.log(pErrorElement);

    if (pErrorElement) {
      pErrorElement.textContent = errors[item];
    }
  }

  if (Object.keys(errors).length === 0) {
    formEl.submit();
  }
});

// email regex
let emailInput = document.getElementById("emailfield");

function validateEmail() {
  let emailValue = document.getElementById("emailfield").value;
  let emailError = document.getElementById("emailError");
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailRegex.test(emailValue)) {
    emailError.innerText = "Your Email is valid";
    emailError.style.color = "green";
  } else {
    emailError.innerText = "Your Email is Invalid";
    emailError.style.color = "red";
  }

  if (emailValue == "") {
    emailError.innerHTML = " ";
  }
}

emailInput.addEventListener("keyup", validateEmail);

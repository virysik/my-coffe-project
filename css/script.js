function enjoy() {
  let name = prompt("What is your name?🙂");
  let mail = prompt("What is your email adress?🙂");
  let sort = prompt("What is your fauvorite sort of coffee😃?");

  if (name.length > 0) {
    alert(
      "Wellcome " +
        name +
        "😊! We'll be in contact with you by email.✨ Meanwhile enjoy your " +
        sort +
        "☕️"
    );
  } else {
    alert("Have a nice day!☀️");
  }
}

let coffeeButton = document.querySelector("button");
coffeeButton.addEventListener("click", enjoy);

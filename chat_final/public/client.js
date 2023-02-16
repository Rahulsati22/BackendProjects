
//to use socket io on client side we have to call this function
const connection = io();

// taking the input container
const input_container = document.getElementById("input_container");

const container = document.querySelector(".container");
let namee;
do {
  namee = prompt("Enter your name");
} while (!namee);
connection.emit('connection2',namee);
input_container.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    const val = e.target.value;
    e.target.value = "";
    const msg = {
      message: val,
      name: namee,
    };
    createContainer(msg, "right");
    connection.emit("message", msg);
  }
});

function createContainer(msg, type) {
  let element = document.createElement("div");
  element.classList.add(type);
  element.innerHTML = `<h4>${msg.name}</h4>
    <p>${msg.message}</p>`;
  container.appendChild(element);
}

connection.on("message", (msg) => {
  createContainer(msg, "left");
});

connection.on("connection2", (name) => {
  alert(`${name} joined the chat `);
});

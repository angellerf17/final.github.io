const form = document.getElementById("customName");
const nameInput = document.getElementById("nameInput");
const messageInput = document.getElementById("messageInput");
const backgroundSelect = document.getElementById("backgroundChange");

const greeting = document.querySelector("h1");
const message = document.querySelector("p");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameValue = nameInput.value.trim();
    if (nameValue.length > 0) {
        greeting.textContent = "Hello, " + nameValue + "!!";
    } else {
        greeting.textContent = "Hello User!!";
    }

    const messageValue = messageInput.value.trim();
    if (messageValue.length > 0) {
        message.textContent = messageValue;
    } else {
        message.textContent = "How are you doing today? Let's customize this page together!";
    }

    const selectedColor = backgroundSelect.value;
    document.body.style.backgroundColor = selectedColor;
});

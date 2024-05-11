const user = {};
const form = document.querySelector(".login-form");
form.addEventListener("submit", event => {
    event.preventDefault();
    if (event.target.elements.email.value != "" && event.target.elements.password.value != "") {
        user.userEmail = event.target.elements.email.value.trim();
        user.userPassword = event.target.elements.password.value.trim();
        console.log(user);
        event.target.elements.email.value = "";
        event.target.elements.password.value = "";
    }
    else alert("All form fields must be filled in");
});
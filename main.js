const pwdInput = document.querySelector("#password");
const cpwdInput = document.querySelector("#cPassword");
const button = document.querySelector("#submit");
const inv = document.querySelector(".invalid");

button.addEventListener("click", (e) => {
    if (pwdInput.value !== cpwdInput.value) {
        pwdInput.setCustomValidity("*Passwords do not match");
        pwdInput.classList.add('error');
        cpwdInput.classList.add('error');
        inv.textContent = "*Password is not valide";
    } else {
        pwdInput.setCustomValidity("");
        pwdInput.classList.remove('error');
        cpwdInput.classList.remove('error');
        inv.textContent = "";
    }
});
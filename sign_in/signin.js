let btn = document.querySelector("#btn");

let login = () => {
    let usernameInp = document.querySelector("#username");
    let passwordInp = document.querySelector("#password");

    let username = sessionStorage.getItem("username");
    let password = sessionStorage.getItem("password");

    if (username === usernameInp.value && passwordInp.value === password) {
        alert("Your login attempt was successful");
    } else {
        alert("Incorrect information");
    }
    
}
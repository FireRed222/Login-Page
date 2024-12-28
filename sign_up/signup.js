let btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    let username = document.querySelector("#username");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    
    if (username.value === "" || email.value === "" || password.value === "") {
        alert("Please enter the required information");
    } else {
        sessionStorage.setItem("username", username.value);
        sessionStorage.setItem("email", email.value);
        sessionStorage.setItem("password", password.value);

        let msg = confirm("Everything was saved succesfully | Do you want to login right now?");

        if (msg) {
            location.assign("../sign_in/signin.html");
        }
    }
});
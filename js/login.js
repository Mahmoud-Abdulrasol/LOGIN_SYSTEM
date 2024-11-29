// ^ ELEMNET
let setEmail = document.getElementById("email")
let setPassword = document.getElementById("password")
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// !Check inputs &login
function clear() {
    if (setEmail.value == "" || setPassword.value == "") {
        return false
    }
    else {
        return true
    }

}
function login() {
    let email = setEmail.value;
    let pass = setPassword.value
    if (clear() == false) {
        document.getElementById("bad").innerHTML = "all input required"
        return false
    }

    else {
        for (let i = 0; i < arrayofData.length; i++) {
            if (arrayofData[i].email.toLowerCase() == email.toLowerCase() && arrayofData[i].pass.toLowerCase() == pass.toLowerCase()) {

                localStorage.setItem('name', arrayofData[i].Name)


            }
        }
    }



}
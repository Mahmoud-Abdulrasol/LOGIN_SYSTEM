// function test() {
//     console.log("hello");
// }

// ! ELEMENTS NEEDED
let getName = document.getElementById("reg-name")
let getEmail = document.getElementById("reg-email")
let getPassword = document.getElementById("reg-password")

// ? Global Needed and Stroge
let arrayofData = [];
if (localStorage.getItem('array') == null) {
    arrayofData = []
} else {
    arrayofData = JSON.parse(localStorage.getItem('array'))
}
// ^ FunCtion 
function addData() {
    if (valid() == false) {
        document.getElementById('no').innerHTML = "all input required"
        return false
    }

    // Object contain data 
    let data = {
        Name: getName.value,
        Email: getEmail.value,
        Password: getPassword.value,
    };

    if (validEmail() == false) {
        document.getElementById('no').innerHTML = "Email Alredy taken"
        return false
    }
    else {
        arrayofData.push(data)
        localStorage.setItem("array", JSON.stringify(arrayofData))
        document.getElementById('no').innerHTML = 'sucsses'

    }

    Delete()
}
function Delete() {
    getName.value = null
    getEmail.value = null
    getPassword.value = null
}
// * validFunction
function valid() {
    if (getName.value == "" || getEmail.value == "" || getPassword == "") {
        return false
    }
}
function validEmail() {
    for (let i = 0; i < arrayofData.length; i++) {
        if (arrayofData[i].Email.toLowerCase() == getEmail.value.toLowerCase()) {
            return false
        }


    }
}

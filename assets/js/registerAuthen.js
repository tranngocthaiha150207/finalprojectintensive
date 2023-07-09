const firebaseConfig = {
  apiKey: "AIzaSyAhX9uyjGTCyQpqMxf9tLF6UaYn7yoYmvk",
  authDomain: "register-d13cd.firebaseapp.com",
  databaseURL: "https://register-d13cd-default-rtdb.firebaseio.com",
  projectId: "register-d13cd",
  storageBucket: "register-d13cd.appspot.com",
  messagingSenderId: "602385210797",
  appId: "1:602385210797:web:e996d9dda3d4a2dcbe9524"
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const database = firebase.database()

function register() {
    email = document.getElementById("eSignUp").value
    password = document.getElementById("pSignUp").value
    full_name = document.getElementById("uSignUp").value
    rePassword = document.getElementById('rePassword').value


    if (validate_email(email) == false || validate_password(password) == false) {
        alert("Email hoặc Password không hợp lệ !!!")
        return
    }

    if (validate_field(full_name) == false) {
        alert("Họ tên của bạn không hợp lệ")
        return
    }
    if (password !== rePassword) {
        alert("Please check your password");
        return;
    }


    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            // Declare user variable
            var user = auth.currentUser;

            // Add this user to Firebase Database
            var database_ref = database.ref();

            // Create User data
            var user_data = {
                email: email,
                full_name: full_name,
                passowrd: password,
                last_login: Date.now()
            }

            // Push to Firebase Database
            database_ref.child('users/' + user.uid).set(user_data);

            // DOne
            alert('User Created!!!');
        })
        .catch((error) => {
            // Firebase will use this to alert of its errors
            var error_code = error.code;
            var error_message = error.message;

            alert(error_message);
        })
}


function login() {
    email = document.getElementById("eLogin").value
    password = document.getElementById("pLogin").value

    if (validate_field(email) == false || validate_field(password) == false) {
        alert(" Vui lòng nhập email và password")
        return
    }

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            // Declare user variable
            var user = auth.currentUser;

            // Add this user to Firebase Database
            var database_ref = database.ref();

            // Create User data
            var user_data = {
                last_login: Date.now()
            };

            // Push to Firebase Database
            database_ref.child('users/' + user.uid).update(user_data);

            // DOne
            alert('User Logged In!!!');
            window.location.href = "index.html"
        })
        .catch((error) => {
            // Firebase will use this to alert of its errors
            var error_code = error.code;
            var error_message = error.message;

            alert(error_message);
        })
}


function validate_email(email) {
    ex = /^[^@]+@\w+(\.\w+)+\w$/
    if (ex.test(email) == true) {
        //email is good
        return true
    } else {
        // email is bad
        return false
    }
}
function validate_password(password) {
    expression = /^[A-Za-z]\w{7,14}$/
    // Firebase only accepts lengths greater than 6
    if (expression.test(password) == true) {
        return true;
    } else {
        return false;
    }
}
function validate_field(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}

function LoginApp() {
    cambiar_login()
    login()
}

function SignUpApp() {
    cambiar_sign_up()
    register()
}
const btnBookTable = document.getElementById('btnBookTable');

btnBookTable.addEventListener('click', function () {
    let isValid = checkValidate();

    if (isValid) {
        alert('Đặt bàn thành công!');
    }
});

// Truy cập vào các ô input
const nameEle = document.getElementById('name');
const emailEle = document.getElementById('email');
const phoneEle = document.getElementById('phone');
const dateEle = document.getElementById('date');
const timeEle = document.getElementById('time');
const peopleEle = document.getElementById('people');


// Validate dữ liệu trong các ô input và highlight
function checkValidate() {
    let nameValue = nameEle.value;
    let emailValue = emailEle.value;
    let phoneValue = phoneEle.value;
    let dateValue = dateEle.value;
    let timeValue = timeEle.value;
    let peopleValue = peopleEle.value;

    let isCheck = true;

    // Kiểm tra trường username
    if (nameValue == '') {
        setError(nameEle, 'Tên không được để trống');
        isCheck = false;
    } else {
        setSuccess(nameEle);
    }

    // Kiểm tra trường email
    if (emailValue == '') {
        setError(emailEle, 'Email không được để trống');
        isCheck = false;
    } else if (!isEmail(emailValue)) {
        setError(emailEle, 'Email không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(emailEle);
    }

    // Kiểm tra trường phone
    if (phoneValue == '') {
        setError(phoneEle, 'Số điện thoại không được để trống');
        isCheck = false;
    } else if (!isPhone(phoneValue)) {
        setError(phoneEle, 'Số điện thoại không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(phoneEle);
    }

    // Kiểm tra trường date
    if (dateValue == '') {
        setError(dateEle, 'Ngày tháng không được để trống');
        isCheck = false;
    } else if (!isDate(dateValue)) {
        setError(dateEle, 'Ngày tháng không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(dateEle);
    }

    // Kiểm tra trường time
    if (timeValue == '') {
        setError(timeEle, 'Thời gian không được để trống');
        isCheck = false;
    } else if (!isTime(timeValue)) {
        setError(timeEle, 'Thời gian không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(phoneEle);
    }

     // Kiểm tra trường people
     if (peopleValue == '') {
        setError(peopleEle, 'Số người không được để trống');
        isCheck = false;
    } else {
        setSuccess(peopleEle);
    }

    return isCheck;
     
   
    


}



function setError(ele, message) {
    let parentEle = ele.parentNode;
    parentEle.classList.add('error');
    parentEle.querySelector('small').innerText = message;
}
function setSuccess(ele) {
    ele.parentNode.classList.add('success');
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(number) {
    return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
}

function isDate(date) {
    return /(^0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4}$)/.test(date);
}

function isTime(time) {
    return /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(time);
}


const inputEles = document.querySelectorAll('.input-row');

btnRegister.addEventListener('click', function () {
    Array.from(inputEles).map((ele) =>
        ele.classList.remove('success', 'error')
    );
});
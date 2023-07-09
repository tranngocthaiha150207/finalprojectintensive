const btnContact = document.getElementById('btnContact');

btnContact.addEventListener('click', function () {
    let isValidContact = checkValidateContact();

    if (isValidContact) {
        alert('Gửi tin nhắn thành công!');
    }
});

// Truy cập vào các ô input
const nameEleContact = document.getElementById('namecontact');
const emailEleContact = document.getElementById('emailcontact');
const subjectEleContact = document.getElementById('subjectcontact');
const messageEleContact = document.getElementById('messagecontact');

// Validate dữ liệu trong các ô input và highlight
function checkValidateContact() {
    let nameValueContact = nameEleContact.value;
    let emailValueContact = emailEleContact.value;
    let subjectValueContact = subjectEleContact.value;
    let messageValueContact = messageEleContact.value;

    let isCheckContact = true;

    // Kiểm tra trường name
    if (nameValueContact == '') {
        setError(nameEleContact, 'Tên không được để trống');
        isCheckContact = false;
    } else {
        setSuccess(nameEleContact);
    }

    // Kiểm tra trường email
    if (emailValueContact == '') {
        setError(emailEleContact, 'Email không được để trống');
        isCheckContact = false;
    } else if (!isEmail(emailValueContact)) {
        setError(emailEleContact, 'Email không đúng định dạng');
        isCheckContact = false;
    } else {
        setSuccess(emailEleContact);
    }

    // Kiểm tra trường subject
    if (subjectValueContact == '') {
        setError(subjectEleContact, 'Chủ đề không được để trống');
        isCheckContact = false;
    } else {
        setSuccess(subjectEleContact);
    }

     // Kiểm tra trường message
     if (messageValueContact == '') {
        setError(messageEleContact, 'Lời nhắn không được để trống');
        isCheckContact = false;
    } else {
        setSuccess(subjectEleContact);
    }

    return isCheckContact;
     
   
    


}



function setError(eleContact, message) {
    let parentEleContact = eleContact.parentNode;
    parentEleContact.classList.add('error');
    parentEleContact.querySelector('small').innerText = message;
}
function setSuccess(ele) {
    ele.parentNode.classList.add('success');
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// function isPhone(number) {
//     return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
// }

// function isDate(date) {
//     return /(^0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4}$)/.test(date);
// }

// function isTime(time) {
//     return /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(time);
// }


const inputEles = document.querySelectorAll('.input-row');


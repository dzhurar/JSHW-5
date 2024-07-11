'use strict'
// 1
function checkFields() {
    const fieldValueOne = document.getElementById("text-one").value;
    const fieldValueTwo = document.getElementById("text-two").value;
    if(fieldValueOne !== "" && fieldValueTwo !== ""){
        alert('обидва поля заповнені');
    } else {
        alert('не всі поля заповнені');
    }
}

// 2
function checkFieldsTwo() {
    const fieldNumberOne = parseFloat(document.getElementById("numberOne")).value;
    const fieldNumberTwo = parseFloat(document.getElementById("numberTwo")).value;
    if (fieldNumberOne + fieldNumberTwo > 10) {
        alert('сума більше 10');
    }
    else {
        alert('сума менше 10');
    }
}

// 3
function checkFieldsJs() {
    const fieldValueText = documetn.getElementById("textCheck").value;
    if (fieldValueText.includes("JavaScript")) {
        alert('текст містить слово JavaScript');
    } else {
        alert('текст не містить слово JavaScript');
    }
}

// 4
function checkNumber() {
    const fieldValueNumber = document.getElementById("numberFour").value;
    if (fieldValueNumber >= 10 && fieldValueNumber <= 20) {
        alert("число входить в діапазон від 10 до 20");
    } else {
        ("число не входить в діапазон від 10 до 20");
    }
}

// 5
function checkForm() {
    const name = documet.getElementById("inputName").value;
    const mail = documet.getElementById("inputMail").value;
    const password = documet.getElementById("inputPass").value;
    if (name.length >= 3 && mail.includes('@') && password.length >= 6) {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        alert("forwarded to another page")
    } else {
        alert("form is not value");
    }
}
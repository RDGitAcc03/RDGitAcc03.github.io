
let str = ""; // Empty string
// Grabbing DOM form feilds
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let age = document.getElementById('age');
let email = document.getElementById('email');
let comments = document.getElementById('comments');

// Show string of data to the console
function showInput(){
    str = `fname: ${fname.value}, lname: ${lname.value}, age: ${age.value}, email: ${email.value}, comments: ${comments.value}.`;     
    console.log(str); 
}

// Event listener to show data upon clicking the submit
let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', showInput);

let arrInputs = document.querySelectorAll('input'); // Array of all input selectors
let commentsArea = document.getElementById('comments'); // Seperated because its type is 'textarea' and not 'input'
let arrInputsAndTextArea = [arrInputs, commentsArea]; // Combine all fileds together

// Enable submiting the form only after all fields are filled in
function enableSubmit(){    
    let isFormFilledOut = true;
    for (let i of arrInputsAndTextArea[0]) {
        isFormFilledOut = i.value !== "" && isFormFilledOut ? true : false;
    }
    // console.log(isFormFilledOut); // Testing
    if (isFormFilledOut && arrInputsAndTextArea[1].value !== ""){
        submitBtn.disabled = isFormFilledOut ? false : true;
    }
}
// Event listener to enable submitting upon filling in the fields
fname.addEventListener('keyup', enableSubmit);
lname.addEventListener('keyup', enableSubmit);
age.addEventListener('keyup', enableSubmit);
age.addEventListener('keyup', ageIsMinimumZero); // Enabling only positive numbers
email.addEventListener('keyup', enableSubmit);
comments.addEventListener('keyup', enableSubmit);

function ageIsMinimumZero(){
    if (parseInt(age.value) < 0){
        age.value = "";
    }
}
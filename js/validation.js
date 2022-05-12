function checkAge(){
    let age = document.getElementById('age').value;
    if (parseInt(age) < 0){
        document.getElementById('age').value = 0;
    }
}

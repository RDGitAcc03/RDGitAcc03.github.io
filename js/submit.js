
let str = "";

function showInput(){
    str = `fname: ${document.getElementById('fname').value}, lname: ${document.getElementById('lname').value}, age: ${document.getElementById('age').value}, email: ${document.getElementById('email').value}, comments: ${document.getElementById('comments').value}.`;     
    // document.getElementById('op').innerHTML = `<font size='3rem'>${str}</font>`;
    console.log(str); 
}


function enableSubmit(){
    let arrInputs = document.querySelectorAll('input');
    console.log(arrInputs);
    
    let isInputFilledOut = true;
    let isCommentsAreaFilledOut = false;

    for (let i of arrInputs) {
        if (i.value != "" && isInputFilledOut){
            isInputFilledOut = true;
        }
        else {
            isInputFilledOut = false;
        }
    }
    let commentsArea = document.getElementById('comments');
    if (commentsArea.value != ""){
        isCommentsAreaFilledOut = true;
    }
    else {
        isCommentsAreaFilledOut = false;
    }

    //after all input checks
    if(isInputFilledOut && isCommentsAreaFilledOut){
        document.getElementById('submit').disabled = false;
    }
    else {
        document.getElementById('submit').disabled = true;
    }

}
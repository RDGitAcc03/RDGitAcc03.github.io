const codingLanguages = ["HTML", "CSS", "JavaScript"];
let sentence = "This website has been created with:";

for (let [i, language] of codingLanguages.entries()){
    if (i === 0){
        sentence += ` ${language}`;
    }
    else if (i === codingLanguages.length - 1){
        sentence+= ` and ${language}.`;
    }
    else {
        sentence+= `, ${language}`;
    }
}
document.getElementsByClassName('sentence')[0].innerText = sentence;
// console.log(str);
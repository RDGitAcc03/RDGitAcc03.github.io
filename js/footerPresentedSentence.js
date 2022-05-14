// Variables
const codingLanguages = ["HTML", "CSS", "JavaScript"]; 
let sentence = "This website has been created with:"; // Starting string

// Entries gives back keys and values. Using destructing format to depend on index
for (let [i, language] of codingLanguages.entries()){
    if (i === 0){ // First word
        sentence += ` ${language}`;
    }
    else if (i === codingLanguages.length - 1){ // Last word
        sentence+= ` and ${language}.`;
    }
    else {
        sentence+= `, ${language}`; // In-between words
    }
}
let sentenceOfFooter = document.getElementById('sentence'); // Grabbing DOM of div with id 'sentence'
sentenceOfFooter.innerText = sentence; // Writing content
// console.log(str);
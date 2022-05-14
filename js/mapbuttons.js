
// Object describing the urls of iframe map
let maps = {
    zero: "iframe-page.html",
    tlv: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d108174.68864953362!2d34.7979826!3d32.0838777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2z16rXnCDXkNeR15nXkS3Xmdek15U!5e0!3m2!1siw!2sil!4v1651522935186!5m2!1siw!2sil",
    nty: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107912.33635349803!2d34.93042870376798!3d32.304854209413094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d400493c075d5%3A0x2cd995be543c3f22!2z16DXqteg15nXlA!5e0!3m2!1siw!2sil!4v1651523339338!5m2!1siw!2sil",
    rsn: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54151.566142429954!2d34.81340648831596!3d31.975194002255826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b43827ab66ff%3A0x17bcc54a571a7ab8!2z16jXkNep15XXnyDXnNem15nXldef!5e0!3m2!1siw!2sil!4v1651523576882!5m2!1siw!2sil"
}

// Varibles
let count = 0; // Counter for both buttons

let aNext = document.getElementById('aNext'); // Next button
let aPre = document.getElementById('aPrevious'); // Privious button
let birthCityMsg = document.getElementById('birth-city'); // Paragraph for writing message

function changeMap(operation) {
    var flag = 0 <= count <= 3; // Condition to have 3 clicks maximum
    if (flag)
    {
        count = operation === '+' ? count + 1 : count - 1;
        if(count === 0){ // Starting point
            aPre.href = maps.zero; // iframe page content
            aPre.style.opacity= 0; // Don't show previous button
            aPre.classList.add('disabled'); // Disable previous button
            birthCityMsg.setAttribute('hidden', true); // Hide message 
            // Next button defaults: opacity = 1;
       }
        console.log(count);
        if (count === 1) {
            aNext.href = maps.tlv; // Tlv map
            aPre.href = maps.tlv; // Tlv map
            birthCityMsg.removeAttribute('hidden'); // Show message
            aPre.style.opacity = 1; // Show previous button
            aPre.classList.remove('disabled'); // Remove disability of previous button
        }
        else if (count === 2){
            aNext.href = maps.nty; // Nty map
            aPre.href = maps.nty; // Nty map
            birthCityMsg.setAttribute('hidden', true); // Hide message
            aNext.style.opacity= 1; // Show next button
            aNext.classList.remove('disabled'); // Remove disability of next button
        }  
        else if (count === 3){
            aNext.href = maps.rsn; // Rsn map
            aNext.style.opacity= 0; // Don't show next button
            aNext.classList.add('disabled'); // Disable next button
        } 
    }
 }
 aNext.addEventListener('click', function() {
    let sign = '+';
    changeMap(sign);
 });
 aPre.addEventListener('click', function() {
    let sign = '-';
    changeMap(sign);
 });


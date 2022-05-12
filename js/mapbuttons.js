
let maps = {
    zero: "iframe-page.html",
    tlv: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d108174.68864953362!2d34.7979826!3d32.0838777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2z16rXnCDXkNeR15nXkS3Xmdek15U!5e0!3m2!1siw!2sil!4v1651522935186!5m2!1siw!2sil",
    nty: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107912.33635349803!2d34.93042870376798!3d32.304854209413094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d400493c075d5%3A0x2cd995be543c3f22!2z16DXqteg15nXlA!5e0!3m2!1siw!2sil!4v1651523339338!5m2!1siw!2sil",
    rsn: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54151.566142429954!2d34.81340648831596!3d31.975194002255826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b43827ab66ff%3A0x17bcc54a571a7ab8!2z16jXkNep15XXnyDXnNem15nXldef!5e0!3m2!1siw!2sil!4v1651523576882!5m2!1siw!2sil"
}

let countNext = 0;
let countprev;



function countNxt() {
    let aNext = document.getElementById('aNext');
    let aPre = document.getElementById('aPrevious');
    let birthCityMsg = document.getElementById('birth-city');

    var flagPos = countNext <= 3;
    if (flagPos)
    {
        countNext++;
        countprev = countNext;
        if(countNext === 1){
            aNext.href = maps.tlv;
            birthCityMsg.removeAttribute('hidden');
            aPre.style.opacity = 1;
            aPre.classList.remove('disabled');
        }  
        else if (countNext === 2){
            aNext.href = maps.nty;
            birthCityMsg.setAttribute('hidden', true);
        }  
        else if (countNext === 3){
            aNext.href = maps.rsn;
            aNext.style.opacity= 0;
            aNext.classList.add('disabled');
        } 
    }
 }

function countPre() {
    let aNext = document.getElementById('aNext');
    let aPre = document.getElementById('aPrevious');
    let birthCityMsg = document.getElementById('birth-city');

    var flagNeg = countNext >= 0;
    if (flagNeg)
    {
        countprev--;
        countNext = countprev;
        if(countprev === 0){
            aPre.href = maps.zero;
            aPre.style.opacity= 0;
            aPre.classList.add('disabled');
            birthCityMsg.setAttribute('hidden', true);
        }  
        else if(countprev === 1){
            aPre.href = maps.tlv;
            aNext.style.opacity= 1;
            birthCityMsg.removeAttribute('hidden');
            aPre.classList.remove('disabled');
        }  
        else if (countprev === 2){
            aPre.href = maps.nty;
            aNext.style.opacity= 1;
            aNext.classList.remove('disabled');
        }
    }
  
 }

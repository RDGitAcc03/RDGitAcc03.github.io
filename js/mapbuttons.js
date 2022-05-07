
let maps = {
    zero: "iframe-page.html",
    tlv: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d108174.68864953362!2d34.7979826!3d32.0838777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2z16rXnCDXkNeR15nXkS3Xmdek15U!5e0!3m2!1siw!2sil!4v1651522935186!5m2!1siw!2sil",
    nty: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107912.33635349803!2d34.93042870376798!3d32.304854209413094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d400493c075d5%3A0x2cd995be543c3f22!2z16DXqteg15nXlA!5e0!3m2!1siw!2sil!4v1651523339338!5m2!1siw!2sil",
    rsn: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54151.566142429954!2d34.81340648831596!3d31.975194002255826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b43827ab66ff%3A0x17bcc54a571a7ab8!2z16jXkNep15XXnyDXnNem15nXldef!5e0!3m2!1siw!2sil!4v1651523576882!5m2!1siw!2sil"
}
let countNext = 0;
let countprev;

function countNxt() {
    var flagPos = countNext <= 3;
    if (flagPos)
    {
        countNext++;
        countprev = countNext
        document.getElementById('containerPre').style.opacity = 1;
        if(countNext === 1){
            document.getElementById('aNext').href = maps.tlv;
            document.getElementById('birth-city').removeAttribute('hidden');
        }  
        else if (countNext === 2){
            document.getElementById('aNext').href = maps.nty;
            document.getElementById('birth-city').setAttribute('hidden', true);
        }  
        else if (countNext === 3){
            document.getElementById('containerNxt').style.opacity= 0;
            document.getElementById('aNext').href = maps.rsn;
        } 
    }
 }

function countPre() {
    var flagNeg = countNext >= 0;
    if (flagNeg)
    {
        countprev--;
        countNext = countprev;
        if(countprev === 0){
            document.getElementById('containerPre').style.opacity= 0;
            document.getElementById('birth-city').setAttribute('hidden', true);
            document.getElementById('aPrevious').href = maps.zero;
        }  
        else if(countprev === 1){
            document.getElementById('containerNxt').style.opacity= 1;
            document.getElementById('birth-city').removeAttribute('hidden');
            document.getElementById('aPrevious').href = maps.tlv;
        }  
        else if (countprev === 2){
            document.getElementById('containerNxt').style.opacity= 1;
            document.getElementById('aPrevious').href = maps.nty;
        }
    }
  
 }

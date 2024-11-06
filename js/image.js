let imageAr = [
'images/banner1.png',
'images/banner2.png',
 'images/banner3.png',
'images/banner4.png',
 'images/banner5.png',
'images/banner6.png'
]

let currentIndex = 0;
setInterval(chgImage,200)

function chgImage () {
   
    currentIndex++;
    if (currentIndex >= imageAr.length){
        currentIndex = 0;
       
    }
    document.getElementById('images').setAttribute('src', imageAr[cuurentindex]);
}  

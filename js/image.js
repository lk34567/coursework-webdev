let imageAr = [
'images/ban1.jpg',
'images/ban2.jpg',
 'images/ban3.jpg',
'images/ban4.jpg',
 'images/ban5.jpg',
'images/ban6.jpg'
]

let currentIndex = 0;
setInterval(chgImage,200)

function chgImage () {
   
    currentIndex++;
    if (currentIndex >= imageAr.length){
        currentIndex = 0;
       
    }
    document.getElementById('Images').setAttribute('src', imageAr[curentindex]);
}  

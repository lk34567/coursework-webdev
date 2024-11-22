let imageAr = [
    'images/ban1.jpg',
    'images/ban2.jpg',
    'images/ban3.jpg',
    'images/ban4.jpg',
    'images/ban5.jpg',
    'images/ban6.jpg'
  ];
  
  let currentCounter = 0;
  setInterval(chgImage, 4000);
  
  function chgImage() {
    currentCounter++;
    if (currentCounter >= imageAr.length) {
      currentCounter = 0;
    }
    document.getElementById('Images').setAttribute('src', imageAr[currentCounter]);
  }
  
  
  
(()=>{
    const burgerbutton = document.getElementById('bugeric');
    const navbar = document.querySelector('nav');

    burgerbutton.addEventListener("click",() => { 
        navbar.classList.toggle("open");
    });

})();
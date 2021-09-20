const btn1 = document.querySelector('.button-1');
const link1 = document.querySelector('.link-1');
const close1 = document.querySelector('.close1');
const close2 = document.querySelector('.close2');
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');


// Modal connexion
btn1.addEventListener('click', function(){
    modal1.classList.toggle('open1');
});

close1.addEventListener('click', ()=>{
    modal1.classList.toggle('open1');
})


// Modal Créer un compte
link1.addEventListener('click', function(){
    modal2.classList.toggle('open2');
});

close2.addEventListener('click', ()=>{
    modal2.classList.toggle('open2');
})
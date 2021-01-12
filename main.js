// da html vedo

// <header>
//     <div class="header-left">
//         <img src="http://boolean.careers/images/common/logo.png" alt="">
//     </div>
//     <div class="header-right">
//         <ul>
//             <li>
//                 <a href="#">Home</a>
//             </li>
//             <li>
//                 <a href="#">Scopri il Corso</a>
//             </li>
//             <li>
//                 <a href="#">La nostra storia</a>
//             </li>
//             <li>
//                 <a href="#" class="cta">Iscriviti</a>
//             </li>
//         </ul>
//         <a href="#">
//             <i class="fas fa-bars"></i>
//         </a>
//     </div>
//     <div class="hamburger-menu">
//         <ul>
//             <li>
//                 <a href="#">Home</a>
//             </li>
//             <li>
//                 <a href="#">Scopri il Corso</a>
//             </li>
//             <li>
//                 <a href="#">La nostra storia</a>
//             </li>
//             <li>
//                 <a href="#" class="cta">Iscriviti</a>
//             </li>
//         </ul>
//         <a href="#" class="close">
//             <i class="fas fa-times"></i>
//         </a>
//     </div>
// </header>

// dal css vedo

// .hamburger-menu.active {
//     display: block;
// }
// }

$('.header-right>a').click(function() {
  $('.hamburger-menu').toggle();

});
$('.hamburger-menu > a').click(function() {
  $('.hamburger-menu').toggle();
});

// varianti a livello di selectors css:

// .hamburger-menu > a oppure a.close
// .header-right > a oppure  .fa-bars

// varianti a livello di codice jquery:
// al posto di:
// a)  $('.hamburger-menu').addClass('active');
// b)  $('.hamburger-menu').removeClass('active');
// potevo mettere:
// a1)  $('.hamburger-menu').toggleClass('active'); anche toggle() senza niente perché tanto quello fa.
// b1)  $('.hamburger-menu').toggleClass('active');

// oppure tipo  agendo direttamente sul css bypassando la classe:

// a2) $('.hamburger-menu').show();
// b2)$('.hamburger-menu').hide();

// a3)  $('.hamburger-menu').css('display','block')
   // b3)  $('.hamburger-menu').css('display','none')

   // OPPURE USARE JAVASCRIPT PURO
   // CHE C'è NON SEI CAPACE FORSE?

// var hamburger=document.getElementsByClassName('hamburger-menu')[0];

// eh vorresti prendere l'id ma non puoi non imbrogliare non si cambia html
// var close=document.getElementsByClassName('close')[0];
// var open=document.getElementsByClassName('fa-bars')[0];

// oppure c'era pure il querySelector vedi che di opzioni ne avevi non ti serve JQuery

//
// open.addEventListener('click',function(){
//
//   hamburger.classList.add('active');
// })
// close.addEventListener('click',function(){
//
//   hamburger.classList.remove('active');
// })
// Sto cane... già non lo sapevi più fare.

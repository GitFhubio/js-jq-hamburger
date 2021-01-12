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
  $('.hamburger-menu').addClass('active');

});
$('.hamburger-menu > a').click(function() {
  $('.hamburger-menu').removeClass('active');
});

// varianti a livello di selectors css:

// .hamburger-menu > a oppure a.close
// .header-right > a oppure  .fa-bars

// varianti a livello di codice jquery:
// al posto di:
// a)  $('.hamburger-menu').addClass('active');
// b)  $('.hamburger-menu').removeClass('active');
// potevo mettere:
// a1)  $('.hamburger-menu').toggleClass('active'); anche senza niente come classe perché tanto quella è
// b1)  $('.hamburger-menu').toggleClass('active');
// a2) $('.hamburger-menu').show();
// b2)$('.hamburger-menu').hide();

// $('#piero').css({
//
//   'background-color':'red','color':'blue'});

// $('#piero').css('color','blue');

// in js puro è style.proprietà=""


// $('#piero').click(function(){
// var div=$('#totoggle');
// if (div.is(":hidden"))
// {
// div.show(1000);
// } else{
//   div.hide(1000);
// }
//
// })

// $('#piero').click(function(){
// var div=$('#totoggle');
// if (div.is(":visible"))
// {
// div.hide(1000);
// } else{
//   div.show(1000);
// }
//
// })

//
// $('#piero').click(function(){
// $('#totoggle').toggle(1000);
//
//
// })


//
// $('#totoggle').click(function(){
// if($('#piero').hasClass('blue'))
// {$('#piero').removeClass('blue').addClass('red');}
// else{$('#piero').addClass('blue').removeClass('red')}
// })

//
// innerHTML teoricamente è con html()
// però se ho un innerHTML+= me la cavo con l'append...

// empty svuota,remove elimina proprio

// $('#piero').click(function(){
// $('#totoggle').find('p').remove('.test');}
// )


// $('p').click(function()
// {$(this).toggleClass();})
//
$('p').click(function()
{$(this).toggleClass("blue red");})

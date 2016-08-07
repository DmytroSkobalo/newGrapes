$(document).ready(function() {

  $('#b').click(function() {
    $('#b').addClass('load').html('');
    $.ajax({
        url:"https://formspree.io/skobalo88@mail.ru",
        method:"POST",
        data: { 
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        },
        dataType:"json"
    }).done(function(data) {
        $('#container').html('<h1>Дякуємо Вам! Чекайте на відповідь незабаром.</h1>');
    }).fail( function(data){
        if( data.responseJSON.error ) {
            $('#error').html(data.responseJSON.error);
            $('#b').removeClass('load').html('Надіслати');
        }
    });
});  


$('.best_wine figure img');

var myImg = $('img[src*=cabernet2]');
   myImg.fadeOut(0).fadeIn(5000);
var myImg2 = $('img[src*=chardone3]');
   myImg2.hide(0).show(3000);
var myImg3 = $('img[src*=kahor2]');
   myImg3.hide(0).show(3000);
var myImg4 = $('#img img[src*=kupaj]');
   myImg4.hide(0).show(3000);
 var myImg5 = $('img[src*=merlot2]');
   myImg5.hide(0).show(3000);
 var myImg6 = $('img[src*=muscat2]');
   myImg6.hide(0).show(3000);
 
 /*var heading = $('#heading '); 
   heading.hide(0).show(2000);*/

   $('#heading').slideUp(0).slideDown(3000);
    
    
 /*   function elementOut (element, myTime) {
        
        if (myTime > 10000 || myTime < 500 || isNaN(myTime)) {
            return false
        }  
        else {
            idElement = '#' + element;
            $(idElement).fadeOut(myTime).fadeIn(myTime);
        }    
        
        
    
    }
    
     elementOut('img', 5000); */
     
   var look =  $('#img [src*= index]');
      look.fadeTo(7000, 0.1).fadeTo(5000, 1);
      
      $('#wrapper h1').slideUp(0).slideDown(3000);
}); 



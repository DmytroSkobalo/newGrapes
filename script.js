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

 $('img[src*=cabernet2]').hide(0);
 $('img[src*=cabernet2]').show(3000);
 $('img[src*=chardone3]').hide(0);
 $('img[src*=chardone3]').show(3000);
 $('img[src*=kahor2]').hide(0);
 $('img[src*=kahor2]').show(3000);
 $('img[src*=kupaj]').hide(0);
 $(' img[src*=kupaj]').show(3000);
 $('img[src*=merlot2]').hide(0);
 $('img[src*=merlot2]').show(3000);
 $('img[src*=muscat2]').hide(0);
 $('img[src*=muscat2]').show(3000);
    
}); 
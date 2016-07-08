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
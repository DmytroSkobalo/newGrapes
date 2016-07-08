$(function () {
    ('#b').click(function(e) {
        e.preventDefault();
        $.ajax({
            url:"https://formspree.io/skobalo88@mail.ru",
            method:"POST",
            data: { name: $('#name').val(),
                    email: $('#email').val(),
                    message: $('#message').val()
            },
            dataType:"json"
        }).done(function() {
            $('#contact').html(<h1>'Дякуємо Вам! Чекайте на відповідь незабаром.'</h1>)
        });
    });
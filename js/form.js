$('#client_data button[type="submit"]').click(sendForm);
function sendForm(e){
    const form = $('#client_data')[0];
    if (!form.checkValidity()){
        return;
    }
    e.preventDefault();
    $.ajax({
    url: "https://formspree.io/bravo-soft@ukr.net", 
    method: "POST",
    data: {
        client_name:$('#client_name').val(),
        client_phone:$('#client_phone').val(),
        client_email:$('#client_email').val()
    },
    dataType: "json"
})
.done(function(){
    $('#client_data')[0].reset();
    $('#msg').html('Дякуємо за реєстрацію!')
})
.fail(function(){
    $('#msg').html('Реєстрація пройшла з помилками!')
});

}
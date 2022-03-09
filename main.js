(function () {
    emailjs.init("user_33aSpdeItOcKQvQyS4ZUR");
})();

function sendmail() {
    let fullName = document.getElementById("Nombre").value + document.getElementById("Apellido").value;
    let userPhone = document.getElementById("Numero").value;
    let userEmail = document.getElementById("Correo").value;
    let userMessage = document.getElementById("Mensaje").value;

    var contactParams = {
        from_name: fullName,
        from_numero: userPhone,
        from_email: userEmail,
        message: userMessage
    };

    emailjs.send('service_3mys7bd', 'template_0v19uzl', contactParams).then(function (res) { })
}
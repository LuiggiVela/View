document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    // Puedes almacenar los datos en una base de datos o en el almacenamiento local del navegador.
    // Aquí, simplemente mostraremos la pregunta después del registro.
    
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);

    showProposalQuestion();
});

function showProposalQuestion() {
    var response = confirm("¿Quieres ser mi novia?");
    
    if (response) {
        alert("¡Me siento el hombre más feliz del mundo al saber que serás parte de mi vida! ❤️");
    } else {
        alert("¡Oh,quizas en un futuro no muy lejano podremos ser el uno para el otro!. 😢");
    }
}
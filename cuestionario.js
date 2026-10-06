function calificarQuiz() {

    const respuestas = {

        p1: "c",
        p2: "a",
        p3: "b",
        p4: "b",
        p5: "a",
        p6: "b",
        p7: "a",
        p8: "b",
        p9: "a",
        p10: "a"

    };


    let puntos = 0;


    for (let pregunta in respuestas) {

        const seleccionada =
            document.querySelector(
                'input[name="' + pregunta + '"]:checked'
            );


        if (seleccionada) {

            if (seleccionada.value === respuestas[pregunta]) {

                puntos++;

            }

        }

    }


    const resultado =
        document.getElementById("resultadoQuiz");


    if (puntos === 10) {

        resultado.innerHTML =
            "🌟 ¡Excelente! Obtuviste 10 de 10.";

    }

    else if (puntos >= 7) {

        resultado.innerHTML =
            "✨ ¡Muy bien! Obtuviste " +
            puntos +
            " de 10.";

    }

    else if (puntos >= 5) {

        resultado.innerHTML =
            "💗 Buen trabajo. Obtuviste " +
            puntos +
            " de 10. Puedes repasar las páginas.";

    }

    else {

        resultado.innerHTML =
            "📚 Obtuviste " +
            puntos +
            " de 10. Te recomendamos repasar las investigaciones.";

    }

}
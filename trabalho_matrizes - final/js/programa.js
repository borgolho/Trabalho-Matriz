var matriz1 = [];
var matriz2 = [];

var quantL1
var quantC1

var quantL2;
var quantC2;

function criarMatriz1() {

    //Criação da Matriz 1//

    quantL1 = parseInt(prompt("Insira o número de linhas da 1° Matriz:"));
    quantC1 = parseInt(prompt("Insira o número de colunas da 1° Matriz:"));

    matriz1 = [];

    for (var i = 0; i < quantL1; i++) {

        var s = [];

        for (var x = 0; x < quantC1; x++) {

            s.push(Math.floor(Math.random() * 20));

        }

        matriz1.push(s);

    }

    console.table(matriz1);

}

function criarMatriz2() {

    //Criação da Matriz 2//

    quantL2 = parseInt(prompt("Insira o número de linhas da 2° Matriz:"));
    quantC2 = parseInt(prompt("Insira o número de colunas da 2° Matriz:"));

    matriz2 = [];

    for (var i = 0; i < quantL2; i++) {

        var p = [];
        for (var x = 0; x < quantC2; x++) {

            p.push(Math.floor(Math.random() * 20));

        }

        matriz2.push(p);

    }

    console.table(matriz1);

}

function imprimeMatriz1() {

    //Impressão da Matriz 1//

    document.write("<table class = 'matriz'>");

    for (var l = 0; l < quantL1; l++) {

        document.write("<tr>")
        for (var c = 0; c < quantC1; c++) {

            document.write("<td class = 'fontM'>" + matriz1[l][c] + "</td>");
        }

        document.write("</tr>");

    }

    document.write("</table>");

}

function imprimeMatriz2() {

    //Impressão da Matriz 2//

    document.write("<table class = 'matriz'>");

    for (var l = 0; l < quantL2; l++) {

        document.write("<tr>")
        for (var c = 0; c < quantC2; c++) {

            document.write("<td class = 'fontM'>" + matriz2[l][c] + "</td>");
        }

        document.write("</tr>");

    }

    document.write("</table>");

}

function somarMatriz() {

    var matrizSoma = [];

    if (quantL1 == quantL2 && quantC1 == quantC2) {

        for (var l = 0; l < quantL1; l++) {

            matrizSoma[l] = [];

            for (var c = 0; c < quantC1; c++) {

                var num1 = [];
                num1 = matriz1[l][c];
                var num2 = [];
                num2 = matriz2[l][c];

                var resultado = num1 + num2;
                matrizSoma[l][c] = resultado;

            }

        }

    } else {

        alert("As matrizes devem ter as mesmas proporções para realizar a adição!");
    }

    console.table(matrizSoma)

    return matrizSoma;

}

function imprimeMatrizSoma() {

    var matrizS = [];
    matrizS = somarMatriz();

    //Impressão da Matriz da Soma//

    document.write("<table class = 'matriz'>");

    for (var l = 0; l < quantL1; l++) {

        document.write("<tr>");
        for (var c = 0; c < quantC1; c++) {

            document.write("<td class = 'fontM'>" + matrizS[l][c] + "</td>");
        }

        document.write("</tr>");

    }

    document.write("</table>");
}

function subtrairMatriz() {

    var matrizSub = [];

    if (quantL1 == quantL2 && quantC1 == quantC2) {

        for (var l = 0; l < quantL1; l++) {

            matrizSub[l] = [];

            for (var c = 0; c < quantC1; c++) {

                var num1 = [];
                num1 = matriz1[l][c];
                var num2 = [];
                num2 = matriz2[l][c];

                var resultado = num1 - num2;
                matrizSub[l][c] = resultado;

            }

        }

    } else {

        alert("As matrizes devem ter as mesmas proporções para realizar a Subtração!");
    }

    console.table(matrizSub)

    return matrizSub;
}

function imprimeMatrizSub() {

    var matrizSubt = [];
    matrizSubt = subtrairMatriz();

    document.write("<table class = 'matriz'>");

    for (var l = 0; l < quantL1; l++) {

        document.write("<tr>");
        for (var c = 0; c < quantC1; c++) {

            document.write("<td class = 'fontM'>" + matrizSubt[l][c] + "</td>");
        }

        document.write("</tr>");

    }

    document.write("</table>");
}

function multiplicarMatriz() {

    //criação da matriz resultante//
    var matrizR = [];

    if (quantC1 == quantL2) {

        for (var l = 0; l < quantL1; l++) {

            matrizR[l] = [];

            for (var c = 0; c < quantC2; c++) {

                matrizR[l][c] = 0;

                for (var p = 0; p < quantC2; p++) {

                    matrizR[l][c] += matriz1[l][p] * matriz2[p][c];

                }

            }

        }

        console.table(matrizR);


    } else {

        console.error("Número de Colunas da 1° matriz é diferente do número de Linhas da 2° matriz");
    }

    return matrizR;
}

function imprimeMatrizMult() {

    //impressão da matriz resultante//

    var matrizMult = [];
    matrizMult = multiplicarMatriz();

    document.write("<table class = 'matriz'>");

    for (var l = 0; l < quantL1; l++) {

        document.write("<tr>");

        for (var c = 0; c < quantC2; c++) {

            document.write("<td class = 'fontM'>" + matrizMult[l][c] + "</td>");

        }

        document.write("</tr>");

    }

    document.write("</table>");
}

function impressão() {

    document.write("<h2 class='h2'>" + "Adição" + "</h2>");

    alert("Crie as Matrizes para a Adição");
    criarMatriz1();
    criarMatriz2();
    somarMatriz();

    document.write("<div class = 'funcoes'>");

    imprimeMatriz1();
    document.write("<p class = 'math-itens'>" + " + " + "</p>");
    imprimeMatriz2();
    document.write("<p class = 'math-itens'>" + " = " + "</p>");
    imprimeMatrizSoma();

    document.write("</div>");

    document.write("<h2 class='h2'>" + "Subtração" + "</h2>");

    alert("Crie as Matrizes para a Subtração");
    criarMatriz1();
    criarMatriz2();
    subtrairMatriz();

    document.write("<div class = 'funcoes'>");

    imprimeMatriz1();
    document.write("<p class = 'math-itens'>" + " - " + "</p>");
    imprimeMatriz2();
    document.write("<p class = 'math-itens'>" + " = " + "</p>");
    imprimeMatrizSub();

    document.write("</div>");

    document.write("<h2 class='h2'>" + "Multiplicação" + "</h2>");

    alert("Crie as Matrizes para a Multiplicação");
    criarMatriz1();
    criarMatriz2();
    multiplicarMatriz();

    document.write("<div class = 'funcoes'>");

    imprimeMatriz1();
    document.write("<p class = 'math-itens'>" + " x " + "</p>");
    imprimeMatriz2();
    document.write("<p class = 'math-itens'>" + " = " + "</p>");
    imprimeMatrizMult();

    document.write("</div>");
}

impressão();

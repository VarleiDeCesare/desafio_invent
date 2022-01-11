
function main(name) {
    const nomeSeparado = name.split(" ")
    let novoNome = '';
    contador = 0;

    for (let i = 0; i < nomeSeparado.length; i++) {
        contador += nomeSeparado[i].length + 1;
        if (contador >= 13) {
            novoNome += nomeSeparado[i][0] + ". ";
            continue
        }

        novoNome += nomeSeparado[i] + " ";
    }
    console.log(novoNome);
}


main("Yan Da Silva Fonseca")
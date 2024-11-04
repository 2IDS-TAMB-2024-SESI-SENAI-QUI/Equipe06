function contaRamificacoes(numCarbono, strRamificacoes) {
    const ramificacoes = strRamificacoes.split(",");
    
    if (ramificacoes.length > numCarbono) {
        return false;
    }
    return true;
}

function validaRamificacoes(numCarbono, strRamificacoes) {
    const ramificacoes = strRamificacoes.split(",");

    for (let i = 0; i < ramificacoes.length; i++) {
        let ramoAtual = parseInt(ramificacoes[i]);

        if (ramoAtual > numCarbono) {
            return false;
        }
    }
    return true;
}

function verresultado() {
    const prefixos = ["Met", "Et", "Prop", "But", "Pent", "Hex", "Hept", "Oct", "Non", "Dec", "Undec", "Dodec"];
    const ramificacoes = ["Metil", "Etil", "Propil", "Isopropil", "Butil"];
    
    let texto = document.getElementById("text");
    let numCarbono = document.getElementById("numCarbono");
    let numRami = document.getElementById("numRami");
    let tipoLigacao = document.getElementById("tipoLigacao").value;
    
    let qtdCarbono = parseInt(numCarbono.value);
    let ramificacoesInseridas = numRami.value;
    let qtdRamificacao = ramificacoesInseridas.split(",").length;
    
    let b = "-";
    
    try {
        if (qtdCarbono > 0 && qtdCarbono <= prefixos.length) {
            const sufixo = tipoLigacao == "dupla" ? "en":tipoLigacao == "tripla" ? "in":"an";
            let cadeiaPrincipal = prefixos[qtdCarbono - 1] + b + sufixo + b + "o";

            if (contaRamificacoes(numCarbono.value, ramificacoesInseridas) === false) {
                throw "O número de ramificações não pode ser maior que a quantidade de carbonos!";
            }

            if (validaRamificacoes(numCarbono.value, ramificacoesInseridas) === false) {
                throw "Uma ou mais ramificações inseridas excedem a quantidade de carbonos inserida";
            }

            if (qtdRamificacao > 0 && qtdRamificacao <= ramificacoes.length) {
                let nomeRamificacao = ramificacoes[qtdRamificacao - 1];
                texto.innerText = ramificacoesInseridas + b + nomeRamificacao + b + cadeiaPrincipal;
            } else {
                texto.innerText = cadeiaPrincipal;
            }

        } else {
            throw "O número de carbonos indicado excedeu o limite.";
        }  
    } catch (erro) {
        texto.innerText = erro;
    }
}

function limpar() {
    let numCarbono = document.getElementById("numCarbono");
    let numRami = document.getElementById("numRami");
    let texto = document.getElementById("text");

    numCarbono.value = "";
    numRami.value = "";
    texto.innerText = "";
}


window.addEventListener("DOMContentLoaded", () => {
    const campoRamificacao = document.getElementById("numRami");

    campoRamificacao.addEventListener("input", () => {
        let texto = campoRamificacao.value;
        texto = texto.replace(/[^(\d|,)]/gi, "");
        campoRamificacao.value = texto;
    })
})
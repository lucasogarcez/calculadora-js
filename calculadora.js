function calculadora () {
    const operacao = Number(prompt('Escolha uma opção...:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

    if (!operacao || operacao >= 7) {
        alert("Erro - Operação Inválida!")
        calculadora();
    } else {

        let n1 = Number(prompt('Insira o primeiro valor...: '));
        let n2 = Number(prompt('Insira o segundo valor...: '));
        let resultado;
            
        if (!n1 || !n2) {
            alert("Erro - Parâmetros inválidos!")
            calculadora();
        } else {
            function soma() { 
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                Novaoperacao();
            }
        
            function subtracao() { 
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                Novaoperacao();
            }
                
            function multiplicacao() { 
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                Novaoperacao();
            }
                
            function divisaoreal() { 
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                Novaoperacao();
            }
                
            function divisaointeira() { 
                resultado = n1 % n2;
                alert(`O resto da divisão de ${n1} por ${n2} = ${resultado}`)
                Novaoperacao();
            }
                
            function potenciacao() { 
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}° = ${resultado}`)
                Novaoperacao();
            }
        
            function Novaoperacao() {
                let opcao = prompt("Deseja utilizar a calculadora novamente?\n 1 - Sim\n 2 - Não");
        
                if (opcao == 1) {
                    calculadora();
                }else if (opcao == 2) {
                    alert("Até mais!")
                }else {
                    alert("Digite um valor válido! ")
                    Novaoperacao();
                }
            } 
                
                
            switch (operacao) {
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisaoreal();
                    break;
                case 5:
                    divisaointeira();
                    break;
                case 6:
                    potenciacao();
                    break;
            }
        }
    }
}

calculadora();    
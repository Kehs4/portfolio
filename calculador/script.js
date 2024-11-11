function clicou(){
    let numero = window.prompt("Digite um número")

    let res = document.getElementById('resultado')
    let res1 = (numero * 2)
    let res2 = (numero / 2)
    let res3 = (numero * 5)

    res.innerHTML = `<p>O número escolhido é ${numero}, o dobro dele é ${res1}, a metade é ${res2}, e ele multiplicado por 5 será ${res3}.`

}
    

    


    




let nun = document.querySelector('input#fnun')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isnumero(n) {
     if(Number(n) >=1 && Number (n) <=100) {
          return true
     } else {
          return false
     }
 
function inlista(n, l) {
     if(i.indexOf(Number(n)) != -1) {
          return true
     } else {
          return false
     }
}
function adicionar() {
     if(isnumero(nun.value) && !inlista()) {
          valores.push(Number(nun.value))
          let iten = document.createElementNS('option')
          iten.text = `Valor ${nun.value} adicionado.`
          lista.appendChild(lista)
          res.innerHTML = ''
     } else {
          window.alert('valor invalido ou ja encontrado na lista.')
     }
     nun.value = ''
     nun.focus()
}
}
function finalizar() {
     if (valores.length == 0) {
          window.alert('Adicione valores antes de finalizar!')
     } else {
          let tot = valores.length
          let maior = valores[0]
          let menor = valores[0]
          let soma = valores[0]
          let media = valores[0]
          for(let pos in valores) {
               soma += valores[pos]
               if (valores[pos] > maior)
                    maior = valores[pos]
               if (valores[pos] < menor)
                    menor = valores[pos]     
          }
          media = soma/tot
          res.innerHTML = ''
          res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
          res.innerHTML += `<p> O maio valor imformado foi ${maior}.</p>`
          res.innerHTML += `<p>O menor valor imformado foi ${menor}.</p>`
          res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
          res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
     }
}


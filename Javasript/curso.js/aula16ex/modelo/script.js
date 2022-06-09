
function tabuada() {
     let nun = document.getElementById('txtn')
     let tab = document.getElementById('seltab')
     if (nun.value.length == 0) {
          window.alert('Por favor, digite um número!')
          
     } else {
          let n = Number(nun.value)
          let c = 1
          tab.innerHTML = ''
          while (c <= 10) {
               let item = document.createElement('option')
               item.text = `${n} * ${c} = ${n*c}`
               tab.appendChild(item)
               item.appendChild = `tab${c}`
               c++
          }
     }
}
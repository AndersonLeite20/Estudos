let nun = [6,8,9,3]
nun.push(1)
nun.sort()
console.log(nun)
console.log(nun.sort) // numeros de posiçoes
console.log(`Ò vetor tem ${nun.length} posições`)
console.log(`O primeiro valor do vetor é: ${nun[0]}`)
let pos = nun.indexOf(8)
if (pos == -1) {
     console.log('O valor não foi emcontrado!')
} else {
     console.log(`O valor esta na posiçáo ${pos}`)
}
 


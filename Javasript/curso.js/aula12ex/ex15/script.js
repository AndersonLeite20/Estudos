function verificar() {
     var data = new Date()
     var ano = data.getFullYear()
     var fano = document.getElementById('txtano')
     var res = document.querySelectorAll('res')
     if (fano.Value.length == 0 || nunber(fano.value) > ano) {
          window.alert('Verifique os dados e tente novamente!')
     } else {
          var fsex = document.getElementsByName('radsex')
          var idade = ano - nunber(fano.value)  
          res.innerHTML = `idade calculada ${idade}`
          img.setAttribute('id','foto')
          var genero = ''
          var img = document.createElementNS('img')
          img.setAttribute('id', 'foto')

          if (fsex[0].checked) {
          genero = 'homen'
          if (idade >= 0 && idade <= 0 ) {
               //criança
               img.setAttribute('src','bebe.JPEG')
          } else if (idade > 10 && idade < 21) {
               //joven
               img.setAttribute('src', 'joven-homen.JPEG')
          } else if (idade < 50) {
               //adulto
               img.setAttribute('src', 'joven-homen.JPEG')
          } else {
               //idoso             
               img.setAttribute('src', 'idoso-homen.JPEG')         
          }


          } else if (fsex[1].checked) {
               genero = 'mulher'
          res.style.textAlign = 'center'
          res.innerHTML = `Detectamos ${genero} com ${idade} anos.`

          if (idade >= 0 && idade <= 0 ) {
               //criança
               img.setAttribute('src', 'bebe.JPEG')
          } else if (idade > 10 && idade < 21) {
               //joven
               img.setAttribute('src', 'joven-homen.JPEG')
          } else if (idade < 50) {
               //adulto
               img.setAttribute('src', 'joven-homen.JPEG')
          } else {
               //idosa
               img.setAttribute('src', 'idoasa-mulher.JPEG')
          }
          }  
          res.style.textAlign = 'center'
          res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
          res.appendChild(img)
          res.appendChild(img)
     }
}
function carregar () {
     var msg = window.document.getElementById('msg')
     var img = window.document.getElementById('imagen')
     var data = new Date()
     var hora = data.getHours()
     msg.innerHTML = `Agora sâo ${hora} horas:`
     if (hora >= 0 && hora < 12) {
          //BOM DIA!
          img.src = 'manha'
     } else if (hora >= 12 && hora < 18) {
          //BOA TARDE!
          img.src = 'tarde'
     }    else {
          //BOA NOITE!
          img.src = 'noite'
     }
}
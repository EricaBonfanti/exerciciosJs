function carregar() {
    var msg = window.document.getElementById('msg')
    var picture = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()

    msg.innerHTML = `Agora são ${hora} horas , ${minuto} minutos e ${segundo} segundos.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        picture.src = 'img/manha.webp'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        picture.src = 'img/tarde.webp'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE
        picture.src = 'img/noite.webp'
        document.body.style.background = '#515154'
    
    }

}
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //BOM DIA!!
        img.src="imagens/Dia.png"
        document.body.style.background = '#EEE8AA'
    } else if(hora >=12 && hora < 18){
        //BOA TARDE!!
        img.src="imagens/Tarde.jpeg"
        document.body.style.background = '#F2F5A9'
    } else{
        //BOA NOITE!!
        img.src="imagens/Noite.jpeg"
        document.body.style.background = '#BDBDBD'
    }
}
function carregar(){

var msg= document.getElementById('msg')
var img= document.getElementById('imagem')
var data = new Date()
var hora= data.getHours()


msg.innerHTML = `Agora são ${hora} horas!`

if(hora >=0 && hora < 12){
    img.src= 'midia/manha.png'
document.body.style.background ='#F2C84B'
}else if (hora >= 12 && hora <= 18){
    img.src ='midia/tarde.png'
    document.body.style.background ='#BDCFDD'
}else {
    img.src ='midia/noite.png.png'
    document.body.style.background ='#162730'
    
}


}
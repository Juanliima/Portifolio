function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')

if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
} else {
   var fsex = document.getElementsByName('radsex')
   var idade = ano - Number(fano.value)
   var genero = ''
   var img = document.createElement('img')
   img.setAttribute('id','foto')

   if (fsex[0].checked){
    genero = 'homem'
    if(idade >=0 && idade< 10){//criança
        img.setAttribute('src','midia/foto-bebe-h.png')
    }else if (idade < 30){ //jovem
        img.setAttribute('src','midia/jovem-h.png')
    }else if(idade < 50){//homem
        img.setAttribute('src','midia/homem.png')
    }else{
        //idoso
        img.setAttribute('src','midia/idoso.png')
    }

   }else if(fsex[1].checked){
    genero= 'mulher'

    if(idade >=0 && idade< 10){//criança-menina
        img.setAttribute('src','midia/bebe-m.png')

    }else if (idade < 30){ //jovem-mulher
        img.setAttribute('src','midia/jovem-m.png')

    }else if(idade < 50){// mulher
        img.setAttribute('src','midia/mulher.png')

    }else{
        //idosa
        img.setAttribute('src','midia/idosa.png')
    }

   }
   
   res.innerHTML= `${genero} com ${idade} anos`
   res.appendChild(img)

}
}

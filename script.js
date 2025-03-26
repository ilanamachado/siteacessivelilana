document.addEventListener('DOMcontentLoaded', function(){
let tamanhoAtualFonte= 1;
const aumentaFonteBotao= document.getElementById('aumentar-fonte');

aumentaFonteBotao.addEventListener('click,function(){
    
    tamanhoAtualFonte += 0.1;
document.body.style.fontSize= '${tamanhoAtualFonte}rem';
    }')
    diminuirFonteBotao.addEventListener('click', function(){
        
    })
})
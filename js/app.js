
// E -> enter
// i -> imes
// a -> ai
// o -> ober
// u -> ufat

let buttonEncriptar = document.getElementById('btn-encriptar');
let buttonDesencriptar = document.getElementById('btn-desencriptar');
let buttonLimpiar = document.getElementById('btn-limpiar');
let buttonCopiar = document.getElementById('btn-copiar');
let containerTexto = document.getElementById('container-texto');
let textInput = document.getElementById('text-input');

buttonEncriptar.addEventListener('click',function(){
    let texto = textInput.value;
    containerTexto.textContent = encriptarTexto(texto);
    buttonCopiar.style.display='block';
});

buttonDesencriptar.addEventListener('click',function(){
    let texto = textInput.value;
    containerTexto.textContent = desencriptarTexto(texto);
    buttonCopiar.style.display='block';

});

buttonLimpiar.addEventListener('click',function(){
    limpiarTexto();
})

function encriptarTexto(texto){
    let letras = texto.split("");
    let textoEncriptado = [];
    letras.forEach(letra => {
        switch(letra){
            case 'a':
                letra='ai';
                
            break;
            case 'e':
                letra='enter';
            break;
            case 'i':
                letra = 'imes';
            break;
            case 'o':
                letra = 'ober';
            break;
            case 'u':
                letra = 'ufat';
            break;
            default:
                letra = letra;
            break;
        }
        textoEncriptado.push(letra);
    });

    let resultadoFinal = textoEncriptado.join("");
    return resultadoFinal;
}

function desencriptarTexto(textoEncriptado){
    let textoDesencriptado = textoEncriptado
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return textoDesencriptado;

}

function limpiarTexto(){
    containerTexto.innerHTML='<img src="./src/img/persona.png" alt="persona con computadora" width="100%" id="img-persona"><h5>Ningún mensaje fue encontrado</h5><br><h6>Ingresa el texto que desees encriptar o desencriptar</h6>';
    textInput.value='';
    buttonCopiar.style.display='none';
}

document.getElementById('btn-copiar').addEventListener('click', function() {
    let texto = containerTexto.textContent;
    navigator.clipboard.writeText(texto).then(function() {
        // Notificar al usuario que el texto ha sido copiado
        alert('Texto copiado al portapapeles');
    }).catch(function(error) {
        console.error('Error al copiar el texto: ', error);
    });
});

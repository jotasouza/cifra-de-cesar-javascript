const burgerIcon = document.querySelector('#burguer')
const navbarMenu = document.querySelector('#nav-links')

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
})

//Cria um array com as letras do alfabeto
const alfabetoAmericano = 'abcdefghijlmnopqrstuvwxyz'.split('')

/**
 * Função que gera um mapa de cifras fora do alfabeto
 * Exemplo com um turno 3: {'a': 'd', 'b': 'e', 'c': 'f', ...}
 */

const getCifraMap = (alfabeto, turno) => {
    return alfabeto
    .reduce((charsMap, currentChar, charIndex) => {
        const charsMapClone = {...charsMap}
        //Tornando o deslocamento cíclico (ou seja, com um deslocamento de 1 - 'z' seria mapeado para 'a').
        let encryptedCharIndex = (charIndex + turno) % alfabeto.length;
        //Suporte a turnos negativos para criar um mapa para descriptografia
        //(ou seja, com deslocamento -1 - 'a' seria mapeado para 'z').
        if (encryptedCharIndex < 0) {
            encryptedCharIndex += alfabeto.length;
          }
        charsMapClone[currentChar] = alfabeto[encryptedCharIndex];
        return charsMapClone;
    }, {})
}


//Função responsável por encriptar o texto
/**
 * @param {string} str
 * @param {number} turno
 * @param {string[]} alfabeto
 * @return {string}
 */
const cesarEncrypt = (str, turno, alfabeto = alfabetoAmericano) => {
    // Cria um mapa de cifras
    const cifrasMap = getCifraMap(alfabeto, turno);
    return str
      .toLowerCase()
      .split('')
      .map((char) => cifrasMap[char] || char)
      .join('');
  };
  


//Função responsável por decifrar o texto
/**
 * @param {string} str
 * @param {number} turno
 * @param {string[]} alfabeto
 * @return {string}
 */
const cesarDecrypt = (str, turno, alfabeto = alfabetoAmericano) => {
    // // Cria um mapa de cifras
    const cifrasMap = getCifraMap(alfabeto, -turno);
    return str
      .toLowerCase()
      .split('')
      .map((char) => cifrasMap[char] || char)
      .join('');
  }
  

  async function onCopy(){
    let content = output.value
    await navigator.clipboard.writeText(content)
    output.value = ''
 }

  function download(filename = 'Text.txt', text = output.value){
    let toSaveFileText = document.createElement("a");
    toSaveFileText.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    toSaveFileText.setAttribute('download', filename);


    toSaveFileText.style.display = 'none';
    document.body.appendChild(toSaveFileText);

    toSaveFileText.click();

    document.body.removeChild(toSaveFileText);
    output.value = ''
}

let inputEncode = document.getElementById('textAreaOne')
inputEncode.focus()

let output = document.getElementById('textAreaTwo')

let buttonEncode = document.getElementById('encode')
buttonEncode.addEventListener('click', function(){
  console.log('oi')
    const encodeText = cesarEncrypt(inputEncode.value, 3, alfabetoAmericano)
    output.value = encodeText
    inputEncode.value = ''
    inputEncode.focus()
})

let buttonDecode = document.getElementById('decode')
buttonDecode.addEventListener('click', function(){
    const decodeText = cesarDecrypt(inputEncode.value, 3, alfabetoAmericano)
    output.value = decodeText
    inputEncode.value = ''
    inputEncode.focus()
})


let buttonCopy = documen.getElementById('copy')
buttonCopy.onclick = onCopy

let buttonDownload = document.getElementById('download')
buttonDownload.onclick = download
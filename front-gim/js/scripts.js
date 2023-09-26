
/*
  --------------------------------------------------------------------------------------
  Função para buscar as informações de um medidor
  --------------------------------------------------------------------------------------
*/


const getItem = async (tag_medidor) => {

  let url = 'http://127.0.0.1:5000/medidor?tag=' + tag_medidor;
  fetch(url, {
    method: 'get'
  })
    .then((response) => response.json())
    .then(result => { 
      insertList(result.tag, result.instalacao, result.descricao)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
   
}

/*
  --------------------------------------------------------------------------------------
  Função para buscar as informações de um medidor
  --------------------------------------------------------------------------------------
*/
const newItem = () => {
  let inputProduct = document.getElementById("newInput").value;

  if (inputProduct === '') {
    alert("Escreva a tag do nome medidor!");
  } else {
    getItem(inputProduct)

    alert("Medidor encontrado!")
  }
}

/*
  --------------------------------------------------------------------------------------
  Função para inserir items na lista apresentada
  --------------------------------------------------------------------------------------
*/
const insertList = (tagName, instalacaoName, calibracaoDate) => {

  document.getElementById("tagName").value = tagName;
  document.getElementById("instalacaoName").value = instalacaoName;
  document.getElementById("calibracaoDate").value = calibracaoDate;

}


/* --------------------------------------------------------------------------------------
Função que chama API externa de geração de QR code.
--------------------------------------------------------------------------------------
*/

function gerarQR() {
  
  var endereco = document.getElementById("enderecoBookEMED").value;
  console.log(endereco);
  endereco.src = '';

  const url = 'https://api.qrserver.com/v1/create-qr-code/?data='+endereco+'&size=100x100&format=png'
  document.getElementById('showQRCODE').src = url;

  // document.querySelector('img').src = url;
  // var local = document.getElementById('showQRCODE');
  // local.setAttribute('src', url);

}

// let btn = document.querySelector("#gerarButton");

// btn.addEventListener("click", () => {

//   var endereco = document.getElementById("enderecoBookEMED").value;
//   console.log(endereco)

//   var url = 'https://api.qrserver.com/v1/create-qr-code/?&data='+endereco+'&size=100x100';

//   local = document.getElementById('showQRCODE');

//   document.querySelector('img').src = url;

//   fetch(url, {
//     method: 'get',
//   })
//     .then((response) => {
//       document.querySelector('img').src = response.url;
//       console.log(response);
//     });

// })

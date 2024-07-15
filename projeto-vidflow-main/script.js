const containerVideos = document.querySelector(".videos__container");


let videos = [
    {
      "id": 1,
      "titulo": "Conhecendo a linguagem Go | Hipsters.Talks",
      "descricao": "3 mil visualizações",
      "url": "https://www.youtube.com/embed/y8FeZMv37WU",
      "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
      "categoria": "Programação"
    },
    {
      "id": 2,
      "titulo": "Desmistificando mobile - Linguagens e Frameworks",
      "descricao": "1,5 mil visualizações",
      "url": "https://www.youtube.com/embed/fmu1LQvZhms",
      "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
      "categoria": "Mobile"
    },
    {
      "id": 3,
      "titulo": "Orientação a objetos com Roberta Arcoverde | #Hipster...",
      "descricao": "30 mil visualizações",
      "url": "https://www.youtube.com/embed/jpuJ1qrluoU",
      "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
      "categoria": "Programação"
    },
    {
      "id": 4,
      "titulo": "Linguagens e ferramentas usadas em Ciência de Dados...",
      "descricao": "2,5 mil visualizações",
      "url": "https://www.youtube.com/embed/h83e1aAM5xQ",
      "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
      "categoria": "Data Science"
    },
    {
      "id": 5,
      "titulo": "Reencontrando a paixão por programar: Beatriz Ramerindo",
      "descricao": "1,2 mil visualizações",
      "url": "https://www.youtube.com/embed/CnB3eLTrkn4",
      "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
      "categoria": "Podcasts"
    },
    {
      "id": 6,
      "titulo": "Híbridos: Flutter e React Native | Desmistificando..",
      "descricao": "1,6 mil visualizações",
      "url": "https://www.youtube.com/embed/vf9P_PycgRw",
      "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
      "categoria": "Mobile"
    },
    {
      "id": 7,
      "titulo": "Data Science na prática- com Jéssika Ribeiro do Grupo...",
      "descricao": "3,2 mil visualizações",
      "url": "https://www.youtube.com/embed/Nts3P35mHzE",
      "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
      "categoria": "Data Science"
    },
    {
      "id": 8,
      "titulo": "baNaNa | Memes do JavaScript #2",
      "descricao": "1,2 mil visualizações",
      "url": "https://www.youtube.com/embed/HBVCsBtsmzA",
      "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
      "categoria": "Programação"
    },
    {
      "titulo": "[Casa do Código] Live de lançamento: Navegando no Universo da Programação",
      "descricao": "1 mil visualizações",
      "url": "https://www.youtube.com/embed/z43rcfjXOxU",
      "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
      "id": 9,
      "categoria": "Ao Vivo"
    },
    {
      "titulo": "Guia de carreira Front-end | #HipstersPontoTube",
      "descricao": "18 mil visualizações",
      "url": "https://www.youtube.com/embed/fpth65ts3cw",
      "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
      "id": 10,
      "categoria": "Debates"
    },
    {
      "titulo": "Educação coorporativa",
      "descricao": "4 mil visualizações",
      "url": "https://www.youtube.com/embed/IGFSiBJIXFQ",
      "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
      "id": 11,
      "categoria": "Inovação"
    },
    {
      "titulo": "Como deixar o Layout Responsivo no seu site | #AluraMais",
      "descricao": "7 mil visualizações",
      "url": "https://www.youtube.com/embed/kyFiT4ofMwk",
      "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
      "id": 12,
      "categoria": "Front-end"
    },
    {
      "titulo": "Será que a inteligência artificial será tão poderosa quanto os seres humanos? com Gui Silveira",
      "descricao": "12 mil visualizações",
      "url": "https://www.youtube.com/embed/Kk3vBRqKA2o",
      "imagem": "https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png?raw=true",
      "id": 13,
      "categoria": "Inteligência Artificial"
    }
  ]

  function buscarEMostrarVideos(){
    videos.forEach(video => {
        containerVideos.innerHTML += `
                <li class="videos__item">
                    <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video">
                         <img class="img-canal" src="${video.imagem} alt="Logo do Canal">
                         <h3 class="titulo-video">${video.titulo}</h3>
                        <p class="titulo-canal">${video.descricao}</p>
                        <p class="categoria" hidden>${video.categoria}</p>
                    </div>   
                 </li>`
    })
  }


// async function buscarEMostrarVideos() {
//         try {
//             const busca = await fetch ("http://localhost:3000/videos")
//             const videos = await busca.json();
        
//             videos.forEach((video) =>{
//                 // if(video.categoria == ""){
//                 //     throw new Error("Vídeo não tem categoria")
//                 // }
//                 containerVideos.innerHTML += `
//                 <li class="videos__item">
//                     <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
//                     <div class="descricao-video">
//                         <img class="img-canal" src="${video.imagem} alt="Logo do Canal">
//                         <h3 class="titulo-video">${video.titulo}</h3>
//                         <p class="titulo-canal">${video.descricao}</p>
//                         <p class="categoria" hidden>${video.categoria}</p>
//                     </div>   
//                 </li>`
//             }) 
//         } catch(error){
//             containerVideos.innerHTML = `Houve um erro ao carregar os vídeos: ${error}`
//         } //finally {
//         //     alert("Isso sempre acontece...")
//         // }
//     }

    buscarEMostrarVideos()


// //FILTRAR VIDEOS NA BARRA DE PESQUISA
// const barraDePesquisa = document.querySelector(".pesquisar__input");
// barraDePesquisa.addEventListener('input', filtrarPesquisa )

// function filtrarPesquisa(){
//     const videos = document.querySelectorAll(".videos__item");

//     if(barraDePesquisa.value != ""){
//         for(let video of videos){
//             let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
//             let valorFiltro = barraDePesquisa.value.toLowerCase();

//             if(!titulo.includes(valorFiltro)){
//                 video.style.display = ("none")
//             } else {
//                 video.style.display = ("block")
//             }
//         }
//     } else {
//         videos.style.display = ("block")
//     }
// }


// //FILTRAR VIDEOS PELOS BOTOES DE CATEGORIAS
// const botaoCategoria = document.querySelectorAll(".superior__item");
// // console.log(botaoCategoria)

// botaoCategoria.forEach((botao) => {
//     let nomeCategoria = botao.getAttribute("name");
//     botao.addEventListener("click", () => filtrarPorCategoria(nomeCategoria));
// })

// function filtrarPorCategoria(filtro){
//     const videos = document.querySelectorAll(".videos__item");
//     for (let video of videos){
//         let categoria = video.querySelector(".categoria").textContent.toLowerCase();
//         // console.log(categoria)
//         let valorFiltro = filtro.toLowerCase();
//         // console.log(valorFiltro)

//         if(!categoria.includes(valorFiltro) && valorFiltro != 'tudo'){
//             video.style.display = "none";
//         } else {
//             video.style.display = "block";
//         }
//     }
// }




 
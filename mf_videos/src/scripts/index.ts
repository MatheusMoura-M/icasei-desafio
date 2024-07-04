document.addEventListener("DOMContentLoaded", () => {
  const videosList = document.getElementsByClassName("videos__container")[0]!;

  // Função para buscar vídeos
  function searchVideos(query: string) {}

  // Exemplo de busca de vídeos ao carregar a página
  searchVideos("JavaScript");

  // Exemplo de como adicionar um vídeo na lista
  function addVideoToList(video: any) {
    const videoElement = document.createElement("div");
    videoElement.classList.add("videos__item");
    videoElement.innerHTML = `
        <h3>${video.title}</h3>
        <p>${video.description}</p>
        <button class="favorite-button">Favorito</button>
      `;

    // Implemente a lógica para marcar um vídeo como favorito aqui

    videosList.appendChild(videoElement);
  }

  // Exemplo de como usar a função addVideoToList
  const exampleVideo = {
    title: "Exemplo de Vídeo",
    description: "Descrição do exemplo de vídeo.",
    favorite: false,
  };

  addVideoToList(exampleVideo);
  addVideoToList(exampleVideo);
  addVideoToList(exampleVideo);
  addVideoToList(exampleVideo);
});

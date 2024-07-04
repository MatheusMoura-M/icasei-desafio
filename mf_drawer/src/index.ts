document.addEventListener("DOMContentLoaded", () => {
  const drawerContent = document.getElementById(
    "videos__container__principal"
  )!;

  // Função para carregar micro-frontends
  function loadMicrofrontend(mfName: string, mfPath: string) {
    fetch(mfPath)
      .then((response) => {
        console.log(response);

        return response.text();
      })
      .then((html) => {
        // console.log(html);
        drawerContent.innerHTML = html;
      })
      .catch((error) => {
        console.error(`Failed to load microfrontend ${mfName}:`, error);
      });
  }

  // Carrega o micro-frontend de VÍDEOS ao clicar no link
  document.getElementById("videos-link")!.addEventListener("click", (event) => {
    event.preventDefault();
    history.pushState({}, "", "/videos");

    loadMicrofrontend("mf_videos", "http://127.0.0.1:5501");
  });

  // Carrega o micro-frontend de FAVORITOS ao clicar no link
  document
    .getElementById("favoritos-link")!
    .addEventListener("click", (event) => {
      event.preventDefault();
      loadMicrofrontend("mf_favoritos", "../index.html");
    });
});

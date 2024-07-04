export class ListVideos {
  static handleList(video) {
    let videosList = document.querySelector(".videos__container");

    let videoElement = document.createElement("li");

    let iframe = document.createElement("iframe");
    let i = document.createElement("i");
    let boxTitleVideo = document.createElement("div");
    let title = document.createElement("h3");

    iframe.src = `https://www.youtube.com/embed/${video.id.videoId}`;
    iframe.frameborder = "0";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen;

    title.textContent = video.snippet.title;

    videoElement.classList = "videos__item";
    iframe.classList = "iframeItem";
    i.classList = "far fa-star favorito";
    title.classList = "titulo__video";
    boxTitleVideo.classList = "container__titulo__video";

    const favorites =
      JSON.parse(localStorage.getItem("@iCasei/favorites")) || [];
    const isFavorite = favorites.some((fav) => fav.id === video.id.videoId);

    if (isFavorite) {
      i.classList.add("fas");
    } else {
      i.classList.add("far");
    }

    i.addEventListener("click", function () {
      if (i.classList.contains("fas")) {
        i.classList.add("far");
        i.classList.remove("fas");
      } else {
        i.classList.add("fas");
        i.classList.remove("far");
      }

      if (i.classList.contains("fas")) {
        ListVideos.addToFavorites(video);
      } else {
        ListVideos.removeFromFavorites(video.id.videoId);
      }
    });

    boxTitleVideo.append(title, i);
    videoElement.append(iframe, boxTitleVideo);

    videosList.appendChild(videoElement);
  }

  static sendMessageToParent(action, video) {
    window.parent.postMessage({ action, video }, "*");
  }

  static addToFavorites(video) {
    let favorites = JSON.parse(localStorage.getItem("@iCasei/favorites")) || [];

    favorites.push({
      id: video.id.videoId,
      title: video.snippet.title,
    });

    localStorage.setItem("@iCasei/favorites", JSON.stringify(favorites));
    ListVideos.sendMessageToParent("addFavorite", {
      id: video.id.videoId,
      title: video.snippet.title,
    });
  }

  static removeFromFavorites(videoId) {
    let favorites = JSON.parse(localStorage.getItem("@iCasei/favorites")) || [];
    let updatedFavorites = favorites.filter((fav) => fav.id !== videoId);

    localStorage.setItem("@iCasei/favorites", JSON.stringify(updatedFavorites));
    ListVideos.sendMessageToParent("removeFavorite", { id: videoId });
  }
}

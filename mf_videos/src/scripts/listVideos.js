export class ListVideos {
  static handleList(video) {
    let videosList = document.querySelector(".videos__container");

    let videoElement = document.createElement("div");
    videoElement.classList.add("videos__item");

    const iframe = document.createElement("iframe");

    iframe.classList = "iframeItem";
    iframe.src = `https://www.youtube.com/embed/${video.id.videoId}`;
    iframe.frameborder = "0";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.title = video.snippet.title;
    iframe.classList = "iframeItem";

    const i = document.createElement("i");
    i.classList = "fas fa-star favorito";

    videoElement.append(iframe, i);
    videosList.appendChild(videoElement);
  }
}

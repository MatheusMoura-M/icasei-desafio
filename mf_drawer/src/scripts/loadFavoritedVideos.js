export class LoadFavoritedVideos {
  static list(video) {
    let videosList = document.getElementById("videos__container");
    let videoElement = document.createElement("li");

    let iframe = document.createElement("iframe");
    let i = document.createElement("i");
    let boxTitleVideo = document.createElement("div");
    let title = document.createElement("h3");

    iframe.src = `https://www.youtube.com/embed/${video.id}`;
    iframe.frameborder = "0";

    title.textContent = video.title;

    videoElement.classList = "video__item";
    iframe.classList = "iframeItem";
    i.classList = "fas fa-star favorito";
    title.classList = "titulo__video";
    boxTitleVideo.classList = "container__titulo__video";

    boxTitleVideo.append(title, i);
    videoElement.append(iframe, boxTitleVideo);

    videosList.appendChild(videoElement);
  }
}

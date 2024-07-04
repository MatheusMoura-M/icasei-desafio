import { Search } from "./search.js";
import { ListVideos } from "./listVideos.js";

document.addEventListener("DOMContentLoaded", async function () {
  let videosList = document.querySelector(".videos__container");

  Search.handleSearch((videos) => {
    videosList.innerHTML = "";

    videos.forEach((video) => ListVideos.handleList(video));
  });
});

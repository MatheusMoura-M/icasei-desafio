import { Counter } from "./countFavorites.js";
import { HandlePostMessage } from "./handlePostMessage.js";
import { LoadFavoritedVideos } from "./loadFavoritedVideos.js";
import { Menu } from "./menu.js";

document.addEventListener("DOMContentLoaded", function () {
  let videosList = document.getElementById("videos__container");
  videosList.innerHTML = "";

  let favorites = JSON.parse(localStorage.getItem("@iCasei/favorites")) || [];

  favorites.forEach((video) => LoadFavoritedVideos.list(video));

  Menu.renderList1();
  Menu.renderList2();
  Menu.renderList3();
  Menu.renderList4();
  Counter.listNumberOfFavorites();
  HandlePostMessage.listeningMessage();

  document
    .getElementById("videos-link")
    .addEventListener("click", function (event) {
      event.preventDefault();
      window.location.replace("../index.html");
    });

  document
    .getElementById("favoritos-link")
    .addEventListener("click", function (event) {
      event.preventDefault();
      window.location.replace("../favorite.html");
    });
});

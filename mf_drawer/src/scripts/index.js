import { Counter } from "./countFavorites.js";
import { HandlePostMessage } from "./handlePostMessage.js";
import { Menu } from "./menu.js";

document.addEventListener("DOMContentLoaded", function () {
  HandlePostMessage.listeningMessage();
  Menu.renderList1();
  Menu.renderList2();
  Menu.renderList3();
  Menu.renderList4();
  Counter.listNumberOfFavorites();

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

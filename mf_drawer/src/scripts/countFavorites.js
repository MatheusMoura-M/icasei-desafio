export class Counter {
  static listNumberOfFavorites() {
    let favorites = JSON.parse(localStorage.getItem("@iCasei/favorites")) || [];
    let favoriteButton = document.getElementsByClassName("menu__itens")[1];

    let spanCounter = document.createElement("span");

    spanCounter.innerText = favorites.length;
    spanCounter.className = "contador__favoritos";

    favoriteButton.appendChild(spanCounter);

    window.addEventListener("message", function (event) {
      if (event.origin !== "http://localhost:5501") {
        return;
      }

      let favorites =
        JSON.parse(localStorage.getItem("@iCasei/favorites")) || [];

      spanCounter.innerText = favorites.length;
    });
  }
}

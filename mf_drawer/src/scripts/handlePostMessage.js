export class HandlePostMessage {
  static listeningMessage() {
    window.addEventListener("message", function (event) {
      if (event.origin !== "http://localhost:5501") {
        return;
      }

      const { action, video } = event.data;

      if (action && video && video.id) {
        if (action === "addFavorite") {
          let favorites =
            JSON.parse(localStorage.getItem("@iCasei/favorites")) || [];
          favorites.push({
            id: video.id,
            title: video.title,
          });

          localStorage.setItem("@iCasei/favorites", JSON.stringify(favorites));
        } else if (action === "removeFavorite") {
          let favorites =
            JSON.parse(localStorage.getItem("@iCasei/favorites")) || [];
          let updatedFavorites = favorites.filter((fav) => fav.id !== video.id);

          localStorage.setItem(
            "@iCasei/favorites",
            JSON.stringify(updatedFavorites)
          );
        }
      }
    });
  }
}

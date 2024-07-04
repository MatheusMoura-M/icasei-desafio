import { api } from "../axios.js";

export class Search {
  static async handleSearch(callback) {
    const inputSearch = document.querySelectorAll(".input__pesquisa")[0];
    const btnRegistrar = document.querySelectorAll(".container__pesquisa")[0];

    btnRegistrar.addEventListener("click", async (event) => {
      event.preventDefault();

      if (!inputSearch.value.trim()) {
        console.log("Campo de busca vazio. Não realizando a busca.");
        return;
      }

      //   try {
      //     const { data } = await api.get(`?q=${inputSearch.value}&maxResults=15`);

      //     callback(data.items);
      //   } catch (err) {
      //     console.log(err);
      //     throw new Error(err.response.data.error);
      //   }
    });
    try {
      const { data } = await api.get(`?q=${inputSearch.value}&maxResults=15`);

      callback(data.items);
    } catch (err) {
      console.log(err);
      throw new Error(err.response.data.error);
    }
  }
}

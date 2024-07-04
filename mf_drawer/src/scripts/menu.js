export class Menu {
  static list_1 = [
    {
      id: "videos-link",
      class: "icone__inicio",
      spanText: "Início",
    },
    {
      id: "favoritos-link",
      class: "fas",
      classSecond: "fa-star",
      spanText: "Favoritos",
    },
    {
      class: "icone__explorar",
      spanText: "Explorar",
    },
    {
      class: "icone__shorts",
      spanText: "Shorts",
    },
    {
      class: "icone__inscricoes",
      spanText: "Inscrições",
    },
    {
      class: "icone__biblioteca",
      spanText: "Biblioteca",
    },
  ];

  static list_2 = [
    {
      class: "icone__historico",
      spanText: "Histórico",
    },
    {
      class: "icone__relogio",
      spanText: "Assistir mais tarde",
    },
    {
      class: "icone__like",
      spanText: "Marcados com like",
    },
  ];

  static list_3 = [
    {
      class: "icone__mostrar",
      spanText: "Mostrar mais 2",
    },
    {
      class: "icone__deschamps",
      spanText: "Felipe Deschamps",
    },
    {
      class: "icone__nerd",
      spanText: "Jovem Nerd",
    },
    {
      class: "icone__souto",
      spanText: "Mario Souto",
    },
    {
      class: "icone__iamarino",
      spanText: "Atila Iamarino",
    },
    {
      class: "icone__ballerini",
      spanText: "Rafaella Ballerini",
    },
    {
      class: "icone__gaveta",
      spanText: "Gaveta",
    },
    {
      class: "icone__alura",
      spanText: "Alura",
    },
  ];

  static list_4 = [
    {
      classMenuItem: "premium",
      class: "icone__videos",
      spanText: "Vídeo Premium",
    },
    {
      classMenuItem: "filmes",
      class: "icone__filmes",
      spanText: "Filmes",
    },
    {
      classMenuItem: "jogos",
      class: "icone__jogos",
      spanText: "Jogos",
    },
  ];

  static renderList1() {
    let menuContainer = document.getElementsByClassName("menu__container")[0];
    let menuLista = document.createElement("ul");
    menuLista.className = "menu__lista";

    Menu.list_1.forEach((elem) => {
      let menuItem = document.createElement("li");
      let iconItem = document.createElement("i");
      let spanItem = document.createElement("span");

      if (elem.id) {
        menuItem.id = elem.id;
      }

      menuItem.className = "menu__itens";
      iconItem.className = "icone-item";
      iconItem.classList.add(elem.class);

      if (elem.classSecond) {
        menuItem.classList.add("item__favorito");
        iconItem.classList.add(elem.classSecond);
      }

      spanItem.textContent = elem.spanText;

      menuItem.append(iconItem, spanItem);
      menuLista.appendChild(menuItem);
    });

    menuContainer.appendChild(menuLista);
  }

  static renderList2() {
    let menuContainer = document.getElementsByClassName("menu__container")[0];
    let menuLista = document.createElement("ul");
    menuLista.className = "menu__lista";

    Menu.list_2.forEach((elem) => {
      let menuItem = document.createElement("li");
      let iconItem = document.createElement("i");
      let spanItem = document.createElement("span");

      menuItem.className = "menu__itens";
      iconItem.className = "icone-item";
      iconItem.classList.add(elem.class);

      spanItem.textContent = elem.spanText;

      menuItem.append(iconItem, spanItem);
      menuLista.appendChild(menuItem);
    });

    menuContainer.appendChild(menuLista);
  }

  static renderList3() {
    let menuContainer = document.getElementsByClassName("menu__container")[0];
    let menuLista = document.createElement("ul");
    menuLista.className = "menu__lista";

    Menu.list_3.forEach((elem) => {
      let menuItem = document.createElement("li");
      let iconItem = document.createElement("i");
      let spanItem = document.createElement("span");

      menuItem.className = "menu__itens";
      iconItem.className = "icone-item";
      iconItem.classList.add(elem.class);

      spanItem.textContent = elem.spanText;

      menuItem.append(iconItem, spanItem);
      menuLista.appendChild(menuItem);
    });

    let menuItemAdd = document.createElement("li");
    let textItem = document.createElement("h2");

    textItem.className = "menu__itens inscricoes";
    textItem.textContent = "INSCRIÇÕES";

    menuItemAdd.appendChild(textItem);
    menuLista.appendChild(menuItemAdd);
    menuContainer.appendChild(menuLista);
  }

  static renderList4() {
    let menuContainer = document.getElementsByClassName("menu__container")[0];
    let menuLista = document.createElement("ul");
    menuLista.className = "menu__lista";

    Menu.list_4.forEach((elem) => {
      let menuItem = document.createElement("li");
      let boxItem = document.createElement("a");
      let iconItem = document.createElement("i");
      let spanItem = document.createElement("span");

      menuItem.className = elem.classMenuItem;
      boxItem.className = "menu__itens";
      iconItem.className = "icone-item";
      iconItem.classList.add(elem.class);

      spanItem.textContent = elem.spanText;

      boxItem.append(iconItem, spanItem);
      menuItem.appendChild(boxItem);
      menuLista.appendChild(menuItem);
    });

    let menuItemAdd = document.createElement("li");
    let textItem = document.createElement("a");

    menuItemAdd.className = "menu__itens maispagina";
    textItem.textContent = "MAIS DA PÁGINA";

    menuItemAdd.appendChild(textItem);
    menuLista.appendChild(menuItemAdd);
    menuContainer.appendChild(menuLista);
  }
}

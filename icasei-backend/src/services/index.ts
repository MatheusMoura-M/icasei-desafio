import axios from "axios";
import { AppError } from "../errors";

const getVideosBySearchService = async (query: any) => {
  const api = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
  });

  const data = {
    kind: "youtube#searchListResponse",
    etag: "V49h-byiyFzj0PHr55QiQK2WHzc",
    nextPageToken: "CAIQAA",
    regionCode: "BR",
    pageInfo: {
      totalResults: 1000000,
      resultsPerPage: 2,
    },
    items: [
      {
        kind: "youtube#searchResult",
        etag: "7vqyZ9MTrU9hiHmAKP_Iwu5pjRY",
        id: {
          kind: "youtube#video",
          videoId: "ProniRfIQ84",
        },
        snippet: {
          publishedAt: "2024-06-21T15:08:01Z",
          channelId: "UCIXguhHCl8eDTkXpEuiGPUA",
          title: "O JOGO DE TERROR DO POU!",
          description:
            "Taí um personagem que eu NUNCA imaginaria ganhando um jogo de terror. O fofo boneco virtual de celular que você ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/ProniRfIQ84/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/ProniRfIQ84/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/ProniRfIQ84/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Jazzghost",
          liveBroadcastContent: "none",
          publishTime: "2024-06-21T15:08:01Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "gTxQbSVvLEBM-VcTHO3aq27lN1c",
        id: {
          kind: "youtube#video",
          videoId: "3bfFEoP935M",
        },
        snippet: {
          publishedAt: "2024-06-26T03:13:50Z",
          channelId: "UCgCKagVhzGnZcuP9bSMgMCg",
          title:
            "CHILE 0 X 1 ARGENTINA| MELHORES MOMENTOS | 2ª RODADA DA CONMEBOL COPA AMÉRICA 2024 | sportv",
          description:
            "Argentina vence o Chile no fim e é primeira classificada para as quartas da Copa América. Com gol de Lautaro aos 42 do ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/3bfFEoP935M/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/3bfFEoP935M/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/3bfFEoP935M/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "ge",
          liveBroadcastContent: "none",
          publishTime: "2024-06-26T03:13:50Z",
        },
      },
    ],
  };

  //   const data = await api
  //     .get(
  //       `/search?key=AIzaSyDInMqt_5xWpTKg3Y9NThUW62cxgZGO9sI&part=snippet&q=${query?.q}&maxResults=${query?.maxResults}`
  //     )
  //     .then((res) => res.data)
  //     .catch((err) => {
  //       console.log(err);
  //       throw new AppError(err.response.data.error, 404);
  //     });

  return data;
};

export default getVideosBySearchService;

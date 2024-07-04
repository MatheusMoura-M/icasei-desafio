import axios from "axios";
import { AppError } from "../errors";

const getVideosBySearchService = async (query: any) => {
  const api = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
  });

  const data = await api
    .get(
      `/search?key=AIzaSyBiUjTJaHc_KWN3frWp346TkYxWHeUBxpc&part=snippet&q=${query?.q}&maxResults=15`
    )
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
      throw new AppError(err.response.data.error, 404);
    });

  return data;
};

export default getVideosBySearchService;

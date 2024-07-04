import { Request, Response } from "express";
import getVideosBySearchService from "../services";

const getVideosBySearchController = async (req: Request, res: Response) => {
  console.log(req.query);
  const data = await getVideosBySearchService(req.query);

  return res.json(data);
};

export default getVideosBySearchController;

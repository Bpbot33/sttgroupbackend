import { Request, Response } from "express";

const characterController = {
  list: (_req: Request, res: Response) => {
    res.send("hola");
  },
};

export default characterController;

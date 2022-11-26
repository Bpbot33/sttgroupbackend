import data from "../../data.json";
import { Request, Response } from "express";
import Character from "../models/Character.Model";

const characterController = {
  list: async (_req: Request, res: Response) => {
    const characters = await Character.find({});
    res.send(characters);
  },

  populateDB: async (_req: Request, res: Response) => {
    const populateDb = async () => {
      const dataForDB = data;

      dataForDB.forEach((el) => {
        let character = {
          name: el.name,
          image: el.image,
          status: el.status,
          species: el.species,
          gender: el.gender,
          location: el.location.name,
          comments: [],
        };
        const newChar = new Character(character);
        newChar.save();
      });

      //  return dataForDB;
    };
    populateDb();
    res.send("entro");
  },
};

export default characterController;

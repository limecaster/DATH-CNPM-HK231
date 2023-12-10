import { Favorite } from "../models/Favorite.js";
import { db } from "../config/dbConfig.js";

export const isFavorite = async (req, res) => {
  try {
    const { readerId, ISBN } = req.body;
    const result = await Favorite.getFavorite(readerId, ISBN);
    if (result) return res.status(200).send({ isFavorite: true });
    else return res.status(400).send({ isFavorite: false });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const setFavorite = async (req, res) => {
  try {
    const { readerId, ISBN } = req.body;
    const result = await Favorite.setFavorite(readerId, ISBN);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

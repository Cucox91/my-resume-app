import { Request, Response, NextFunction, RequestHandler } from "express";
import Hobby, { IHobby } from "../models/mongoose/HobbyModel";

export const getAllHobbies: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const hobbies = await Hobby.find();
    res.json(hobbies);
  } catch (error) {
    next(error);
  }
};

export const getHobby: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const hobby = await Hobby.findById(id);
    if (!hobby) {
      res.status(404).json({ message: "Hobby not found" });
    }
    res.json(hobby);
  } catch (error) {
    next(error);
  }
};

export const createHobby: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newHobby: IHobby = new Hobby(req.body);
    const savedHobby = await newHobby.save();
    res.status(201).json(savedHobby);
  } catch (error) {
    next(error);
  }
};

export const updateHobby: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updatedHobby = await Hobby.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedHobby) {
      res.status(404).json({ message: "Hobby not found" });
    }
    res.json(updatedHobby);
  } catch (error) {
    next(error);
  }
};

export const deleteHobby: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deletedHobby = await Hobby.findByIdAndDelete(id);
    if (!deletedHobby) {
      res.status(404).json({ message: "Hobby not found" });
    }
    res.json({ message: "Hobby deleted successfully" });
  } catch (error) {
    next(error);
  }
};

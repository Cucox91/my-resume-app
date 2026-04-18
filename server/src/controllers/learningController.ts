import { Request, Response, NextFunction, RequestHandler } from "express";
import Learning, { ILearning } from "../models/mongoose/LearningModel";

export const getAllLearning: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await Learning.find();
    res.json(items);
  } catch (error) {
    next(error);
  }
};

export const getLearning: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const item = await Learning.findById(id);
    if (!item) {
      res.status(404).json({ message: "Learning item not found" });
    }
    res.json(item);
  } catch (error) {
    next(error);
  }
};

export const createLearning: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newItem: ILearning = new Learning(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    next(error);
  }
};

export const updateLearning: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updatedItem = await Learning.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedItem) {
      res.status(404).json({ message: "Learning item not found" });
    }
    res.json(updatedItem);
  } catch (error) {
    next(error);
  }
};

export const deleteLearning: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deletedItem = await Learning.findByIdAndDelete(id);
    if (!deletedItem) {
      res.status(404).json({ message: "Learning item not found" });
    }
    res.json({ message: "Learning item deleted successfully" });
  } catch (error) {
    next(error);
  }
};

import { Request, Response, NextFunction, RequestHandler } from "express";
import Education, { IEducation } from "../models/mongoose/EducationModel";
import Subject, { ISubject } from "../models/mongoose/SubjectModel";

// Retrieve all education
export const getAllEducation: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (error) {
    next(error);
  }
};

// Retrieve a single education by ID
export const getEducation: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const education = await Education.findById(id).populate({
      path: "subjects",
      model: Subject,
    });
    if (!education) {
      res.status(404).json({ message: "Education not found" });
    }
    res.json(education);
  } catch (error) {
    next(error);
  }
};

// Create a new education
export const createEducation: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newEducation: IEducation = new Education(req.body);
    const savedEducation = await newEducation.save();
    res.status(201).json(savedEducation);
  } catch (error) {
    next(error);
  }
};

// Update an existing education by ID
export const updateEducation: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updatedEducation = await Education.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedEducation) {
      res.status(404).json({ message: "Education not found" });
    }
    res.json(updatedEducation);
  } catch (error) {
    next(error);
  }
};

// Delete an education by ID
export const deleteEducation: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deletedEducation = await Education.findByIdAndDelete(id);
    if (!deletedEducation) {
      res.status(404).json({ message: "Education not found" });
    }
    res.json({ message: "Education deleted successfully" });
  } catch (error) {
    next(error);
  }
};

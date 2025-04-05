import { Request, Response, NextFunction, RequestHandler } from "express";
import Experience, { IExperience } from "../models/mongoose/ExperienceModel";

// Retrieve all experiences
export const getAllExperiences: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const experiences = await Experience.find().sort({ fromDate: -1 });
    res.json(experiences);
  } catch (error) {
    next(error);
  }
};

// Retrieve a single experience by ID
export const getExperience: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const experience = await Experience.findById(id).populate({ path: "skills", model: "Skill" }).populate("projects").populate({ path: "projects.skills", model: "Skill" });

    if (!experience) {
      res.status(404).json({ message: "Experience not found" });
    }
    res.json(experience);
  } catch (error) {
    next(error);
  }
};

// Create a new experience
export const createExperience: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newExperience: IExperience = new Experience(req.body);
    const savedExperience = await newExperience.save();
    res.status(201).json(savedExperience);
  } catch (error) {
    next(error);
  }
};

// Update an existing experience by ID
export const updateExperience: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updatedExperience = await Experience.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedExperience) {
      res.status(404).json({ message: "Experience not found" });
    }
    res.json(updatedExperience);
  } catch (error) {
    next(error);
  }
};

// Delete an experience by ID
export const deleteExperience: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deletedExperience = await Experience.findByIdAndDelete(id);
    if (!deletedExperience) {
      res.status(404).json({ message: "Experience not found" });
    }
    res.json({ message: "Experience deleted successfully" });
  } catch (error) {
    next(error);
  }
};

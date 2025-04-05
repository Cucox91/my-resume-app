import { Request, Response, NextFunction, RequestHandler } from "express";
import Skill, { ISkill } from "../models/mongoose/SkillModel";

// Retrieve all skills
export const getAllSkills: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    next(error);
  }
};

// Retrieve a single skills by ID
export const getSkill: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const skills = await Skill.findById(id);
    if (!skills) {
      res.status(404).json({ message: "Skill not found" });
    }
    res.json(skills);
  } catch (error) {
    next(error);
  }
};

// Create a new skills
export const createSkill: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newSkill: ISkill = new Skill(req.body);
    const savedSkill = await newSkill.save();
    res.status(201).json(savedSkill);
  } catch (error) {
    next(error);
  }
};

// Update an existing skills by ID
export const updateSkill: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updatedSkill = await Skill.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedSkill) {
      res.status(404).json({ message: "Skill not found" });
    }
    res.json(updatedSkill);
  } catch (error) {
    next(error);
  }
};

// Delete an skills by ID
export const deleteSkill: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const deletedSkill = await Skill.findByIdAndDelete(id);
    if (!deletedSkill) {
      res.status(404).json({ message: "Skill not found" });
    }
    res.json({ message: "Skill deleted successfully" });
  } catch (error) {
    next(error);
  }
};

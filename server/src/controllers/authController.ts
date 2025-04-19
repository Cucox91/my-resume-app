import { Request, Response, NextFunction } from "express";
import User from "../models/mongoose/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "changeme";
const TOKEN_EXPIRY = "1h"; // 1 hour

/**
 * POST /api/auth/register
 * Optional method to create a new user for testing
 */
export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { username, password } = req.body;
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create and save user
    const newUser = new User({ username, passwordHash });
    await newUser.save();

    const token = jwt.sign({ userId: newUser.id, username }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    next(error);
  }
};

/**
 * POST /api/auth/login
 */
export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { username, password } = req.body;

    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare password with stored hash
    const isMatch = await bcrypt.compare(password, user!.passwordHash);
    if (!isMatch) {
      res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user!._id, username }, JWT_SECRET, {
      expiresIn: TOKEN_EXPIRY,
    });

    // Send token to client
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

export const getUserDetails = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const setUserDetails = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // Loop over the fields in req.body
    for (const key in req.body) {
      if (Object.prototype.hasOwnProperty.call(req.body, key)) {
        const value = req.body[key];

        if (value !== undefined && value !== "") {
          // Only update if the value is not empty or undefined
          user.set(key, value);
        }
      }
    }

    user.latestUpdate = new Date();
    const updatedUser = await user.save();

    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};

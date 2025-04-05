import { IExperience } from "./IExperience";

export interface ISkill {
  _id?: string | undefined;
  name: string;
  description?: string;
  confidence: string;
  yearsOfProffesionalExperience: number;
  yearsOfIndividualExperience: number;
  yearLastUse: number;
  notes: string[];
  experiences: IExperience[];
}

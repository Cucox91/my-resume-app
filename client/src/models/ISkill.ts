export interface ISkill {
  _id?: string | undefined;
  name: string;
  description?: string;
  yearsOfProffesionalExperience: number;
  yearsOfIndividualExperience: number;
  yearLastUse: number;
  notes: string[];
}

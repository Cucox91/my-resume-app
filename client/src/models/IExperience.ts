export interface IExperience {
  _id?: string | undefined;
  title: string;
  company: string;
  fromDate: Date;
  toDate: Date | null;
  responsibilities: string[];
  location?: string;
  teamSize?: number;
  achievements?: string[];
  skills?: string[];
  projects?: {
    name: string;
    description?: string;
    skills: string[];
  }[];
}

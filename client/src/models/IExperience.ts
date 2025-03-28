export interface IExperience {
  _id?: string | undefined,
  title: string;
  company: string;
  fromDate: Date;
  toDate: Date | null;
  responsibilities: string[];
}

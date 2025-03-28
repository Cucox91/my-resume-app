export interface IExperience {
  id?: string | undefined,
  userId: string,
  title: string;
  company: string;
  fromDate: Date;
  toDate: Date | null;
  responsibilities: string[];
}

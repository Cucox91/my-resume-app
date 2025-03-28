export interface IEducation {
    _id?: string | undefined,
    title: string;
    school: string;
    fromDate: Date;
    toDate: Date | null;
    responsibilities: string[];
  }
  
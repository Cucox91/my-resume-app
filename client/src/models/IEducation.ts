export interface IEducation {
    id?: string | undefined,
    userId: string,
    title: string;
    school: string;
    fromDate: Date;
    toDate: Date | null;
    responsibilities: string[];
  }
  
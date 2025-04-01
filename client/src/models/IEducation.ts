export interface ISubject {
  id?: string | undefined;
  name: string;
  description?: string;
  semester: number;
  notes: string[];
  biography: string[];
  education: string;
}

export interface IEducation {
  _id?: string | undefined;
  title: string;
  school: string;
  fromDate: Date;
  toDate: Date | null;
  responsibilities: string[];
  subject: ISubject[];
}

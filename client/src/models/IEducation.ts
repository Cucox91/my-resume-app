export interface IConcept {
  title: string;
  summary: string;
  keyPoints: string[];
  tags?: string[];
  relatedApplications?: string[];
}

export interface ISubject {
  id?: string | undefined;
  name: string;
  description?: string;
  semester: number;
  notes: string[];
  biography: string[];
  education: string;
  concepts: IConcept[];
}

export interface IEducation {
  _id?: string | undefined;
  title: string;
  school: string;
  fromDate: Date;
  toDate: Date | null;
  responsibilities: string[];
  subjects: ISubject[];
  generalNotes: string[];
}

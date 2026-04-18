export interface ILearning {
  _id?: string;
  name: string;
  description?: string;
  status: "in-progress" | "completed" | "planned";
  url?: string;
}

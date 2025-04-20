export interface IUser {
  username: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  email: string;
  latestUpdate: Date | null;
  bioCliche: string;
  bioHonest: string;
  avatar?: {
    data: {
      type: string;
      data: number[];
    };
  };
}

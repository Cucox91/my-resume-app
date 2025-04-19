export interface JwtPayload {
  username: string;
  email?: string;
  exp: number;
  iat: number;
}

export interface UserContextType {
  user: JwtPayload | null;
  setUser: React.Dispatch<React.SetStateAction<JwtPayload | null>>;
}

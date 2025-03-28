import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";

interface JwtPayload {
  username: string;
  email?: string;
  // Add other properties that you expect (e.g., userId, roles, etc.)
  exp: number; // expiration timestamp
  iat: number; // issued at timestamp
}

const AdminDashboard: React.FC = () => {
  const [user, setUser] = useState<JwtPayload | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode<JwtPayload>(token);
        setUser(decoded);
      } catch (error) {
        console.error("Failed to decode token", error);
      }
    }
  }, []);

  if (!user) {
    return <p>No user information available. Please log in.</p>;
  }

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      {user.email && <p>Email: {user.email}</p>}
      {/* You can display more user details here */}
    </div>
  );
};

export default AdminDashboard;

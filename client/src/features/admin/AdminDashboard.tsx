import React from "react";
import { useUser } from "../../context/useUser";

const AdminDashboard: React.FC = () => {
  const { user } = useUser();

  return (
    <>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          {user.email && <p>Email: {user.email}</p>}
          {/* You can display more user details here */}
        </div>
      ) : (
        <p>No user information available. Please log in.</p>
      )}
    </>
  );
};

export default AdminDashboard;

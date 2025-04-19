import React from "react";
import { useUser } from "../../context/useUser";
import { Tab, TabPane } from "semantic-ui-react";
import EditUserDetailsForm from "./EditUserDetailsForm";

const panes = [
  {
    menuItem: { key: "User Details", icon: "user", content: "User Details" },
    render: () => (
      <TabPane attached={false}>
        <EditUserDetailsForm />
      </TabPane>
    ),
  },
  {
    menuItem: { key: "Experience", icon: "briefcase", content: "Experience" },
    render: () => <TabPane attached={false}>Experience</TabPane>,
  },
  {
    menuItem: { key: "Education", icon: "student", content: "Education" },
    render: () => <TabPane attached={false}>Education</TabPane>,
  },
  // {
  //   menuItem: { key: "Skills", icon: "code", content: "Skills" },
  //   render: () => <TabPane attached={false}>Skills</TabPane>,
  // },
  // {
  //   menuItem: { key: "Hobbies", icon: "untappd", content: "Hobbies" },
  //   render: () => <TabPane attached={false}>Hobbies</TabPane>,
  // },
  // {
  //   menuItem: { key: "Learning", icon: "book", content: "Learning" },
  //   render: () => <TabPane attached={false}>Learning</TabPane>,
  // },
];

const AdminDashboard: React.FC = () => {
  const { user } = useUser();

  return (
    <>
      {user ? (
        <>
          <h2 style={{ textAlign: "center" }}>Welcome, {user.username}!</h2>
          {/* You can display more user details here */}
          <Tab menu={{ attached: false, tabular: false }} panes={panes} />
        </>
      ) : (
        <p>No user information available. Please log in.</p>
      )}
    </>
  );
};

export default AdminDashboard;

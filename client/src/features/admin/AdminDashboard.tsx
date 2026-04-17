import React from "react";
import { useUser } from "../../context/useUser";
import { Tab, TabPane } from "semantic-ui-react";
import EditUserDetailsForm from "./EditUserDetailsForm";
import ExperienceTab from "./tabs/ExperienceTab";
import EducationTab from "./tabs/EducationTab";
import SkillsTab from "./tabs/SkillsTab";
import HobbyTab from "./tabs/HobbyTab";
import LearningTab from "./tabs/LearningTab";

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
    render: () => <TabPane attached={false}><ExperienceTab /></TabPane>,
  },
  {
    menuItem: { key: "Education", icon: "student", content: "Education" },
    render: () => <TabPane attached={false}><EducationTab /></TabPane>,
  },
  {
    menuItem: { key: "Skills", icon: "code", content: "Skills" },
    render: () => <TabPane attached={false}><SkillsTab /></TabPane>,
  },
  {
    menuItem: { key: "Hobbies", icon: "untappd", content: "Hobbies" },
    render: () => <TabPane attached={false}><HobbyTab /></TabPane>,
  },
  {
    menuItem: { key: "Learning", icon: "book", content: "Learning" },
    render: () => <TabPane attached={false}><LearningTab /></TabPane>,
  },
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

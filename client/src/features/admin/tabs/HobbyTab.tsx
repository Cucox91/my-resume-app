import React, { useEffect, useState } from "react";
import { Button, Divider, Form, Segment } from "semantic-ui-react";
import { getAllHobbies, createHobby, updateHobby, deleteHobby } from "../../../apis/hobbyApi";
import { IHobby } from "../../../models/IHobby";
import { toast } from "react-toastify";

const emptyHobby = (): IHobby => ({ name: "", description: "" });

const HobbyTab: React.FC = () => {
  const [hobbies, setHobbies] = useState<IHobby[]>([]);

  useEffect(() => {
    getAllHobbies().then((data) => { if (data) setHobbies(data); });
  }, []);

  const handleChange = (index: number, field: keyof IHobby, value: string) => {
    setHobbies((prev) => prev.map((h, i) => i === index ? { ...h, [field]: value } : h));
  };

  const handleSave = async (index: number) => {
    const hobby = hobbies[index];
    try {
      if (hobby._id) {
        const updated = await updateHobby(hobby._id, hobby);
        setHobbies((prev) => prev.map((h, i) => i === index ? updated : h));
      } else {
        const created = await createHobby(hobby);
        setHobbies((prev) => prev.map((h, i) => i === index ? created : h));
      }
      toast.success("Hobby saved.");
    } catch {
      toast.error("Failed to save hobby.");
    }
  };

  const handleDelete = async (index: number) => {
    const hobby = hobbies[index];
    try {
      if (hobby._id) await deleteHobby(hobby._id);
      setHobbies((prev) => prev.filter((_, i) => i !== index));
      toast.success("Hobby deleted.");
    } catch {
      toast.error("Failed to delete hobby.");
    }
  };

  return (
    <>
      <Button primary onClick={() => setHobbies((prev) => [emptyHobby(), ...prev])} style={{ marginBottom: "1rem" }}>
        Add New Hobby
      </Button>
      {hobbies.map((hobby, index) => (
        <Segment key={hobby._id ?? `new-${index}`}>
          <Form>
            <Form.Input
              label="Name"
              value={hobby.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
            />
            <Form.TextArea
              label="Description"
              value={hobby.description ?? ""}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(index, "description", e.target.value)}
            />
          </Form>
          <Divider />
          <Button primary onClick={() => handleSave(index)}>Save</Button>
          <Button negative onClick={() => handleDelete(index)}>Delete</Button>
        </Segment>
      ))}
    </>
  );
};

export default HobbyTab;

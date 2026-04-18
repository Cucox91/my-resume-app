import React, { useEffect, useState } from "react";
import { Button, Divider, Form, Message, Segment } from "semantic-ui-react";
import { getAllHobbies, createHobby, updateHobby, deleteHobby } from "../../../apis/hobbyApi";
import { IHobby } from "../../../models/IHobby";
import { toast } from "react-toastify";

const emptyHobby = (): IHobby => ({ name: "", description: "" });

const validate = (hobby: IHobby): string[] => {
  const errors: string[] = [];
  if (!hobby.name.trim()) errors.push("Name is required.");
  return errors;
};

const HobbyTab: React.FC = () => {
  const [hobbies, setHobbies] = useState<IHobby[]>([]);
  const [errors, setErrors] = useState<Record<number, string[]>>({});

  useEffect(() => {
    getAllHobbies().then((data) => { if (data) setHobbies(data); });
  }, []);

  const handleChange = (index: number, field: keyof IHobby, value: string) => {
    setHobbies((prev) => prev.map((h, i) => i === index ? { ...h, [field]: value } : h));
    setErrors((prev) => ({ ...prev, [index]: [] }));
  };

  const handleSave = async (index: number) => {
    const hobby = hobbies[index];
    const errs = validate(hobby);
    if (errs.length > 0) { setErrors((prev) => ({ ...prev, [index]: errs })); return; }
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
      setErrors((prev) => { const e = { ...prev }; delete e[index]; return e; });
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
          <Form error={!!errors[index]?.length}>
            <Form.Input
              label="Name"
              value={hobby.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
              error={errors[index]?.includes("Name is required.")}
            />
            <Form.TextArea
              label="Description"
              value={hobby.description ?? ""}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(index, "description", e.target.value)}
            />
            {errors[index]?.length > 0 && (
              <Message error list={errors[index]} />
            )}
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

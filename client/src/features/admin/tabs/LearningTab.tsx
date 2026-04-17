import React, { useEffect, useState } from "react";
import { Button, Divider, Form, Message, Segment } from "semantic-ui-react";
import { getAllLearning, createLearning, updateLearning, deleteLearning } from "../../../apis/learningApi";
import { ILearning } from "../../../models/ILearning";
import { toast } from "react-toastify";

const statusOptions = [
  { key: "in-progress", text: "In Progress", value: "in-progress" },
  { key: "completed", text: "Completed", value: "completed" },
  { key: "planned", text: "Planned", value: "planned" },
];

const emptyLearning = (): ILearning => ({ name: "", description: "", status: "planned", url: "" });

const validate = (item: ILearning): string[] => {
  const errors: string[] = [];
  if (!item.name.trim()) errors.push("Name is required.");
  if (!item.status) errors.push("Status is required.");
  return errors;
};

const LearningTab: React.FC = () => {
  const [items, setItems] = useState<ILearning[]>([]);
  const [errors, setErrors] = useState<Record<number, string[]>>({});

  useEffect(() => {
    getAllLearning().then((data) => { if (data) setItems(data); });
  }, []);

  const handleChange = (index: number, field: keyof ILearning, value: string) => {
    setItems((prev) => prev.map((item, i) => i === index ? { ...item, [field]: value } : item));
    setErrors((prev) => ({ ...prev, [index]: [] }));
  };

  const handleSave = async (index: number) => {
    const item = items[index];
    const errs = validate(item);
    if (errs.length > 0) { setErrors((prev) => ({ ...prev, [index]: errs })); return; }
    try {
      if (item._id) {
        const updated = await updateLearning(item._id, item);
        setItems((prev) => prev.map((it, i) => i === index ? updated : it));
      } else {
        const created = await createLearning(item);
        setItems((prev) => prev.map((it, i) => i === index ? created : it));
      }
      toast.success("Learning item saved.");
    } catch {
      toast.error("Failed to save learning item.");
    }
  };

  const handleDelete = async (index: number) => {
    const item = items[index];
    try {
      if (item._id) await deleteLearning(item._id);
      setItems((prev) => prev.filter((_, i) => i !== index));
      setErrors((prev) => { const e = { ...prev }; delete e[index]; return e; });
      toast.success("Learning item deleted.");
    } catch {
      toast.error("Failed to delete learning item.");
    }
  };

  return (
    <>
      <Button primary onClick={() => setItems((prev) => [emptyLearning(), ...prev])} style={{ marginBottom: "1rem" }}>
        Add New Learning Item
      </Button>
      {items.map((item, index) => (
        <Segment key={item._id ?? `new-${index}`}>
          <Form error={!!errors[index]?.length}>
            <Form.Input
              label="Name"
              value={item.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
              error={errors[index]?.includes("Name is required.")}
            />
            <Form.TextArea
              label="Description"
              value={item.description ?? ""}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(index, "description", e.target.value)}
            />
            <Form.Select
              label="Status"
              options={statusOptions}
              value={item.status}
              onChange={(_, data) => handleChange(index, "status", data.value as string)}
              error={errors[index]?.includes("Status is required.")}
            />
            <Form.Input
              label="URL (optional)"
              value={item.url ?? ""}
              onChange={(e) => handleChange(index, "url", e.target.value)}
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

export default LearningTab;

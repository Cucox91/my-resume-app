import React, { useEffect, useState } from "react";
import { Button, Divider, Form, Segment } from "semantic-ui-react";
import { getAllEducation, createEducation, updateEducation, deleteEducation } from "../../../apis/educationApi";
import { IEducation } from "../../../models/IEducation";
import { toast } from "react-toastify";

const emptyEducation = (): IEducation => ({
  title: "",
  school: "",
  fromDate: new Date(),
  toDate: null,
  responsibilities: [],
  subjects: [],
  generalNotes: [],
});

const toDateString = (date: Date | null): string =>
  date ? new Date(date).toISOString().split("T")[0] : "";

const EducationTab: React.FC = () => {
  const [items, setItems] = useState<IEducation[]>([]);

  useEffect(() => {
    getAllEducation().then((data) => { if (data) setItems(data); });
  }, []);

  const handleChange = (index: number, field: keyof IEducation, value: string) => {
    setItems((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;
        if (field === "fromDate") return { ...item, fromDate: new Date(value) };
        if (field === "toDate") return { ...item, toDate: value ? new Date(value) : null };
        if (field === "responsibilities") return { ...item, responsibilities: value.split("\n").map((s) => s.trim()).filter(Boolean) };
        if (field === "generalNotes") return { ...item, generalNotes: value.split("\n").map((s) => s.trim()).filter(Boolean) };
        return { ...item, [field]: value };
      })
    );
  };

  const handleSave = async (index: number) => {
    const item = items[index];
    try {
      if (item._id) {
        const updated = await updateEducation(item._id, item);
        setItems((prev) => prev.map((it, i) => i === index ? updated : it));
      } else {
        const created = await createEducation(item);
        setItems((prev) => prev.map((it, i) => i === index ? created : it));
      }
      toast.success("Education saved.");
    } catch {
      toast.error("Failed to save education.");
    }
  };

  const handleDelete = async (index: number) => {
    const item = items[index];
    try {
      if (item._id) await deleteEducation(item._id);
      setItems((prev) => prev.filter((_, i) => i !== index));
      toast.success("Education deleted.");
    } catch {
      toast.error("Failed to delete education.");
    }
  };

  return (
    <>
      <Button primary onClick={() => setItems((prev) => [emptyEducation(), ...prev])} style={{ marginBottom: "1rem" }}>
        Add New Education
      </Button>
      {items.map((item, index) => (
        <Segment key={item._id ?? `new-${index}`}>
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                label="Title / Degree"
                value={item.title}
                onChange={(e) => handleChange(index, "title", e.target.value)}
              />
              <Form.Input
                label="School"
                value={item.school}
                onChange={(e) => handleChange(index, "school", e.target.value)}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                label="From"
                type="date"
                value={toDateString(item.fromDate)}
                onChange={(e) => handleChange(index, "fromDate", e.target.value)}
              />
              <Form.Input
                label="To (leave blank if current)"
                type="date"
                value={toDateString(item.toDate)}
                onChange={(e) => handleChange(index, "toDate", e.target.value)}
              />
            </Form.Group>
            <Form.TextArea
              label="Responsibilities (one per line)"
              value={item.responsibilities.join("\n")}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(index, "responsibilities", e.target.value)}
              rows={4}
            />
            <Form.TextArea
              label="General Notes (one per line)"
              value={item.generalNotes.join("\n")}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(index, "generalNotes", e.target.value)}
              rows={3}
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

export default EducationTab;

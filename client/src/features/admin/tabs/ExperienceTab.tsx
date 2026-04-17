import React, { useEffect, useState } from "react";
import { Button, Divider, Form, Segment, Header } from "semantic-ui-react";
import { getAllExperiences, createExperience, updateExperience, deleteExperience } from "../../../apis/experienceApi";
import { IExperience } from "../../../models/IExperience";
import { toast } from "react-toastify";

const emptyExperience = (): IExperience => ({
  title: "",
  company: "",
  fromDate: new Date(),
  toDate: null,
  responsibilities: [],
  achievements: [],
  location: "",
  teamSize: undefined,
  skills: [],
  projects: [],
});

const toDateString = (date: Date | null | undefined): string =>
  date ? new Date(date).toISOString().split("T")[0] : "";

const ExperienceTab: React.FC = () => {
  const [items, setItems] = useState<IExperience[]>([]);

  useEffect(() => {
    getAllExperiences().then((data) => { if (data) setItems(data); });
  }, []);

  const handleChange = (index: number, field: keyof IExperience, value: string | number) => {
    setItems((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;
        if (field === "fromDate") return { ...item, fromDate: new Date(value as string) };
        if (field === "toDate") return { ...item, toDate: (value as string) ? new Date(value as string) : null };
        if (field === "responsibilities") return { ...item, responsibilities: (value as string).split("\n").map((s) => s.trim()).filter(Boolean) };
        if (field === "achievements") return { ...item, achievements: (value as string).split("\n").map((s) => s.trim()).filter(Boolean) };
        if (field === "teamSize") return { ...item, teamSize: value === "" ? undefined : Number(value) };
        return { ...item, [field]: value };
      })
    );
  };

  const handleSave = async (index: number) => {
    const item = items[index];
    try {
      if (item._id) {
        const updated = await updateExperience(item._id, item);
        setItems((prev) => prev.map((it, i) => i === index ? updated : it));
      } else {
        const created = await createExperience(item);
        setItems((prev) => prev.map((it, i) => i === index ? created : it));
      }
      toast.success("Experience saved.");
    } catch {
      toast.error("Failed to save experience.");
    }
  };

  const handleDelete = async (index: number) => {
    const item = items[index];
    try {
      if (item._id) await deleteExperience(item._id);
      setItems((prev) => prev.filter((_, i) => i !== index));
      toast.success("Experience deleted.");
    } catch {
      toast.error("Failed to delete experience.");
    }
  };

  return (
    <>
      <Button primary onClick={() => setItems((prev) => [emptyExperience(), ...prev])} style={{ marginBottom: "1rem" }}>
        Add New Experience
      </Button>
      {items.map((item, index) => (
        <Segment key={item._id ?? `new-${index}`}>
          <Header as="h4">{item.title || "New Experience"} {item.company ? `— ${item.company}` : ""}</Header>
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                label="Title"
                value={item.title}
                onChange={(e) => handleChange(index, "title", e.target.value)}
              />
              <Form.Input
                label="Company"
                value={item.company}
                onChange={(e) => handleChange(index, "company", e.target.value)}
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
            <Form.Group widths="equal">
              <Form.Input
                label="Location"
                value={item.location ?? ""}
                onChange={(e) => handleChange(index, "location", e.target.value)}
              />
              <Form.Input
                label="Team Size"
                type="number"
                value={item.teamSize ?? ""}
                onChange={(e) => handleChange(index, "teamSize", e.target.value)}
              />
            </Form.Group>
            <Form.TextArea
              label="Responsibilities (one per line)"
              value={item.responsibilities.join("\n")}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(index, "responsibilities", e.target.value)}
              rows={5}
            />
            <Form.TextArea
              label="Achievements (one per line)"
              value={(item.achievements ?? []).join("\n")}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(index, "achievements", e.target.value)}
              rows={4}
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

export default ExperienceTab;

import React, { useEffect, useState } from "react";
import { Button, Divider, Form, Message, Segment } from "semantic-ui-react";
import { getAllSkills, createSkill, updateSkill, deleteSkill } from "../../../apis/skillsApi";
import { ISkill } from "../../../models/ISkill";
import { toast } from "react-toastify";

const confidenceOptions = [
  { key: "beginner", text: "Beginner", value: "beginner" },
  { key: "medium", text: "Medium", value: "medium" },
  { key: "high", text: "High", value: "high" },
];

const emptySkill = (): ISkill => ({
  name: "",
  description: "",
  confidence: "beginner",
  yearsOfProffesionalExperience: 0,
  yearsOfIndividualExperience: 0,
  yearLastUse: new Date().getFullYear(),
  notes: [],
  experiences: [],
});

const validate = (skill: ISkill): string[] => {
  const errors: string[] = [];
  if (!skill.name.trim()) errors.push("Name is required.");
  if (!skill.confidence) errors.push("Confidence is required.");
  if (!skill.yearLastUse) errors.push("Year Last Used is required.");
  return errors;
};

const SkillsTab: React.FC = () => {
  const [skills, setSkills] = useState<ISkill[]>([]);
  const [errors, setErrors] = useState<Record<number, string[]>>({});

  useEffect(() => {
    getAllSkills().then((data) => {
      if (data) setSkills(data.sort((a, b) => b.yearLastUse - a.yearLastUse));
    });
  }, []);

  const handleChange = (index: number, field: keyof ISkill, value: string | number) => {
    setSkills((prev) => prev.map((s, i) => i === index ? { ...s, [field]: value } : s));
    setErrors((prev) => ({ ...prev, [index]: [] }));
  };

  const handleSave = async (index: number) => {
    const skill = skills[index];
    const errs = validate(skill);
    if (errs.length > 0) { setErrors((prev) => ({ ...prev, [index]: errs })); return; }
    try {
      if (skill._id) {
        const updated = await updateSkill(skill._id, skill);
        setSkills((prev) => prev.map((s, i) => i === index ? updated : s));
      } else {
        const created = await createSkill(skill);
        setSkills((prev) => prev.map((s, i) => i === index ? created : s));
      }
      toast.success("Skill saved.");
    } catch {
      toast.error("Failed to save skill.");
    }
  };

  const handleDelete = async (index: number) => {
    const skill = skills[index];
    try {
      if (skill._id) await deleteSkill(skill._id);
      setSkills((prev) => prev.filter((_, i) => i !== index));
      setErrors((prev) => { const e = { ...prev }; delete e[index]; return e; });
      toast.success("Skill deleted.");
    } catch {
      toast.error("Failed to delete skill.");
    }
  };

  return (
    <>
      <Button primary onClick={() => setSkills((prev) => [emptySkill(), ...prev])} style={{ marginBottom: "1rem" }}>
        Add New Skill
      </Button>
      {skills.map((skill, index) => (
        <Segment key={skill._id ?? `new-${index}`}>
          <Form error={!!errors[index]?.length}>
            <Form.Group widths="equal">
              <Form.Input
                label="Name"
                value={skill.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
                error={errors[index]?.includes("Name is required.")}
              />
              <Form.Select
                label="Confidence"
                options={confidenceOptions}
                value={skill.confidence}
                onChange={(_, data) => handleChange(index, "confidence", data.value as string)}
                error={errors[index]?.includes("Confidence is required.")}
              />
            </Form.Group>
            <Form.TextArea
              label="Description"
              value={skill.description ?? ""}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(index, "description", e.target.value)}
            />
            <Form.Group widths="equal">
              <Form.Input
                label="Years Professional"
                type="number"
                value={skill.yearsOfProffesionalExperience}
                onChange={(e) => handleChange(index, "yearsOfProffesionalExperience", Number(e.target.value))}
              />
              <Form.Input
                label="Years Individual"
                type="number"
                value={skill.yearsOfIndividualExperience}
                onChange={(e) => handleChange(index, "yearsOfIndividualExperience", Number(e.target.value))}
              />
              <Form.Input
                label="Year Last Used"
                type="number"
                value={skill.yearLastUse}
                onChange={(e) => handleChange(index, "yearLastUse", Number(e.target.value))}
                error={errors[index]?.includes("Year Last Used is required.")}
              />
            </Form.Group>
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

export default SkillsTab;

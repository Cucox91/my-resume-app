import React, { useEffect, useState } from "react";
import { Card, Label, Icon } from "semantic-ui-react";
import { getAllLearning } from "../../apis/learningApi";
import { ILearning } from "../../models/ILearning";

const statusColor = (status: ILearning["status"]) => {
  if (status === "completed") return "green";
  if (status === "in-progress") return "blue";
  return "grey";
};

const LearningTable: React.FC = () => {
  const [items, setItems] = useState<ILearning[] | null>(null);

  useEffect(() => {
    const fetchLearning = async () => {
      try {
        const data = await getAllLearning();
        if (data) setItems(data);
      } catch (err) {
        console.error("Error retrieving learning items", err);
      }
    };
    fetchLearning();
  }, []);

  if (!items) return <>Loading...</>;
  if (items.length === 0) return <>No learning items found.</>;

  return (
    <Card.Group itemsPerRow={3} stackable>
      {items.map((item) => (
        <Card key={item._id}>
          <Card.Content>
            <Card.Header>
              {item.name}
              {item.url && (
                <a href={item.url} target="_blank" rel="noreferrer" style={{ marginLeft: "0.5rem" }}>
                  <Icon name="linkify" size="small" />
                </a>
              )}
            </Card.Header>
            {item.description && (
              <Card.Description>{item.description}</Card.Description>
            )}
          </Card.Content>
          <Card.Content extra>
            <Label color={statusColor(item.status)}>{item.status}</Label>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default LearningTable;

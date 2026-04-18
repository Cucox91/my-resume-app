import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import { getAllHobbies } from "../../apis/hobbyApi";
import { IHobby } from "../../models/IHobby";

const HobbyTable: React.FC = () => {
  const [hobbies, setHobbies] = useState<IHobby[] | null>(null);

  useEffect(() => {
    const fetchHobbies = async () => {
      try {
        const data = await getAllHobbies();
        if (data) setHobbies(data);
      } catch (err) {
        console.error("Error retrieving hobbies", err);
      }
    };
    fetchHobbies();
  }, []);

  if (!hobbies) return <>Loading...</>;
  if (hobbies.length === 0) return <>No hobbies found.</>;

  return (
    <Card.Group itemsPerRow={3} stackable>
      {hobbies.map((hobby) => (
        <Card key={hobby._id}>
          <Card.Content>
            <Card.Header>{hobby.name}</Card.Header>
            {hobby.description && (
              <Card.Description>{hobby.description}</Card.Description>
            )}
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default HobbyTable;

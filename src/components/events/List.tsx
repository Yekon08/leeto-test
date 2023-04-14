import { useEffect, useState } from "react";
import axios from "axios";
import { EventItem } from "@/interfaces/Event";
import Card from "./Card";
import { ListContainer } from "./styles";

const List = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState<EventItem[] | []>([]);

  useEffect(() => {
    axios.get("http://localhost:3001/events").then((res) => {
      setEvents(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Chargement ...</p>;
  if (!events) return <p>Aucun évènements...</p>;

  console.log("data: ", events);

  return (
    <ListContainer>
      {events.map((event: EventItem) => (
        <Card key={event.id} data={event} />
      ))}
    </ListContainer>
  );
};

export default List;

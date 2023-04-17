import { useEffect, useState } from "react";
import axios from "axios";
import { EventItem } from "@/interfaces/Event";
import Card from "./Card";
import { ListContainer } from "./styles";
import SwitchList from "./SwitchList";

const List = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState<EventItem[]>([]);
  const [active, setActive] = useState<"now" | "past">("now");

  //TODO: Handle call for past events
  useEffect(() => {
    axios.get("http://localhost:3001/events").then((res) => {
      setEvents(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Chargement ...</p>;
  if (!events) return <p>Aucun évènements...</p>;

  return (
    <>
      <ListContainer>
        <SwitchList active={active} setActive={setActive} />

        {events.map((event: EventItem) => (
          <Card key={event.id} data={event} active={active} />
        ))}
      </ListContainer>
    </>
  );
};

export default List;

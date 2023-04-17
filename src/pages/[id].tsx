import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Main, Title } from "@/components/SharedStyles";

const Event = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    axios.get(`http://localhost:3001/events/${id}`).then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, [id]);

  console.log("data: ", data);

  return (
    <Main>
      <Title>Événements</Title>
      <Container padding></Container>
    </Main>
  );
};

export default Event;

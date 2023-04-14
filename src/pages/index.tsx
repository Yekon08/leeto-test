import { Container, Main, Title } from "@/components/SharedStyles";
import List from "@/components/events/List";

const Home = () => {
  return (
    <>
      <Main>
        <Title>Événements</Title>
        <Container>
          <List />
        </Container>
      </Main>
    </>
  );
};

export default Home;

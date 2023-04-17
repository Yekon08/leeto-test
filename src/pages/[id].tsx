import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Main, Title } from "@/components/SharedStyles";
import Image from "next/image";
import {
  ContentContainer,
  ReturnLink,
  ImgContainer,
  DateContainer,
  DescContainer,
  InformationsContainer,
  HoursContainer,
  FlexContainer,
  PriceContainer,
  ContainerFlex,
} from "@/components/event/styles";
import { format } from "date-fns";
import { EventItem } from "../interfaces/Event";

const Event = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<EventItem>({} as EventItem);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/events/${id}`).then((res) => {
        setData(res.data);
        setIsLoading(false);
      });
    }
  }, [id]);

  if (isLoading) return <p>Chargement ...</p>;

  console.log("data: ", data);

  const dateMonth = format(new Date(data.startAt), "LLL").substring(0, 3);
  const dateNumber = format(new Date(data.startAt), "i");
  const hours = `${format(new Date(data.startAt), "k:mm")} - ${format(
    new Date(data.endAt),
    "k:mm"
  )}`;

  return (
    <Main>
      <Title>Événements</Title>
      <Container padding>
        <ReturnLink href="/">
          <Image src={"/arrow.svg"} alt="arrow icon" width={14} height={14} />
          Événements
        </ReturnLink>
        <ContainerFlex>
          <ContentContainer>
            <ImgContainer>
              <Image src={data.image.url} alt="presentation image" fill />
            </ImgContainer>
            <InformationsContainer>
              <DateContainer>
                <p>{dateMonth}</p>
                <p>{dateNumber}</p>
              </DateContainer>
              <DescContainer>
                <h1>{data.title}</h1>
                <HoursContainer>{hours}</HoursContainer>
                <FlexContainer>
                  <div>
                    <h4>Places restantes</h4>
                    <span>{data.remainingTickets}</span>
                  </div>
                  <div>
                    <h4>Date de clôture</h4>
                    <span>{format(new Date(data.endAt), "i MMMM yyyy")}</span>
                  </div>
                </FlexContainer>
                {/* TODO: Find a solution for rich text */}
                <p>{data.description}</p>
              </DescContainer>
            </InformationsContainer>
          </ContentContainer>
          <PriceContainer>
            <div>
              <div>{data.price === "0.0" ? "Gratuit" : data.price}</div>
            </div>
          </PriceContainer>
        </ContainerFlex>
      </Container>
    </Main>
  );
};

export default Event;

import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container, Main, Title } from "@/components/SharedStyles";
import Image from "next/image";
import { ReturnLink, ContainerFlex, LeftSide } from "@/components/event/styles";
import { BookingUser, EventItem } from "../interfaces/Event";
import Booking from "@/components/event/Booking";
import Description from "@/components/event/Description";
import Price from "@/components/event/Price";

const Event = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<EventItem>({} as EventItem);
  const [bookings, setBookings] = useState<BookingUser[]>([]);

  useEffect(() => {
    const urls = [
      `http://localhost:3001/events/${id}`,
      "http://localhost:3001/bookings",
    ];

    Promise.all(urls.map((url) => axios.get(url)))
      .then(([eventData, bookingsDate]) => {
        setData(eventData.data);
        setBookings(bookingsDate.data);
      })
      .then(() => setIsLoading(false))
      .catch((err) => console.log(err));
  }, [id]);

  if (isLoading) return <p>Chargement ...</p>;

  console.log("data: ", data);
  console.log("bookings: ", bookings);

  return (
    <Main>
      <Title>Événements</Title>
      <Container padding>
        <ReturnLink href="/">
          <Image src={"/arrow.svg"} alt="arrow icon" width={14} height={14} />
          Événements
        </ReturnLink>
        <ContainerFlex>
          <LeftSide>
            <Description data={data} />
            <Booking bookings={bookings} />
          </LeftSide>

          <Price data={data} bookings={bookings} />
        </ContainerFlex>
      </Container>
    </Main>
  );
};

export default Event;

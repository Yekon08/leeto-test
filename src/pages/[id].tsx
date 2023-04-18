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
import { toast } from "react-toastify";
import LegalText from "@/components/event/LegalText";

const EventDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(true);
  const [isBookingsLoading, setIsBookingsLoading] = useState(true);
  const [data, setData] = useState<EventItem>({} as EventItem);
  const [bookings, setBookings] = useState<BookingUser[]>([]);

  const handleGetBookings = () => {
    setIsBookingsLoading(true);
    axios
      .get(`http://localhost:3001/bookings`)
      .then((res) => {
        setBookings(res.data);
      })
      .then(() => setIsBookingsLoading(false))
      .catch((err) => {
        console.log(err);
        toast.error("error...");
      });
  };

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3001/events/${id}`)
        .then((res) => {
          setData(res.data);
        })
        .then(() => setIsLoading(false))
        .catch((err) => {
          console.log(err);
          toast.error("error...");
        });

      handleGetBookings();
    }
  }, [id]);

  if (isLoading) return <p>Chargement ...</p>;

  return (
    <Main>
      <Title event>Événements</Title>
      <Container padding>
        <ReturnLink href="/">
          <Image src={"/arrow.svg"} alt="arrow icon" width={14} height={14} />
          Événements
        </ReturnLink>
        <ContainerFlex>
          <LeftSide>
            <Description data={data} />
            <LegalText mobile />
            {bookings && <Booking bookings={bookings} />}
          </LeftSide>

          {bookings && (
            <Price
              data={data}
              bookings={bookings}
              handleGetBookings={handleGetBookings}
            />
          )}
        </ContainerFlex>
      </Container>
    </Main>
  );
};

export default EventDetails;

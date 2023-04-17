import { BookingUser, EventItem } from "@/interfaces/Event";
import Image from "next/image";
import { format } from "date-fns";
import axios from "axios";
import {
  CardContainer,
  ImgContainer,
  DescContainer,
  BookingContainer,
  BookingItem,
  BookingItems,
  AvailabilityContainer,
  AvailabilityNumber,
  PriceContainer,
  LeftContainer,
  InformationsContainer,
  LinkContainer,
} from "./styles";
import { useEffect, useState } from "react";
import { SectionTitle } from "../SharedStyles";
import Link from "next/link";

interface Props {
  data: EventItem;
  active: "past" | "now";
}

const Card = ({ data, active }: Props) => {
  const [bookings, setBookings] = useState<BookingUser[]>([]);
  const startDate = new Date(data.startAt);
  const endDate = new Date(data.endAt);

  const date = `${format(startDate, "d MMMM k:mm")} - ${format(
    endDate,
    `${
      format(startDate, "dd-MM") === format(endDate, "dd-MM")
        ? "k:mm"
        : "d MMMM k:mm"
    }`
  )}`;

  useEffect(() => {
    //Todo: handle bookings id
    axios.get("http://localhost:3001/bookings").then((res) => {
      setBookings(res.data);
    });
  }, []);

  const handleBookings = () => {
    if (bookings) {
      return (
        <BookingItems>
          {bookings.map((booking, i) => {
            if (i < 3) {
              return (
                <BookingItem key={booking.id} color={booking.user.color}>
                  {booking.user.avatar.url ? (
                    <Image src={booking.user.avatar.url} alt="avatar" fill />
                  ) : (
                    <>
                      {booking.user.firstName.charAt(0)}
                      {booking.user.lastName.charAt(0)}
                    </>
                  )}
                </BookingItem>
              );
            }
          })}
          {bookings.length > 3 && (
            <BookingItem counter>{bookings.length}</BookingItem>
          )}
        </BookingItems>
      );
    }
  };

  return (
    <LinkContainer active={active}>
      <Link href="#" passHref legacyBehavior>
        <CardContainer active={active}>
          <LeftContainer>
            <ImgContainer>
              <Image src={data.image.url} alt="card presentation image" fill />
            </ImgContainer>
            <DescContainer>
              <h3>{data.title}</h3>
              <p>{date}</p>
            </DescContainer>
          </LeftContainer>

          <InformationsContainer>
            <BookingContainer>
              <SectionTitle>Participants</SectionTitle>
              {handleBookings()}
            </BookingContainer>
            <AvailabilityContainer>
              <SectionTitle>Places restantes</SectionTitle>
              <AvailabilityNumber
                active={active}
                full={data.remainingTickets > 0 && true}
              >
                {data.remainingTickets === 0
                  ? "Complet"
                  : data.remainingTickets}
              </AvailabilityNumber>
            </AvailabilityContainer>
          </InformationsContainer>

          <PriceContainer active={active}>
            {data.price === "0.0" ? "Gratuit" : data.price}
          </PriceContainer>
        </CardContainer>
      </Link>
    </LinkContainer>
  );
};

export default Card;

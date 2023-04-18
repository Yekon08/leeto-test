import { BookingUser } from "@/interfaces/Event";
import {
  ContentContainer,
  TableHeader,
  BookingContainer,
  BookingItems,
  BookingNames,
} from "./styles";
import { BookingItemShared } from "../SharedStyles";
import Image from "next/image";

interface Props {
  bookings: BookingUser[];
}

const Booking = ({ bookings }: Props) => {
  return (
    <>
      <h3>Liste des participants ({bookings.length})</h3>
      <ContentContainer>
        <TableHeader>
          <p>Salarié</p>
          <p>Quantité réservée</p>
        </TableHeader>

        <BookingContainer>
          {bookings.map((booking, i) => (
            <BookingItems key={booking.id}>
              <BookingNames>
                <BookingItemShared color={booking.user.color}>
                  {booking.user.avatar.url ? (
                    <Image src={booking.user.avatar.url} alt="avatar" fill />
                  ) : (
                    <>
                      {booking.user.firstName.charAt(0)}
                      {booking.user.lastName.charAt(0)}
                    </>
                  )}
                </BookingItemShared>
                <p>
                  {booking.user.firstName} {booking.user.lastName}
                </p>
              </BookingNames>
              <span>{booking.numberOfTickets}</span>
            </BookingItems>
          ))}
        </BookingContainer>
      </ContentContainer>
    </>
  );
};

export default Booking;

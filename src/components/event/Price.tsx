import { BookingUser, EventItem } from "@/interfaces/Event";
import {
  LegalContainer,
  ModalContainer,
  PriceContainer,
  ReservationContainer,
} from "./styles";
import ReactModal from "react-modal";
import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "@/interfaces/User";

interface Props {
  data: EventItem;
  bookings: BookingUser[];
}

const Price = ({ data, bookings }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User>({} as User);
  const [ticketNumber, setTicketNumber] = useState<number>(1);

  useEffect(() => {
    axios.get("http://localhost:3001/user").then((res) => {
      setCurrentUser(res.data);
    });
  }, []);

  const bookingFind = bookings.find(
    (booking) => booking.userId === 1
    // (booking) => booking.userId === currentUser.id
  );

  useEffect(() => {
    if (bookingFind) {
      setTicketNumber(bookingFind.numberOfTickets);
    } else {
      setTicketNumber(1);
    }
  }, [currentUser, bookingFind]);

  const handleAddReservation = () => {
    const randomId = Math.floor(Math.random() * 9999);
    axios.post(`http://localhost:3001/bookings/${randomId}`, {
      user: {
        avatar: { ...currentUser.avatar },
        fistName: currentUser.firstName,
        lastName: currentUser.lastName,
        id: currentUser.id,
        color: currentUser.color,
      },
      numberOfTickets: ticketNumber,
      id: randomId, //Todo: handle uuid
      userId: currentUser.id,
    });
  };

  const handleDelete = (id: number) => {
    axios.delete(`http://localhost:3001/bookings/${id}`);
  };

  const handlePatch = (id: number, numberTickets: number) => {
    axios.patch(`http://localhost:3001/bookings/${id}`, {
      numberOfTickets: numberTickets,
    });
  };

  const handlePriceText = data.price === "0.0" ? "Gratuit" : data.price;

  console.log("user : ", currentUser);
  console.log("test: ", bookingFind);
  return (
    <>
      <PriceContainer>
        <ReservationContainer>
          <span>
            {bookingFind
              ? `🎉 J’y vais ! (${bookingFind.numberOfTickets} place réservée)`
              : handlePriceText}
          </span>
          <button onClick={() => setIsOpen(true)}>Réserver</button>
        </ReservationContainer>

        <LegalContainer>
          <h6>Politique d’annulation et de remboursement</h6>
          <p>
            Les annulations et remboursements peuvent s’effectuer jusqu’à la
            date de clôture des inscriptions soit jusqu’au{" "}
            <span>2 janvier 2021</span>.
          </p>
        </LegalContainer>
      </PriceContainer>

      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentElement={(props, children) => (
          <ModalContainer {...props}>{children}</ModalContainer>
        )}
        className="modal"
      >
        <h3>Réservation</h3>
        <div>
          <label>nombre de tickets :</label>
          <input
            type="number"
            value={ticketNumber}
            onChange={(e) => setTicketNumber(Number(e.target.value))}
          />
        </div>
        <button onClick={handleAddReservation}>Modifier ma réservation</button>
        {bookingFind && (
          <button onClick={() => handleDelete(bookingFind.id)}>
            supprimer ma réservation
          </button>
        )}
        {bookingFind && (
          <button onClick={() => handlePatch(bookingFind.id, ticketNumber)}>
            modifier ma réservation
          </button>
        )}
      </ReactModal>
    </>
  );
};

export default Price;

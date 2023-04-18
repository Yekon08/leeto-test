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
import { toast } from "react-toastify";
import Image from "next/image";

interface Props {
  data: EventItem;
  bookings: BookingUser[];
  handleGetBookings: () => void;
}

const Price = ({ data, bookings, handleGetBookings }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User>({} as User);
  const [ticketNumber, setTicketNumber] = useState<number>(1);

  useEffect(() => {
    axios.get("http://localhost:3001/user").then((res) => {
      setCurrentUser(res.data);
    });
  }, []);

  // ADD user doesnt work
  const bookingFind = bookings.find(
    (booking) => booking.userId === 9
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
    axios
      .post(`http://localhost:3001/bookings/${randomId}`, {
        id: randomId, //Todo: handle uuid
        user: {
          id: currentUser.id,
          fistName: currentUser.firstName,
          lastName: currentUser.lastName,
          color: currentUser.color,
          avatar: { url: currentUser.avatar.url },
        },
        numberOfTickets: ticketNumber,
        userId: currentUser.id,
      })
      .then(() => {
        toast.success("Réservation ajoutée !");
        handleGetBookings();
        setIsOpen(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("error...");
      });
  };

  const handleDelete = (id: number) => {
    axios
      .delete(`http://localhost:3001/bookings/${id}`)
      .then(() => {
        toast.success("Réservation supprimée !");
        handleGetBookings();
        setIsOpen(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("error...");
      });
  };

  const handlePatch = (id: number, numberTickets: number) => {
    axios
      .patch(`http://localhost:3001/bookings/${id}`, {
        numberOfTickets: numberTickets,
      })
      .then(() => {
        toast.success("Réservation modifiée !");
        handleGetBookings();
        setIsOpen(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("error...");
      });
  };

  const handlePriceText = data.price === "0.0" ? "Gratuit" : data.price;

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
        <span onClick={() => setIsOpen(false)}>
          <Image src="/closeIcon.svg" alt="closeIcon" width={15} height={15} />
        </span>
        <h3>Réservation</h3>
        <div>
          <label>nombre de tickets :</label>
          <input
            type="number"
            value={ticketNumber}
            onChange={(e) => setTicketNumber(Number(e.target.value))}
          />
        </div>
        {!bookingFind && (
          <button onClick={handleAddReservation}>Ajouter ma réservation</button>
        )}
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

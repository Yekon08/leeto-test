import { EventItem } from "@/interfaces/Event";
import { LegalContainer, PriceContainer, ReservationContainer } from "./styles";

interface Props {
  data: EventItem;
}

const Price = ({ data }: Props) => {
  return (
    <>
      <PriceContainer>
        <ReservationContainer>
          <span>{data.price === "0.0" ? "Gratuit" : data.price}</span>
          <button>Réserver</button>
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
    </>
  );
};

export default Price;

import React from "react";
import { LegalContainer } from "./styles";

const LegalText = ({ mobile }: { mobile?: boolean }) => {
  return (
    <>
      <LegalContainer mobile={mobile}>
        <h6>Politique d’annulation et de remboursement</h6>
        <p>
          Les annulations et remboursements peuvent s’effectuer jusqu’à la date
          de clôture des inscriptions soit jusqu’au <span>2 janvier 2021</span>.
        </p>
      </LegalContainer>
    </>
  );
};

export default LegalText;

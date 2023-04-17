import { Dispatch, SetStateAction } from "react";
import { SwitchContainer, SwitchBtn } from "./styles";

interface Props {
  active: "now" | "past";
  setActive: Dispatch<SetStateAction<"now" | "past">>;
}

const SwitchList = ({ active, setActive }: Props) => {
  return (
    <SwitchContainer>
      <SwitchBtn
        active={active === "now" && true}
        onClick={() => setActive("now")}
      >
        A venir
      </SwitchBtn>
      <SwitchBtn
        active={active === "past" && true}
        onClick={() => setActive("past")}
      >
        Passés
      </SwitchBtn>
    </SwitchContainer>
  );
};

export default SwitchList;

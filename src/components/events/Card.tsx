import { EventItem } from "@/interfaces/Event";
import Image from "next/image";
import { format } from "date-fns";
import { CardContainer, ImgContainer, DescContainer } from "./styles";

interface Props {
  data: EventItem;
}

const Card = ({ data }: Props) => {
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

  return (
    <CardContainer>
      <ImgContainer>
        <Image src={data.image.url} alt="card presentation image" fill />
      </ImgContainer>
      <DescContainer>
        <h3>{data.title}</h3>
        <p>{date}</p>
      </DescContainer>
    </CardContainer>
  );
};

export default Card;

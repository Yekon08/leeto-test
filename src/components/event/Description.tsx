import {
  ContentContainer,
  ImgContainer,
  DateContainer,
  DescContainer,
  InformationsContainer,
  HoursContainer,
  FlexContainer,
} from "@/components/event/styles";
import Image from "next/image";
import { format } from "date-fns";
import { EventItem } from "@/interfaces/Event";

interface Props {
  data: EventItem;
}

const Description = ({ data }: Props) => {
  const dateMonth = format(new Date(data.startAt), "LLL").substring(0, 3);
  const dateNumber = format(new Date(data.startAt), "i");
  const hours = `${format(new Date(data.startAt), "k:mm")} - ${format(
    new Date(data.endAt),
    "k:mm"
  )}`;

  return (
    <>
      <ContentContainer>
        <ImgContainer>
          <Image src={data.image.url} alt="presentation image" fill />
        </ImgContainer>
        <InformationsContainer>
          <DateContainer>
            <p>{dateMonth}</p>
            <p>{dateNumber}</p>
          </DateContainer>
          <DescContainer>
            <h1>{data.title}</h1>
            <HoursContainer>{hours}</HoursContainer>
            <FlexContainer>
              <div>
                <h4>Places restantes</h4>
                <span>{data.remainingTickets}</span>
              </div>
              <div>
                <h4>Date de clôture</h4>
                <span>{format(new Date(data.endAt), "i MMMM yyyy")}</span>
              </div>
            </FlexContainer>
            {/* TODO: Find a solution for rich text */}
            <p>{data.description}</p>
          </DescContainer>
        </InformationsContainer>
      </ContentContainer>
    </>
  );
};

export default Description;

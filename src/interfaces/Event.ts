export interface EventItem {
  createdAt: string;
  daysBeforeClosing: number;
  description: string;
  endAt: string;
  price: string;
  id: number;
  image: {
    id: number;
    url: string;
  };
  maxTickets: number;
  maxTicketsPerUser: number;
  startAt: string;
  teamId: number;
  title: string;
  updatedAt: string;
  numberOfParticipants: number;
  remainingTickets: number;
  state: string;
}

export interface BookingUser {
  id: number;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    color: string;
    avatar: {
      url: string;
    };
  };
  numberOfTickets: number;
  userId: number;
}

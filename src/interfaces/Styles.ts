export interface Booking {
  color?: string;
  counter?: boolean;
}

export interface AvailabilityNumber {
  full?: boolean;
  active?: "past" | "now";
}

export interface ActiveProps {
  active?: "past" | "now";
}

export interface SwitchBtnProps {
  active?: boolean;
}

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

export interface Containerprops {
  padding?: boolean;
}

export interface ButtonPriceProps {
  modify?: boolean;
  padding?: boolean;
}

export interface TitleProps {
  event?: boolean;
}

export interface LegalTextProps {
  mobile?: boolean;
}

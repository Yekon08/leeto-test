export interface User {
  birthCountry: string;
  dateOfBirth: string;
  email: string;
  nationality: string;
  organisation: {
    id: number;
    name: string;
  };
  placeOfBirth: string;
  id: number;
  firstName: string;
  lastName: string;
  color: string;
  avatar: {
    url?: string;
  };
}

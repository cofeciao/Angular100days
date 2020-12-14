export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
}
export const authors = [
  {
    id: 1,
    firstName: "Selena",
    lastName: "Gomez",
    email: "slena@gmail.com",
    gender: "Male",
    ipAddress: "192.168.3.3"
  },
  {
    id: 2,
    firstName: "Selena",
    lastName: "Tom",
    email: "slena@gmail.com",
    gender: "Male",
    ipAddress: "192.168.3.3",
  },
  {
    id: 3,
    firstName: "Charlie",
    lastName: "Puth",
    email: "charlieP@gmail.com",
    gender: "Female",
    ipAddress: "192.168.3.0",
  },
  {
    id: 4,
    firstName: "Maroon",
    lastName: "Five",
    email: "Maroon5@gmail.com",
    gender: "Female",
    ipAddress: "192.168.2.9",
  },
  {
    id: 5,
    firstName: "Camillo",
    lastName: "Anves",
    email: "Camelcase@gmail.com",
    gender: "Male",
    ipAddress: "192.168.1.2",
  }
]

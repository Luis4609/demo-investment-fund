import type { NextApiRequest, NextApiResponse } from "next";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  res.status(200).json(
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
    }
  );
}

const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
  },
];

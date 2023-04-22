import type { NextApiRequest, NextApiResponse } from "next";

type Client = {
  id: number;
  name: string;
  email: string;
  account: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Client[]>
) {
  res.status(200).json([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      account: "",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      account: "",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      account: "",
    },
  ]);
}

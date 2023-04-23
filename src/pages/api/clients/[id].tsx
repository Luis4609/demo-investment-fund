// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Clients = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Clients[]>
) {
  res.status(200).json(client);
}

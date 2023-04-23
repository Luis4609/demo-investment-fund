// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Currencie = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Currencie>
) {
  res.status(200).json({ name: 'John Doe' })
}

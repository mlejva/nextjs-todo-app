import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const currentDate = new Date().toISOString();
  res.status(200).json({ date: currentDate });
};

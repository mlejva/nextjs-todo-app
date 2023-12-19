import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { city } = req.query;
  if (!city) {
    res.status(400).send('City is required as a query parameter.');
    return;
  }

  try {
    const response = await axios.get(`http://worldtimeapi.org/api/timezone/${city}`);
    const currentTime = response.data.datetime;
    res.status(200).json({ currentTime });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the current time.' });
  }
};
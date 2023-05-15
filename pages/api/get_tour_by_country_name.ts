// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Post from "../../models/Post";
import { connectToDatabase } from '../../lib/mongodb2';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const countryName = req.query.country;
  const limit:number = parseInt(req.query.limit.toString());
  try {
    const { db } = await connectToDatabase();
    const olaszorszag = await db.collection('posts').find({ countries: countryName }).limit(limit).toArray();

    res.status(200).json({ olaszorszag });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
// {
//   try {
//     const { db } = await connectToDatabase();
//     // const countries = await db.collection('post').distinct('countries');
//     const countries = await Post.distinct('countries');

//     res.status(200).json({ countries });

//   } catch (error) {
//     res.status(500).json({ error: error });
//   } 
// }

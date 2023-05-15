// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Post from "../../models/Post";
import { connectToDatabase } from '../../lib/mongodb2';
const { ObjectId } = require('mongodb');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const id = req.query.id;
  try {
    const { db } = await connectToDatabase();
   
    const objectId = new ObjectId(id);

    const tour = await db.collection('posts').find({ _id: objectId }).limit(1).toArray();

    res.status(200).json( tour[0] );
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

import type { NextApiRequest, NextApiResponse } from 'next'
import Post from "../../models/Post";
import { connectToDatabase } from '../../lib/mongodb2';

export default async function handler(req: NextApiRequest, res: any) {
  try {
    const { db } = await connectToDatabase();
    var countries = await db.collection('posts').distinct('countries');

    // var countries = await Post.distinct('countries');
    countries = countries.sort()
    return res.status(200).json({ countries });
    // return the posts
  } catch (error) {
    // return the error
    console.log(error);
    return res.status(400).json({ error: true });
  }
}

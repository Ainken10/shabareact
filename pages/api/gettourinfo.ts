// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/mongodb";
import TourInfos from "../../models/tourInfo";
const mongoose = require('mongoose');

export default async function handler(req: NextApiRequest, res: any) {
  try {
    // connect to the database
    const db = await dbConnect();
    // fetch the posts
    console.log(req.query._id )
    const tourInfo = await TourInfos.find({ref: mongoose.Types.ObjectId(req.query._id) })
      .lean()
      .sort({dateStart: 1})
    return res.status(200).json({ tourInfo });
    // return the posts
  } catch (error) {
    // return the error
    console.log(error);
    return res.status(400).json({ error: true });
  }
}
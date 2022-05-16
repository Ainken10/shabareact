// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/mongodb";
import Tours from "../../models/tour";

export default async function handler(req: NextApiRequest, res: any) {
  try {


    // connect to the database
    const db = await dbConnect();

    // Tours.update({}, {$pull : { endDates: {$regex:'2021'} } }, (data,err) =>{

    //   console.log("HasreggggeexOO")
    // })

    // Tours.update({}, { startDates: ["2021-10-10","2022-01-02","2021-11-30"] }, (data,err) =>{

    //   console.log("HasdsadasdOOOOOOOOOOOOOOO")
    // })

    const tours = await Tours.find({"tourPhotos.0": { $exists: true } , startDates: { $exists: true, $not: {$size: 0} } })
      .lean()
      .select("tourPhotos")
      .select("tourTitle")
      .select("endDates")
      .select("tourCountries")
      .select("startDates")
      .select("priceFrom")
      .skip(Number(req.query.skip))
      .limit(Number(req.query.limit));
    return res.status(200).json({ tours });
    // return the posts
  } catch (error) {
    // return the error
    console.log(error);
    return res.status(400).json({ error: true });
  }
}

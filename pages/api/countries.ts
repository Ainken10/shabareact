// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/mongodb";
import Tours from "../../models/tour";

export default async function handler(req: NextApiRequest, res: any) {
  try {


    // connect to the database
    const db = await dbConnect();
    // fetch the posts
    let tours = await Tours.find({})
      .lean()
      .select("tourCountries") 

    let countries :any =[] 
    tours.forEach(element => {
        countries.push(...element.tourCountries)
    });
    countries  = [...new Set(countries)];
    return res.status(200).json({ countries });
    // return the posts
  } catch (error) {
    // return the error
    console.log(error);
    return res.status(400).json({ error: true });
  }
}

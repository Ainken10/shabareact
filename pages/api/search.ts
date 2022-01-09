// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/mongodb";
import Tours from "../../models/tour";

export default async function handler(req: NextApiRequest, res: any) {
  try {

    let orszag = req.query.country;
    let erkezesidatum = req.query.start;
    let indulasidatum = req.query.end;

    console.log("queries: ",orszag," ",erkezesidatum," ",indulasidatum )

    let query = { tourCountries: { $in: [orszag] },"tourPhotos.0": { $exists: true } };
  
    if (
      (indulasidatum == "" || indulasidatum === undefined) &&
      (erkezesidatum == "" || indulasidatum === erkezesidatum)
    ) {
      query = { tourCountries: { $in: [orszag] }, "tourPhotos.0": { $exists: true } };
      
    } else if (
      indulasidatum != "" &&
      indulasidatum != undefined &&
      (erkezesidatum == "" || indulasidatum === erkezesidatum)
    ) {
      query = {
        tourCountries: { $in: [orszag] },
        starDates: { $in: [indulasidatum] },
        "tourPhotos.0": { $exists: true }
      };
    } else if (
      erkezesidatum != "" &&
      erkezesidatum != undefined &&
      (indulasidatum == "" || indulasidatum === undefined)
    ) {
      query = {
        tourCountries: { $in: [orszag] },
        endDates: { $in: [erkezesidatum] },
        "tourPhotos.0": { $exists: true }
      };
    } else if (
      erkezesidatum != "" &&
      erkezesidatum != undefined &&
      indulasidatum != "" &&
      indulasidatum != undefined
    ) {
      query = {
        tourCountries: { $in: [orszag] },
        endDates: { $in: [erkezesidatum] },
        starDates: { $in: [indulasidatum] },
        "tourPhotos.0": { $exists: true }
      };
    }
    // connect to the database
    const db = await dbConnect();
    // fetch the posts
    const tours = await Tours.find(query)
      .lean()
      .select("tourPhotos")
      .select("tourTitle")
      .select("endDates")
      .select("tourCountries")
      .select("startDates")
      .select("priceFrom")
      
    
    return res.status(200).json({ tours });
    // return the posts
  } catch (error) {
    // return the error
    console.log(error);
    return res.status(400).json({ error: true });
  }
}

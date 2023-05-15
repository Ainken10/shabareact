// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Post from "../../models/Post";
import { connectToDatabase } from '../../lib/mongodb2';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  try {
    console.log('Search started')
    let country :any = req.query.country;
    let startDate:any  = req.query.start;
    let endDate:any  = req.query.end;
    let query :any = {};

    if (country) {
      query.countries = country;
    }


    if (startDate && endDate) {
      console.log('state: start/end')
      var dateToCheck = {
        start:startDate,
        end:endDate
      }
      query.dates = {
        $elemMatch: dateToCheck
      };

    } else if(startDate) {
      console.log('state: start')
      query.dates = {
        $elemMatch: {
          start: { $eq: startDate },
        }
      };
    }
    else if(endDate) {
      console.log('state: end')
      query.dates = {
        $elemMatch: {
          end: { $eq: endDate },
        }
      };
    }
    console.log('query:',query)
    const { db } = await connectToDatabase();
    const search_result = await db.collection('posts').find(query).toArray();

    // console.log('search_data:',search_result)
    res.status(200).json({ search_result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


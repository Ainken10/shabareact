import { MongoClient } from 'mongodb';
const  MONGODB_URI ='mongodb+srv://asd123:asd123@cluster0.wybat.mongodb.net/';
const  MONGODB_DB = 'ETI_TEST3';

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db(MONGODB_DB);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
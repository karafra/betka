import { MongoClient } from 'mongodb';

const MONGO_URL = process.env.MONGO_URI;

export const getDb = async () => {
  try {
    const client: any = await MongoClient.connect(MONGO_URL, {
      useUnifiedTopology: true,
    });
    return client.db();
  } catch (e) {
    console.error("Could not connect to " + MONGO_URL);
    throw e;
  }
};

import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  console.warn("MONGODB_URI not set, using in-memory storage");
}

let client: MongoClient | null = null;

export const connectToMongoDB = async () => {
  if (!process.env.MONGODB_URI) {
    return null;
  }
  
  if (!client) {
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
  }
  return client;
};

export const getDatabase = async () => {
  const mongoClient = await connectToMongoDB();
  if (!mongoClient) {
    return null;
  }
  return mongoClient.db('bookbridge');
};

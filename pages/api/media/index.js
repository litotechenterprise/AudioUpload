import { MongoClient } from "mongodb"
export default async function handler(req, res) {
    let client;
    try{
        client = await MongoClient.connect(`mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@dev.xanzp.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`)
    } catch(e) {
        console.log(e)
        res.status(500).json({ error: 'Could not connect to DB' })
        return;
    }
    // try {
    //    // const db = client.db();
    //     //const results = await db.collection("Audio").insertOne();

    // } catch (e) {
    //     console.log(e);
    //     client.close();
    //     res.status(500).json({ error: 'Save in database' })
    //     return;
    // }
    // client.close();
    
    res.status(201).json({ message: 'Connected to DB' })
  }




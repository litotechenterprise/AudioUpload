import { MongoClient } from "mongodb"
export default async function handler(req, res) {
    let client;
    try{
        client = await MongoClient.connect("mongodb+srv://LitoTech:Dtgfu1314@dev.xanzp.mongodb.net/AudioUploadDB?retryWrites=true&w=majority")
    } catch(e) {
        console.log(e)
        res.status(500).json({ error: 'Could not connect to DB' })
        return;
    }

    if(req.method === "POST") {
        try {
            const db = client.db();
            const results = await db.collection("audioFiles").insertOne();
     
         } catch (e) {
             console.log(e);
             client.close();
             res.status(500).json({ error: 'Save in database' })
             return;
         }
         client.close();

         res.status(201).json({ message: 'Connected to DB' })
         return;
    } else {
        res.status(200).json({ message: 'GET Request' })
        return;
    }
  }




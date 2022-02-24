import { connectToDatabase } from '../../utils/dbConnect'
 

export default async (req, res) => {
    
    
    if (req.method === 'POST') {
        let { upc } = req.body
        
        const { db } = await connectToDatabase();
        const mongo_response = await db.collection('sneakers').find({$or:[{"upc":upc},{"upc":"'" + upc}]}).toArray()

        if (mongo_response) {

            if (mongo_response?.length){
                let sneaker = mongo_response[0]
                return res.status(200).json({ sneaker })
            }

            if (!mongo_response?.length) {
                let sneaker = {
                    _id: "12345",
                    upc: upc,
                    size: "N/A",
                    brand: "N/A",
                    title: "No Results",
                    color1: "N/A",
                    color2: "N/A",
                    color3: "N/A",
                    styleID: "N/A",
                    slug: "N/A",
                    image: "N/A"
                }

                // store the unmatched upc:
                const notFound = await db.collection('notFound').insertOne({ upc: upc, date: new Date()})
                
                // return default not found sneaker object
                return res.status(200).json({ sneaker })
            }

           
        } 
        
    }
}



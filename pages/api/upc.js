import { connectToDatabase } from '../../utils/dbConnect'
 

export default async (req, res) => {
    
    
    if (req.method === 'POST') {
        let { upc } = req.body
        // console.log("🚀 ~ file: upc.js ~ line 9 ~ upc", upc)
        
        const { db } = await connectToDatabase();
        const mongo_response = await db.collection('sneakers').find({$or:[{"upc":upc},{"upc":"'" + upc}]}).toArray()
        
        const count = await db.collection("sneakers").count()
        // console.log("🚀 ~ file: upc.js ~ line 14 ~ count", count)
        
        if (mongo_response) {
            // console.log("🚀 ~ file: upc.js ~ line 17 ~ mongo_response", mongo_response)

            if (mongo_response?.length){
                let sneaker = mongo_response[0]
                // console.log("🚀 ~ file: upc.js ~ line 18 ~ sneaker", sneaker)
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
                return res.status(200).json({ sneaker })
            }

           
        } 
        
    }
}



import { connectToDatabase } from '../../utils/dbConnect'
 

export default async (req, res) => {
    
    
    if (req.method === 'GET') {
        
        const { db } = await connectToDatabase();
        const count = await db.collection("sneakers").count()
        
        
        
        if (count) {
            

          
                return res.status(200).json({ count })
           

           
            }

           
        } 
        
    }




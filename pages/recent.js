import React from 'react'
import { connectToDatabase } from '../utils/dbConnect'
import RecentList from '../components/RecentList'

export async function getStaticProps({ params }) {
    const { db } = await connectToDatabase();  
    const latest = await db.collection("sneakers").find().sort({$natural:-1}).limit(40).toArray()
  
    return {
      props: {
        latest: JSON.parse(JSON.stringify(latest)),
      },
      revalidate: 60,
    };
  }

function Recent({latest}) {
  console.log("🚀 ~ file: Recent.js ~ line 17 ~ Recent ~ latest", latest)
  
  
  return (
    <>
       
          <h1 className="pt-5 font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black">Recently Added</h1>
          <p class="text-gray-600  pb-5 pt-2">Updated Daily 😊</p>
           
          <RecentList latest={latest}/>

    </>
  )
}

export default Recent
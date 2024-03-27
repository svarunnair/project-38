import React, { useEffect, useState } from 'react'
import skybags1 from "./skybags1.mp4"
import skybags2 from "./skybags2.mp4"



function VideoSlider() {
    const [image,setImage] = useState(0)
    // const [collection,setCollection]=useState([])

    const data=[
        skybags1,
        skybags2
    ]

    const VideoData=data[image]

    // console.log("object",data)

    // // useEffect(()=>{
    // //   setInterval(()=>{
    // //     setImage(image=>image<1?image+1:0)
    // //   },4000)
    // // },[])


  return (
    <div>
  <video width={"100%"}  muted autoPlay src={VideoData}/>

    </div>
  )
}

export default VideoSlider
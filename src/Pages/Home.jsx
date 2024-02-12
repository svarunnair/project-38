import { Box, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react'
import skybag1 from '../Components/skybags1.mp4'
import skybag2 from '../Components/skybags2.mp4'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../Redux/data/action';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import SimpleImageSlider from 'react-simple-image-slider/dist/ImageSlider';
import SimpleImageSlider from "react-simple-image-slider";


const OuterContainer = styled(Box)(({ theme }) => ({

  // border:"2px solid black",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const InnerDiv = styled(Box)(({ theme }) => ({


    // border:"2px solid red",
    display:"grid",
  
    justifyContent:"center",
    justifyItems:"center",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ItemBox = styled(Box)(({ theme }) => ({
   
    // border:"2px solid blue",
    display:"flex",
    gap:20,
    padding:40,

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const OptionDiv = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    display:"flex",
    justifyContent:"center",
    gap:70,
    padding:50,

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextTitle = styled(Typography)(({ theme }) => ({
  
    color:"grey",
    fontWeight:600,

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const DataMap = styled(Box)(({ theme }) => ({

    // border:"2px solid red",
    borderRadius:15,
    background:"grey",
    height:400,
    // boxShadow:'rgba(0, 0, 0, 5)',
  
    position:"relative",

    

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ImageBox = styled(Box)(({ theme }) => ({
  
    width:"100%",
    paddingTop:100,

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ImageDiv = styled(Box)(({ theme }) => ({
  
   display:"flex",
   justifyContent:"center",
  //  border:"2px solid red",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextData = styled(Typography)(({ theme }) => ({


    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const SliderDiv = styled(Typography)(({ theme }) => ({


    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const BottomText = styled(Typography)(({ theme }) => ({

    fontWeight:600,
    fontSize:30,
    

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ImageIcon = styled(Box)(({ theme }) => ({

    // border:"2px solid red",
    display:"grid",
    gridTemplateColumns:"repeat(4,1fr)",
    padding:50,
    width:"80%",
    justifyItems:"center",
    justifyContent:"center",
    alignContent:"center",
gap:140,


    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ImageText = styled(Typography)(({ theme }) => ({


    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const Wrapper = styled(Box)(({ theme }) => ({

    // border:"2px solid green",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const InstaDiv = styled(Box)(({ theme }) => ({

    // border:"2px solid green",
    display:"grid",
    justifyItems:"center",
    justifyContent:"center",
    
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const InstaText = styled(Typography)(({ theme }) => ({

  // border:"2px solid red",
  position:"absolute",
  paddingTop:60,
  color:"white",
  fontSize:35,

  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const InstaImage = styled(Box)(({ theme }) => ({

    // border:"2px solid green",
    width:"100%",
   
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const VideoIcon = styled(Box)(({ theme }) => ({

    // border:"2px solid green",

    display:"grid",
    gridTemplateColumns:"repeat(4,1fr)",
   position:"absolute",
paddingTop:170,
justifyItems:'center',


   
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  


function Home() {

  const navigate=useNavigate()
  const mainData=useSelector((store)=>store.data.getMainData)
  const dispatch=useDispatch()
  const [count,setCount]=useState(1)


  const imageArr=["https://skybags.co.in/cdn/shop/files/swirl_2048x.png?v=1698312347",
"https://skybags.co.in/cdn/shop/files/skybags-boho_2048x_f5fed183-dd06-4287-98f7-f1fb3b7316da_2048x.png?v=1698311589",
]

const sliderArr=[
  "https://skybags.co.in/cdn/shop/files/StayCaution_2048x.png?v=1695273639",
  "https://skybags.co.in/cdn/shop/files/Student_Travel_1_2048x.png?v=1695297287",
  "https://skybags.co.in/cdn/shop/files/Disney___Marvel_7e83ee9a-2c0e-4416-8427-30030c6a2cd3_2048x.png?v=1695273639",
  "https://skybags.co.in/cdn/shop/files/Adventure_f9522bee-51c7-4d50-9204-7972eaf2b86c_2048x.png?v=1695273639"
]


const instaVideos=[
  "https://cdn.shopify.com/videos/c/o/v/f7835b498f36457f87163e3e101dba58.mp4",
  "https://cdn.shopify.com/videos/c/o/v/708c383317e345fd8677b777098c3a8c.mp4",
  "https://cdn.shopify.com/videos/c/o/v/12de4e6824f5495c8ef927fe41e7f88f.mp4",
  "https://cdn.shopify.com/videos/c/o/v/b021829236aa4b738b6bd8005632ab91.mp4",
  "https://cdn.shopify.com/videos/c/o/v/413deb76fac74e4cba4caab502b39794.mp4",
]


  console.log("maindata",mainData)

  useEffect(()=>{
    dispatch(getData())
  },[])

  const handleImageOne=()=>{
    navigate(`/detail/${1}`)
  }

  const handleImageTwo=()=>{
    navigate(`/detail/${2}`)
  }

  const handleImageThree=()=>{
    navigate(`/detail/${3}`)
  }
  const handleImageFour=()=>{
    navigate(`/detail/${4}`)
  }
  const handleImageFive=()=>{
    navigate(`/detail/${5}`)
  }
  






  return (
    <OuterContainer>

      <InnerDiv>
<video width={"100%"}  autoPlay muted loop src={skybag2} />

<OptionDiv>
  <TextTitle>ARCHIES</TextTitle>
  <TextTitle>TRAVEL</TextTitle>
  <TextTitle>WORK</TextTitle>
  <TextTitle>ADVENTURE</TextTitle>
  <TextTitle>SCHOOL</TextTitle>
  <TextTitle>COLLAGE</TextTitle>
</OptionDiv>


<ItemBox>

  <DataMap>
    <ImageBox sx={{cursor:"pointer",":hover":{width:"130%",transition:"all .2s"}}} onClick={handleImageOne} as={"img"} src="https://skybags.co.in/cdn/shop/files/SkybagsChrysalNavy_1800x1800.png?v=1698927386"/>
 <TextData></TextData>
  </DataMap>

  <DataMap sx={{background:"yellow"}}>
    <ImageBox sx={{cursor:"pointer",":hover":{width:"130%",transition:"all .2s"}}} onClick={handleImageTwo} as={"img"} src="https://skybags.co.in/cdn/shop/files/1_416d0a44-6784-4f6d-b6b5-36b263699d6e_1800x1800.png?v=1699423862"/>
  </DataMap>

  <DataMap sx={{background:"blue"}}>
    <ImageBox sx={{cursor:"pointer",":hover":{width:"130%",transition:"all .2s"}}} onClick={handleImageThree} as={"img"} src="https://skybags.co.in/cdn/shop/files/1_98af7961-5571-4a22-b001-3e99e72a2024_1800x1800.png?v=1699338817"/>
  </DataMap>

  <DataMap sx={{background:"green"}}>
    <ImageBox sx={{cursor:"pointer",":hover":{width:"130%",transition:"all .2s"}}} onClick={handleImageFour} as={"img"} src="https://skybags.co.in/cdn/shop/files/01_1800x1800.png?v=1699422961"/>
  </DataMap>

  <DataMap sx={{background:"pink"}}>
    <ImageBox sx={{cursor:"pointer",":hover":{width:"130%",transition:"all .2s"}}} onClick={handleImageFive} as={"img"} src="https://skybags.co.in/cdn/shop/files/1_3cb38464-d049-4782-9ab0-ed7be51046af_1800x1800.png?v=1699426266"/>
  </DataMap>

</ItemBox>

<ImageBox as={"img"} src="https://skybags.co.in/cdn/shop/files/Skybags_Archies-collection_17th-Nov_Green_2048x.jpg?v=1700289280"/>


<ImageDiv>
 
  <ArrowBackIosIcon sx={{position:"absolute",display:"flex"}}/>
<ImageBox sx={{paddingTop:0}} as={"img"} src={imageArr[count]}/>
<ArrowForwardIosIcon sx={{position:"absolute",justifyContent:"right",}}/>
</ImageDiv>



<SliderDiv>
  <ImageBox as={'img'} src={sliderArr[0]}/>
</SliderDiv>

<BottomText>WHY TO BUY FROM US</BottomText>

<ImageIcon>
  <Wrapper>
  <ImageBox sx={{paddingTop:0,width:"90%"}} as={"img"} src="https://skybags.co.in/cdn/shop/files/Group_179190_063c9481-0448-4dab-9faf-3ab6fed2ff2d_540x.svg?v=1695120159"/>
 <ImageText>Free Shipping</ImageText>
 </Wrapper>
 <Wrapper>
  <ImageBox sx={{paddingTop:0,width:"90%"}} as={"img"} src="https://skybags.co.in/cdn/shop/files/Group_179225_8c1101d2-e71c-4d9f-a62e-d03daff7916a_540x.svg?v=1695120159"/>
 <ImageText>Secure Payment</ImageText>
 </Wrapper>
 <Wrapper>
  <ImageBox sx={{paddingTop:0,width:"90%"}} as={"img"} src="https://skybags.co.in/cdn/shop/files/brand_identity_e9538366-3a10-4176-ba6f-413a6a8d50dc_540x.png?v=1695120159"/>
 <ImageText>Brand Warranty</ImageText>
 </Wrapper>
 <Wrapper>
  <ImageBox sx={{paddingTop:0,width:"90%"}} as={"img"} src="https://skybags.co.in/cdn/shop/files/Group_179226_efb81856-67a7-415d-987a-9b272e42cb3a_540x.png?v=1695120159"/>
 <ImageText>Genuine Products</ImageText>
 </Wrapper>
</ImageIcon>

<InstaDiv>
<InstaText>INFLUENCER FAVORITES</InstaText>

<VideoIcon>

  <video width={"60%"} autoPlay muted loop src={instaVideos[0]}/>
  <video width={"60%"} autoPlay muted loop src={instaVideos[1]}/>
  <video width={"60%"} autoPlay muted loop src={instaVideos[2]}/>
  <video width={"60%"} autoPlay muted loop src={instaVideos[3]}/>


</VideoIcon>
  <InstaImage as={"img"} src="https://cdn.shopify.com/s/files/1/0696/1011/1257/files/Mask_Group_48.svg?v=1692874438"/>




</InstaDiv>


      </InnerDiv>


    </OuterContainer>
  )
}

export default Home
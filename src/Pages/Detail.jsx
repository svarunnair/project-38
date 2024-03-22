import { Box, Button, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getData, getDetail, patchCart, postCart } from '../Redux/data/action';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const OuterContainer = styled(Box)(({ theme }) => ({
    // border:"2px solid black",
    display:"flex",
    flexDirection:"column",
   
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const InnerContainer = styled(Box)(({ theme }) => ({
    // border:"2px solid black",
    display:"flex",
    background:"#F0F0F0",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      flexDirection:"column",
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ImageBox = styled(Box)(({ theme }) => ({
    // border:"2px solid black",
    width:"100%",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const DetailBox = styled(Box)(({ theme }) => ({
    // border:"2px solid green",
   display:"flex",
   flexDirection:"column",
    height:"100%",
    textAlign:"left",
    gap:10,
    padding:60,
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const DetailDiv = styled(Box)(({ theme }) => ({
    // border:"2px solid yellow",
    width:"50%",
 padding:30,
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      width:"100%",
      padding:10,
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ImageContainer = styled(Box)(({ theme }) => ({
    // border:"2px solid green",
    width:"50%",
    height:"100%",
    display:"flex",
    alignItems:"center",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextDetail = styled(Typography)(({ theme }) => ({
    // border:"2px solid green",

   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const QuantityBox = styled(Box)(({ theme }) => ({
    // border:"2px solid blue",
    display:"flex",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));


  const DetailImage = styled(Box)(({ theme }) => ({
    border:"1px solid blue",
    borderRadius:10,
    width:"10%",
    background:"white",


   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const CartDiv = styled(Box)(({ theme }) => ({
    // border:"2px solid green",
    display:"flex",
    gap:10,
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))

  const BottomText = styled(Typography)(({ theme }) => ({

    marginTop:40,
    marginBottom:40,
    fontSize:30,
    fontWeight:600,
   
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))

  const ReviewBox = styled(Box)(({ theme }) => ({

    // border:"2px solid red",
    background:"#2AAA8A",
    width:"100%",
    height:400,
    display:"grid",
    justifyItems:"center",
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))

  const ReviewText = styled(Typography)(({ theme }) => ({

    color:"white",
    fontSize:40,
    fontWeight:600,
    padding:40,
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))

  const ReviewNote = styled(Typography)(({ theme }) => ({
    color:"black",
    fontSize:15,

   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))

  const ButtonReview = styled(Button)(({ theme }) => ({

    background:"#0373bc",
    color:"white",
    ":hover":{background:"#0373bc",
    color:"white",},
    textTransform:"none",
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))

  const ItemList = styled(Box)(({ theme }) => ({
    display:"flex",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))

  const MapList = styled(Box)(({ theme }) => ({

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))
  const FinalBox = styled(Box)(({ theme }) => ({
    background:"#F0F0F0",

   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))

  const InnerDiv = styled(Typography)(({ theme }) => ({

    // border:"2px solid red",
    background:"white",
    width:"90%",
    height:200,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    gap:10,

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))

  const ImageIcon = styled(Box)(({ theme }) => ({
  //  border:"2px solid red",
    display:"flex",
    justifyContent:"center",
    gap:150,
    paddingBottom:30,
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      display:'grid',
      gridTemplateColumns:"repeat(2,1fr)",
      gap:100,
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))

  const Wrapper = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
     
     [theme.breakpoints.down("xl")]: {},
     [theme.breakpoints.down("lg")]: {},
     [theme.breakpoints.down("md")]: {},
     [theme.breakpoints.down("sm")]: {},
     [theme.breakpoints.down("xs")]: {},
   }))
   const IconBox = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
     cursor:"pointer",
     [theme.breakpoints.down("xl")]: {},
     [theme.breakpoints.down("lg")]: {},
     [theme.breakpoints.down("md")]: {},
     [theme.breakpoints.down("sm")]: {},
     [theme.breakpoints.down("xs")]: {},
   }))
   const ImageText = styled(Typography)(({ theme }) => ({

     
     [theme.breakpoints.down("xl")]: {},
     [theme.breakpoints.down("lg")]: {},
     [theme.breakpoints.down("md")]: {},
     [theme.breakpoints.down("sm")]: {},
     [theme.breakpoints.down("xs")]: {},
   }))


function Detail() {

    const params=useParams()
    const detail=useSelector((store)=>store.data.getDetailData)
    const dispatch=useDispatch()
    const [data,setData]=useState('')
    const mainData=useSelector((store)=>store.data.getMainData)
    const navigate=useNavigate()
    const [count,setCount]=useState(0)
  


    const handleCart=()=>{
      detail.quant=1
      dispatch(postCart(detail))
      alert('Product added to cart')
    }
    const handleBuy=()=>{
      dispatch(postCart(detail))
      navigate('/info')
    }
    const handleAdd=(id,quant)=>{
      quant=quant+1
      dispatch(patchCart(id,quant))
    }
    const handleReduce=(id,quant)=>{
      if(quant<2){
        quant=1
      }
      else{
        let data={
          quant:quant-1
        }
        dispatch(patchCart(id,data))
      }
    }

    console.log("maiNadataa",mainData)

    console.log("detail",detail)

  console.log("params",params)

  const handleNext=()=>{
    setCount(count+1)
    if(count>1){
      setCount(0)
    }
  }
  const handlePre=()=>{
    setCount(count-1)
    if(count<1){
      setCount(2)
    }
  }
  console.log("count",count)

  const token=localStorage.getItem("token")

  useEffect(()=>{
     dispatch(getData(token))
  },[])

  useEffect(()=>{
     if(Object.keys(detail).length>0){
      setData(detail.images)
      detail.quant=1
     }
  },[detail])



  useEffect(()=>{
    dispatch(getDetail(params.id))
    // detail.quant=1
  },[])



  console.log("getDetail",getDetail)



  useEffect(() => {
    return sessionStorage.setItem("show",null)
   }, []);


   console.log("datacheck",data)

  //  useEffect(()=>{
  //     if(Object.keys(mainData).length>0){
  //       setData(mainData)
  //     }
  //   },[mainData])



  return (
    <OuterContainer>

        <InnerContainer>

        
        <ImageContainer>
          <IconBox onClick={handlePre}>
          <ArrowBackIosIcon/>
          </IconBox>
        <ImageBox as={"img"} src={data[count]}/>
        <IconBox onClick={handleNext}>
        <ArrowForwardIosIcon />
        </IconBox>

        </ImageContainer>

        <DetailDiv>

        <DetailBox>

<TextDetail sx={{paddingTop:5,fontSize:30,fontWeight:600}}>{detail?.name}</TextDetail>
<TextDetail sx={{display:"flex",color:"#00008B",fontWeight:600}}>₹{detail.price}.00 Inclusive of all taxes</TextDetail>
<TextDetail>COLOUR-Black</TextDetail>
<DetailImage as={"img"} src={data}/>
<TextDetail>Quantity</TextDetail>
<QuantityBox>
  <Button onClick={()=>handleAdd(detail.id,detail.quant)}>+</Button>
  <Button>{detail.quant}</Button>
  <Button onClick={()=>handleReduce(detail.id,detail.quant)}>-</Button>
</QuantityBox>
<CartDiv>
  <Button onClick={handleCart} sx={{background:"white",position:"static",color:"#0373bc",width:300,height:50,":hover":{background:"white",color:"#0373bc"}}}><ShoppingCartOutlinedIcon/> Add to Cart{<ArrowRightAltIcon sx={{color:'black',}}/>}</Button>
  <Button onClick={handleBuy} sx={{background:"black",position:"static",color:"white",width:300,height:50,":hover":{background:"black",color:"white"}}}>BUY NOW</Button>
</CartDiv>


        </DetailBox>
        </DetailDiv>

        </InnerContainer>

        <BottomText>WHY TO BUY FROM US</BottomText>

<ImageIcon>
  <Wrapper>
  <ImageBox sx={{paddingTop:0,width:"70%"}} as={"img"} src="https://skybags.co.in/cdn/shop/files/Group_179190_063c9481-0448-4dab-9faf-3ab6fed2ff2d_540x.svg?v=1695120159"/>
 <ImageText>Free Shipping</ImageText>
 </Wrapper>
 <Wrapper>
  <ImageBox sx={{paddingTop:0,width:"70%"}} as={"img"} src="https://skybags.co.in/cdn/shop/files/Group_179225_8c1101d2-e71c-4d9f-a62e-d03daff7916a_540x.svg?v=1695120159"/>
 <ImageText>Secure Payment</ImageText>
 </Wrapper>
 <Wrapper>
  <ImageBox sx={{paddingTop:0,width:"70%"}} as={"img"} src="https://skybags.co.in/cdn/shop/files/brand_identity_e9538366-3a10-4176-ba6f-413a6a8d50dc_540x.png?v=1695120159"/>
 <ImageText>Brand Warranty</ImageText>
 </Wrapper>
 <Wrapper>
  <ImageBox sx={{paddingTop:0,width:"70%"}} as={"img"} src="https://skybags.co.in/cdn/shop/files/Group_179226_efb81856-67a7-415d-987a-9b272e42cb3a_540x.png?v=1695120159"/>
 <ImageText>Genuine Products</ImageText>
 </Wrapper>
</ImageIcon>
<ImageBox as={"img"} src="https://skybags.co.in/cdn/shop/files/1_22_2b535c0e-3227-4eb3-ba31-719aa3915b6b.jpg?v=1701073605&width=1000"/>
<ImageBox as={"img"} src="https://skybags.co.in/cdn/shop/files/2_21.jpg?v=1701073610&width=1000"/>
<ImageBox as={"img"} src="https://skybags.co.in/cdn/shop/files/3_19.jpg?v=1701073616&width=1000"/>
<ImageBox as={"img"} src="https://skybags.co.in/cdn/shop/files/4_21.jpg?v=1701073622&width=1000"/>
<ImageBox as={"img"} src="https://skybags.co.in/cdn/shop/files/5_20.jpg?v=1701073626&width=1000"/>

<BottomText  sx={{paddingTop:4,fontSize:40,fontWeight:600,}}>FEATURES</BottomText>
<ImageIcon sx={{gap:1,paddingTop:2,paddingBottom:10}}>
  <Wrapper>
  <ImageBox sx={{paddingTop:0,width:"50%"}} as={"img"} src="https://skybags.co.in/cdn/shop/files/Tractum_-Suspension_Strap_200x.webp?v=1699253895"/>
 <ImageText>Suspension Strap</ImageText>
 </Wrapper>
 <Wrapper>
  <ImageBox sx={{paddingTop:0,width:"30%"}} as={"img"} src="https://skybags.co.in/cdn/shop/files/Warranty_200x.png?v=1699254168"/>
 <ImageText>12 Months Warranty</ImageText>
 </Wrapper>
 <Wrapper>
  <ImageBox sx={{paddingTop:0,width:"30%"}} as={"img"} src="https://skybags.co.in/cdn/shop/files/Material_200x.png?v=1699254883"/>
 <ImageText>Polyester Material</ImageText>
 </Wrapper>
 <Wrapper>
  <ImageBox sx={{paddingTop:0,width:"30%"}} as={"img"} src="https://skybags.co.in/cdn/shop/files/Pockets_200x.png?v=1699255076"/>
 <ImageText>Two Pockets</ImageText>
 </Wrapper>
 <Wrapper>
  <ImageBox sx={{paddingTop:0,width:"30%"}} as={"img"} src="https://skybags.co.in/cdn/shop/files/zip_7695456_200x.png?v=1698419137"/>
 <ImageText>Two Zips</ImageText>
 </Wrapper>
</ImageIcon>

<ReviewBox>

  <ReviewText>CUSTOMER REVIEWS</ReviewText>

<InnerDiv>
<ReviewNote>Be the first to write a review</ReviewNote>
<ButtonReview>Write a Review</ButtonReview>
</InnerDiv>

</ReviewBox>
        {/* <ImageBox as={"img"} src=""/> */}

        <FinalBox>
        <ReviewText sx={{color:"black"}}>YOU MAY ALSO LIKE</ReviewText>

        <ItemList>
          {mainData?.slice(0,5).map((item)=>(
            <MapList>

              <ImageBox as={"img"} src={item.images[0]}/>
              <TextDetail>{item.name}</TextDetail>
              <TextDetail>₹{item.price}.00</TextDetail>
            
            </MapList>
          ))}
        </ItemList>

        </FinalBox>
    </OuterContainer>
  )
}

export default Detail
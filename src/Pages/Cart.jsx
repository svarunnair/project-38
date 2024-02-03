import { Box, Grid, Typography, styled } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCart } from '../Redux/data/action';



const OuterContainer = styled(Box)(({ theme }) => ({

  // border:"2px solid green",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerContainer = styled(Box)(({ theme }) => ({

  // border:"2px solid green",
  display:"grid",
  justifyItems:"center",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextBox = styled(Typography)(({ theme }) => ({

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const CartData = styled(Box)(({ theme }) => ({
  // border:"2px solid red",
  width:"60%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImageBox = styled(Box)(({ theme }) => ({
 
  width:"15%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const TextName = styled(Typography)(({ theme }) => ({
 
  display:"none",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display:"flex",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const TextBoxSecond = styled(Typography)(({ theme }) => ({
 
 
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display:"none",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const TitleBox = styled(Box)(({ theme }) => ({

  display:"flex",
  justifyContent:"right",
  // border:"2px solid red",
  gap:150,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display:"none",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const GapDiv = styled(Box)(({ theme }) => ({
  // border:"2px solid red",
  display:"flex",
  width:"30%",
  justifyContent:"space-between",
  


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const MapCart = styled(Box)(({ theme }) => ({
  // border:"2px solid yellow",
  display:"flex",
  justifyContent:"space-between",
  paddingTop:30,


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display:"grid",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

function Cart() {

  const dispatch=useDispatch()
  const cartData=useSelector((store)=>store.data.getCartData)
  

  console.log("catData",cartData)

  useEffect(()=>{
     dispatch(getCart())
  },[])


  return (
    <OuterContainer>

      <InnerContainer>

        <TextBox sx={{paddingTop:5,fontWeight:900,fontSize:25}}>Cart</TextBox>
        <TextBox sx={{paddingBottom:3,":hover":{textDecoration:"underline"}}}>Continue shopping</TextBox>


        <CartData>

<TitleBox>
<TextBox sx={{fontSize:10,fontWeight:600,}}>QUANTITY</TextBox>
<TextBox sx={{fontSize:10,fontWeight:600,}}>PRICE</TextBox>
</TitleBox>
         

{cartData.map((item)=>(
  <MapCart>

    <ImageBox as={"img"} src={item.images[0]}/>
<TextName>{item.name}</TextName>
  
<TextBoxSecond>{item.name}</TextBoxSecond>
    <GapDiv>
    
    <TextBox>{item.quant}</TextBox>
    <TextBox>₹{item.price}.00</TextBox>
    </GapDiv>

  
  </MapCart>
))}


        </CartData>

      </InnerContainer>


    </OuterContainer>
  )
}

export default Cart
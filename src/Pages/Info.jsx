import { CheckBox } from '@mui/icons-material';
import { Box, Button, OutlinedInput, Typography, styled } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../Redux/data/action';


const OuterContainer = styled(Box)(({ theme }) => ({
  display:"flex",


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const InnerContainer = styled(Box)(({ theme }) => ({

  border:"2px solid red",
  width:"60%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const CartDiv = styled(Box)(({ theme }) => ({

  border:"2px solid green",
  width:"40%",
  background:"#F5F5F5",
  display:"flex",
  flexDirection:"column",
  gap:40,
  padding:20,
  


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InputDiv = styled(Box)(({ theme }) => ({

  border:"2px solid yellow",
  display:"flex",
  flexDirection:"column",
  gap:20,

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
const MapData = styled(Box)(({ theme }) => ({

  // border:'2px solid red',
  display:"flex",
  justifyContent:"space-between",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const ImageBox = styled(Box)(({ theme }) => ({
width:"15%",
// border:'2px solid red',
background:"#E8E8E8",
borderRadius:10,
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const FirstBox = styled(Box)(({ theme }) => ({

  display:"flex",
  gap:10,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const ImageDiv = styled(Box)(({ theme }) => ({
border:"2px solid blue",


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const CoupenDiv = styled(Box)(({ theme }) => ({
  border:"2px solid blue",
  display:"flex",
  
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const TotalDiv = styled(Box)(({ theme }) => ({
    border:"2px solid green",
    display:"flex",
    
    
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    }));
const IconDiv = styled(Box)(({ theme }) => ({

  width:"15%",
  padding:60,
  display:"flex",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

function Info() {
  const dispatch=useDispatch()
  const cartData=useSelector((store)=>store.data.getCartData)
  

  console.log("cartDataIm]nfooo",cartData)

  let total=cartData.reduce((acc,item,index)=>{
    return acc + item.price * item.quant  },0)

  useEffect(()=>{
     dispatch(getCart())
  },[])
  return (
    <OuterContainer>

      <InnerContainer>

        <IconDiv as={"img"} src="https://cdn.shopify.com/s/files/1/0696/1011/1257/files/Skybags_Logo._120x_5d2632d5-f10c-4723-9362-94e066a323c8_x320.png?v=1677825186"/>

         <InputDiv>
         <TextBox>Contact</TextBox>
         <OutlinedInput placeholder='Email'/>
         <TextBox>Email me with news and offers</TextBox>
         <TextBox>Shipping address</TextBox>
         <OutlinedInput placeholder='Country/Region'/>
         <FirstBox>
         <OutlinedInput placeholder='First name' />
         <OutlinedInput placeholder='Last name' />

         </FirstBox>
         
         <OutlinedInput placeholder='Address'/>
         <OutlinedInput placeholder='Appartment,suit,etc'/>
         <FirstBox>
         <OutlinedInput placeholder='City'/>
         <OutlinedInput placeholder='State'/>
         <OutlinedInput placeholder='PIN code'/>
         </FirstBox>

         <OutlinedInput placeholder="Phone"/>
         <TextBox>Save this information for next time</TextBox>
         
         </InputDiv>



      </InnerContainer>

      <CartDiv>

        {cartData.map((item)=>(
          <MapData>
           
            <ImageBox as={"img"} src={item.images[0]}/>
          
            <TextBox>{item.name}</TextBox>
            <TextBox>₹{item.price}.00</TextBox>
          
          </MapData>
        ))}

        <CoupenDiv>
          <OutlinedInput sx={{width:"80%"}} placeholder='Discount code'/>
          <Button>Apply</Button>
        </CoupenDiv>

       <TotalDiv>
        <TextBox>Sub Total :</TextBox>
        <TextBox>{total}</TextBox>
       </TotalDiv>

      </CartDiv>




    </OuterContainer>
  )
}

export default Info
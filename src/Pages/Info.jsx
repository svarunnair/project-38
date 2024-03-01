import { CheckBox } from '@mui/icons-material';
import { Box, Button, OutlinedInput, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCart, postInfo } from '../Redux/data/action';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const OuterContainer = styled(Box)(({ theme }) => ({
  display:"flex",


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const InnerContainer = styled(Box)(({ theme }) => ({

  // border:"2px solid red",
  width:"60%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width:"100%",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const CartDiv = styled(Box)(({ theme }) => ({

  // border:"2px solid green",
  width:"40%",
  background:"#F5F5F5",
  display:"flex",
  flexDirection:"column",
  gap:40,
  padding:20,
  


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display:"none"
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const CartDivHide = styled(Box)(({ theme }) => ({

  // border:"2px solid green",
  width:"90%",
  background:"white",
  display:"none",
  flexDirection:"column",
  gap:10,
  padding:20,
  


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display:"flex",
  flexDirection:"column",
 
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const InputDiv = styled(Box)(({ theme }) => ({

  // border:"2px solid yellow",
  display:"flex",
  flexDirection:"column",
  gap:20,
  padding:20,
  alignContent:"left",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const TextBox = styled(Typography)(({ theme }) => ({
  textAlign:'left',


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
width:"55%",
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
// border:"2px solid blue",
display:"flex",
width:"30%",



  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const CoupenDiv = styled(Box)(({ theme }) => ({
  // border:"2px solid blue",
  display:"flex",
  
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const TotalDiv = styled(Box)(({ theme }) => ({
    // border:"2px solid green",
    display:"flex",
    justifyContent:"space-between",
    
    
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    }));
    const BottomBox = styled(Box)(({ theme }) => ({
      // border:"2px solid green",
      display:"flex",
      justifyContent:"space-between",
      
      
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
const OrderDiv = styled(Box)(({ theme }) => ({
background:"#F0F0F0",
justifyContent:"space-between",
padding:10,
  display:"none",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display:"flex",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const OrderDivHide = styled(Box)(({ theme }) => ({
  background:"#F0F0F0",
  padding:10,
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
     
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

function Info() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const cartData=useSelector((store)=>store.data.getCartData)
  const [show,setShow]=useState(false)
  const [email,setEmail]=useState('')
  const [country,setCountry]=useState('')
  const [firts,setFirts]=useState('')
  const [last,setLast]=useState('')
  const [address,setAddress]=useState('')
  const [appartment,setAppartment]=useState('')


  // const handleCart=()=>{
  //   setshowCart(false)
  // }
  const handleReturn=()=>{
    navigate('/cart')
  }

  const handleShow=()=>{
    setShow(true)
  }
  const handleHideShow=()=>{
    setShow(false)
  }
  const handleEmail=(e)=>{
    let value=e.target.value 
    setEmail(value)
  }
  const handleCountry=(e)=>{
    let value=e.target.value 
    setCountry(value)
  }
  const handleFirts=(e)=>{
    let value=e.target.value 
    setFirts(value)
  }
  const handleLast=(e)=>{
    let value=e.target.value 
    setLast(value)
  }
  const handleAppartment=(e)=>{
    let value=e.target.value 
    setAppartment(value)
  }
  const handleAddress=(e)=>{
    let value=e.target.value 
    setAddress(value)
  }

  const handleClick=()=>{
    if(email===""||firts===""||address===""||appartment===''){
      alert('Kindly fill the data')
    }
    else{
    let data={
      email:email,
      firstName:firts,
      lastName:last,
      address:address,
      appartment:appartment,
      item:cartData
    }
    dispatch(postInfo(data))
    navigate('/payment')
  }
  }



  console.log("cartDataIm]nfooo",cartData)

  let total=cartData.reduce((acc,item,index)=>{
    return acc + item.price * item.quant  },0)

  useEffect(()=>{
     dispatch(getCart())
  },[])
  return (
    <OuterContainer>
{/* <Button onClick={handleCart}>Checkkkkkk</Button> */}
      <InnerContainer>

        <IconDiv as={"img"} src="https://cdn.shopify.com/s/files/1/0696/1011/1257/files/Skybags_Logo._120x_5d2632d5-f10c-4723-9362-94e066a323c8_x320.png?v=1677825186"/>


{!show&&<OrderDiv onClick={handleShow}>
 
 <TextBox><ShoppingCartIcon/> Show order summery</TextBox>
 <TextBox>₹{total}.00</TextBox>
</OrderDiv>}

{show&&<OrderDivHide onClick={handleHideShow}>
<TextBox><ShoppingCartIcon/>Hide order summery</TextBox>

<CartDivHide>

        {cartData.map((item)=>(
          <MapData>
           <ImageDiv>
            
            <ImageBox as={"img"} src={item.images[0]}/>
            {item.quant}
            </ImageDiv>
          
            <TextBox sx={{width:"40%",}}>{item.name}</TextBox>
            <TextBox>₹{item.price}.00</TextBox>
          
          </MapData>
        ))}

        <CoupenDiv>
          <OutlinedInput sx={{width:"80%"}} placeholder='Discount code'/>
          <Button>Apply</Button>
        </CoupenDiv>

       <TotalDiv>
        <TextBox>Sub Total :</TextBox>
        <TextBox>₹{total}.00</TextBox>
       </TotalDiv>

      </CartDivHide>


</OrderDivHide>}

         <InputDiv>
         <TextBox>Contact</TextBox>
         <OutlinedInput onChange={handleEmail} placeholder='Email'/>
         <TextBox>Email me with news and offers</TextBox>
         <TextBox>Shipping address</TextBox>
         <OutlinedInput onChange={handleCountry} placeholder='Country/Region'/>
         <FirstBox>
         <OutlinedInput onChange={handleFirts} placeholder='First name' />
         <OutlinedInput onChange={handleLast} placeholder='Last name' />

         </FirstBox>
         
         <OutlinedInput onChange={handleAppartment} placeholder='Address'/>
         <OutlinedInput onChange={handleAddress} placeholder='Appartment,suit,etc'/>
         <FirstBox>
         <OutlinedInput placeholder='City'/>
         <OutlinedInput placeholder='State'/>
         <OutlinedInput placeholder='PIN code'/>
         </FirstBox>

         <OutlinedInput placeholder="Phone"/>
         <TextBox>Save this information for next time</TextBox>
         <BottomBox>
          <TextBox sx={{cursor:"pointer"}} onClick={handleReturn}>{"<"}Return to cart</TextBox>
         <Button onClick={handleClick} sx={{width:"30%",position:"static",cursor:"pointer",height:50,color:"white",background:"black",":hover":{color:"white",background:"black"}}}>Continue to Shoping</Button>
         </BottomBox>
         
         </InputDiv>



      </InnerContainer>

      <CartDiv>

        {cartData.map((item)=>(
          <MapData>
           <ImageDiv>
            
            <ImageBox as={"img"} src={item.images[0]}/>
            {item.quant}
            </ImageDiv>
          
            <TextBox sx={{width:"40%",}}>{item.name}</TextBox>
            <TextBox>₹{item.price}.00</TextBox>
          
          </MapData>
        ))}

        <CoupenDiv>
          <OutlinedInput sx={{width:"80%"}} placeholder='Discount code'/>
          <Button>Apply</Button>
        </CoupenDiv>

       <TotalDiv>
        <TextBox>Sub Total :</TextBox>
        <TextBox>₹{total}.00</TextBox>
       </TotalDiv>

      </CartDiv>




    </OuterContainer>
  )
}

export default Info
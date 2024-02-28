import { CheckBox } from '@mui/icons-material';
import { Box, Button, OutlinedInput, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart, getCart, getData, getInfo, postCart, postInfo } from '../Redux/data/action';
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

//   border:"2px solid yellow",
  width:"80%",
  display:"flex",
  justifyContent:"center",
  flexDirection:"column",
  gap:20,
  padding:20,
  alignContent:"left",
  paddingLeft:60,

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

const DataDiv = styled(Box)(({ theme }) => ({
//    border:"2px solid red",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }))
  const InfoMap = styled(Box)(({ theme }) => ({
    border:"1px solid black",
    width:"100%",
    borderRadius:10,
    padding:5,
   
     [theme.breakpoints.down("xl")]: {},
     [theme.breakpoints.down("lg")]: {},
     [theme.breakpoints.down("md")]: {},
     [theme.breakpoints.down("sm")]: {},
     [theme.breakpoints.down("xs")]: {},
   }))
   const Wrapper = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    display:"flex",
    justifyContent:"space-between",
   
     [theme.breakpoints.down("xl")]: {},
     [theme.breakpoints.down("lg")]: {},
     [theme.breakpoints.down("md")]: {},
     [theme.breakpoints.down("sm")]: {},
     [theme.breakpoints.down("xs")]: {},
   }))
  const InnerBox = styled(Box)(({ theme }) => ({
    // border:"2px solid green",
    display:"flex",
    justifyContent:"space-between",
    background:"#F0F0F0",
    borderRadius:5,
    alignItems:"center",
    
   
     [theme.breakpoints.down("xl")]: {},
     [theme.breakpoints.down("lg")]: {},
     [theme.breakpoints.down("md")]: {},
     [theme.breakpoints.down("sm")]: {},
     [theme.breakpoints.down("xs")]: {},
   }))
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

function Payment() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const cartData=useSelector((store)=>store.data.getCartData)
  const [show,setShow]=useState(false)
  const info=useSelector((store)=>store.data.getInfoData)

  console.log("infoo",info)


  useEffect(()=>{
    dispatch(getInfo())
  },[])


  const handleReturn=()=>{
    navigate('/cart')
  }

  const handleShow=()=>{
    setShow(true)
  }
  const handleHideShow=()=>{
    setShow(false)
  }

  const cartIds = cartData.map((item) =>{return item.id} );

  console.log("cartiDDDDDDDDDDD",cartIds)

  // const handleClick= async()=>{
  //   try{
  //    const res=await dispatch(deleteCart(cartIds))
  //    const delete=res.
  //   }
  //   catch{
  //     console.log(console.error();)
  //   }
  // }


const handleClick = async (cartData) => {
    try {
        // Extracting item ids from cartData
        const cartIds = cartData.map((item) =>{return item.id} );

        // Dispatching deleteCart action for each item id
        for (let id of cartIds) {
            // Assuming deleteCart action creator deletes an item with the given id
            await dispatch(deleteCart(id));
            console.log(`Item ${id} deleted successfully.`);
        }
    } catch (err) {
        console.error("Error deleting items:", err);
    }
};



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
         
         <DataDiv sx={{display:"flex",justifyContent:"center"}}>
            {info.map((item)=>(
                <InfoMap>
                    <Wrapper>
                        <TextBox sx={{color:"grey"}}>Contact</TextBox>
                <TextBox >{item.firstName}</TextBox>
                <TextBox sx={{textDecoration:"underline",fontSize:10}}>Change</TextBox>
                </Wrapper><hr></hr>
                <Wrapper>
                <TextBox sx={{color:"grey"}}>Ship to</TextBox>
                <TextBox>{item.address}</TextBox>
                <TextBox sx={{textDecoration:"underline",fontSize:10}} >Change</TextBox>
                </Wrapper>
                </InfoMap>
            ))}

         </DataDiv>

         <DataDiv sx={{paddingTop:3,}}>
         <TextBox sx={{fontSize:17}}>Shipping method</TextBox>
            <InnerBox sx={{height:50,}}>
            <TextBox sx={{padding:1}}>Pay online</TextBox>
            <TextBox sx={{padding:1}}>Free</TextBox>
            </InnerBox>
         </DataDiv>

         <BottomBox>
          <TextBox sx={{cursor:"pointer"}} onClick={handleReturn}>{"<"}Return to Info</TextBox>
         <Button onClick={handleClick} sx={{width:"30%",position:"static",cursor:"pointer",height:50,color:"white",background:"black",":hover":{color:"white",background:"black"}}}>Place Order</Button>
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

export default Payment
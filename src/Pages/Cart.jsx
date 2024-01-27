import { Box, Button, Input, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCart, patchCart } from '../Redux/data/action';
import { InputOutlined } from '@mui/icons-material';


const OuterDiv = styled(Box)(({ theme }) => ({

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const InnerDiv = styled(Box)(({ theme }) => ({
    // border:'2px solid red',
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const BottomDiv = styled(Box)(({ theme }) => ({
    // border:'2px solid red',
    paddingBottom:100,
    paddingTop:50,
  
  
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
  const ItemBox = styled(Box)(({ theme }) => ({

    // border:'2px solid green',
    display:'flex',
    
    justifyContent:"center",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ImageBox = styled(Box)(({ theme }) => ({
    width:"20%",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TitleText = styled(Typography)(({ theme }) => ({
    
    display:"flex",
    justifyContent:"right",
    // border:'2px solid red',
    width:"80%",
    gap:100,


    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const MapText = styled(Typography)(({ theme }) => ({


    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const Wrap = styled(Box)(({ theme }) => ({

    display:"flex",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TotalDiv = styled(Box)(({ theme }) => ({

    // border:"2px solid red",
    display:"flex",
    gap:100,


    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const MapData = styled(Box)(({ theme }) => ({
    // border:'2px solid yellow',
    display:"flex",
    width:"80%",
    justifyContent:"space-between",
    alignItems:"center",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));


  const Wrapper = styled(Box)(({ theme }) => ({
    // border:'2px solid yellow',
    display:"flex",
    width:"80%",

    

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

function Cart() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const cartData=useSelector((store)=>store.data.getCartData)
 

    console.log("catData",cartData)

    let total=cartData?.reduce((acc,item,index)=>{
        return acc+item.price*item.quant
    },0)

    const handleAdd=(id,quant)=>{
        let data={
            quant:quant+1 
        }      
        dispatch(patchCart(id,data))
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
   
    

    useEffect(()=>{
       dispatch(getCart())
    },[])
  return (
    <OuterDiv>

        <InnerDiv>
            <TextBox sx={{fontSize:33,fontWeight:600,paddingTop:5,}}>Cart</TextBox>
            <TextBox sx={{fontSize:15}}>Continue shopping</TextBox>
<TitleText>

<TextBox>Quantity</TextBox>
<TextBox>Total</TextBox>


</TitleText>

<Wrapper>
            <ItemBox>
                {cartData.map((item)=>(
                    <MapData>
                    <ImageBox as={"img"} src={item.images[0]}/>
                    
               </MapData>
                ))}


 {cartData.map((item)=>(
                    <MapData>
                  
                    <MapText>{item.name}</MapText>
                    <Wrap>
                    <Button onClick={()=>handleAdd(item.id,item.quant)}>+</Button>
                    <TextBox>{item.quant}</TextBox> 
                   
                    <Button onClick={()=>handleReduce(item.id,item.quant)}>-</Button>
                    </Wrap>
                    <MapText>{item.price}</MapText>
               </MapData>
                ))}

                
            </ItemBox>
</Wrapper>


<BottomDiv>

<TotalDiv>
<TextBox sx={{fontWeight:600}}>SUBTOTAL</TextBox>
<TextBox>₹ {total}</TextBox>
</TotalDiv>
<TextBox sx={{fontSize:8,color:'grey'}}>Shipping, taxes, and discount codes calculated at checkout</TextBox>
<Button sx={{color:"white",background:"black",width:300,borderRadius:0,":hover":{color:"white",background:"black"}}}>CHECK OUT</Button>

</BottomDiv>
        </InnerDiv>


    </OuterDiv>
  )
}

export default Cart
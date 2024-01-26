import { Box, Typography, styled } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCart } from '../Redux/data/action';


const OuterDiv = styled(Box)(({ theme }) => ({

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const InnerDiv = styled(Box)(({ theme }) => ({
    // border:'2px solid red',

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
    width:"90%",
    gap:160,


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

function Cart() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const cartData=useSelector((store)=>store.data.getCartData)

    console.log("catData",cartData)

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
            <ItemBox>
                {cartData.map((item)=>(
                    <MapData>
                    <ImageBox as={"img"} src={item.images[0]}/>
                    <MapText sx={{textAlign:"left"}}>{item.name}</MapText>
                    <MapText>{item.quant}</MapText>
                    <MapText>{item.price}</MapText>
               </MapData>
                ))}

                
            </ItemBox>

        </InnerDiv>


    </OuterDiv>
  )
}

export default Cart
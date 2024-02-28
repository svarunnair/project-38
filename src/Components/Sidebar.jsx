import { Box, Button, Typography, styled } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../Redux/data/action';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router-dom';

const OuterContainer = styled(Box)(({ theme }) => ({
    // border:"2px solid black",
display:"flex",
justifyContent:"right",



  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const InnerContainer = styled(Box)(({ theme }) => ({
    // border:"2px solid red",

width:"35%",
height:"100vh",
position:"absolute",

background:"white",
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
  const WrapperOne = styled(Box)(({ theme }) => ({

    // border:"2px solid blue",
 display:"flex",
 justifyContent:"space-between",
 gap:200,
 paddingBottom:20,
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const ButtonWrapper = styled(Typography)(({ theme }) => ({
    // border:"2px solid red",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    paddingTop:130,
    alignItems:"center",
    
    
 
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const Wrapper = styled(Box)(({ theme }) => ({
    display:"flex",
    justifyContent:'space-between',
    // border:"2px solid blue",
    padding:20,
 
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const DataDiv = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
 
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const MapData = styled(Box)(({ theme }) => ({
    // border:"2px solid green",
    display:"flex",
 
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const ImageBox = styled(Box)(({ theme }) => ({

    width:"25%",
 
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const WrapperMap = styled(Box)(({ theme }) => ({

    display:'grid',
    justifyItems:'right',
 
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
function Sidebar() {
    const dispatch=useDispatch()
    const cartData=useSelector((store)=>store.data.getCartData)
    const navigate=useNavigate()


    console.log("Cartttttt",cartData)

    const total=cartData.reduce((acc,item,index)=>{
        return acc+item.price*item.quant
    },0)
    
    const handleClick=()=>{
        navigate('/cart')
    }
    

    useEffect(()=>{
      dispatch(getCart())
    },[])
  return (
    <OuterContainer>
<InnerContainer>
    <Wrapper>
    <TextBox sx={{fontSize:20,fontWeight:600,}}>Cart</TextBox>
    <ClearIcon/>
    </Wrapper>

    <hr></hr>

    <DataDiv>

        {cartData.map((item)=>(
            <MapData>

                <ImageBox as={"img"} src={item.images[0]}/>
                <WrapperMap>
                <TextBox>{item.name}</TextBox>
                <TextBox>₹ {item.price}.00</TextBox>
                </WrapperMap>
            
            </MapData>
        ))}

    </DataDiv>
    
    <hr></hr>
<ButtonWrapper>

<WrapperOne>
<TextBox>SUBTOTAL</TextBox>
<TextBox>₹{total}</TextBox>

</WrapperOne>
    
    <Button onClick={handleClick} sx={{borderRadius:0,width:"80%",color:'white',background:"black",":hover":{color:'white',background:"black"}}}>Check Out</Button>
    </ButtonWrapper>
</InnerContainer>



    </OuterContainer>
  )
}

export default Sidebar
import { Box, Button, Typography, styled } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../Redux/data/action';

const OuterContainer = styled(Box)(({ theme }) => ({
    // border:"2px solid black",

   
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const InnerDiv = styled(Box)(({ theme }) => ({
    // border:"2px solid black",
    display:"flex",
    justifyContent:"right",
    paddingTop:100,
    paddingBottom:100,
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const DataBox = styled(Box)(({ theme }) => ({
    // border:"2px solid green",
    width:"77%",
    display:"grid",
    gridTemplateColumns:'repeat(3,1fr)',
    gap:15,

  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const DataMap = styled(Box)(({ theme }) => ({
    // border:"2px solid green",
    background:"#DEDEDE",
    padding:10,
    borderRadius:20,

    
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ImageBox = styled(Box)(({ theme }) => ({
    // border:"2px solid blue",
    width:'100%',

    
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextBox = styled(Typography)(({ theme }) => ({
    // border:"2px solid green",
    
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const ButtonMenu = styled(Box)(({ theme }) => ({
    background:"#0373bc",
    color:"white",
    ":hover":{
      background:"#0373bc",
    color:"white",
    },
    textAlign:"left",
    padding:15,
    borderRadius:10,
    
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const MenuBox = styled(Box)(({ theme }) => ({
    // border:"2px solid green",
    display:"flex",
    flexDirection:"column",
    width:"20%",
    position:"fixed", 
    gap:15,
    paddingTop:40,
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));


function Marvel() {
    const mainData=useSelector((store)=>store.data.getMainData)
    const dispatch=useDispatch()


    console.log("mainData",mainData)

    useEffect(()=>{
       dispatch(getData())
    },[])

  return (
    <OuterContainer>
      <MenuBox>
        <ButtonMenu>TYPE</ButtonMenu>
        <ButtonMenu>CATEGORY</ButtonMenu>
        <ButtonMenu>COLOUR</ButtonMenu>
        <ButtonMenu>AGE GROUP</ButtonMenu>
        <ButtonMenu>COLLECTION</ButtonMenu>
        <ButtonMenu>PRICE</ButtonMenu>
        </MenuBox>


        <InnerDiv>

<DataBox>
    {mainData?.map((item)=>(
        <DataMap >

            <ImageBox as={"img"} src={item.images[0]}/>
            <TextBox>{item.name}</TextBox>
            <TextBox>₹{item.price}.00</TextBox>
        
        </DataMap>
    ))}


</DataBox>



        </InnerDiv>


    </OuterContainer>
  )
}

export default Marvel
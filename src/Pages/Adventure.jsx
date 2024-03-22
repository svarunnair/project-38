import { Box, Button, Grid, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../Redux/data/action';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useNavigate } from 'react-router-dom';

const OuterContainer = styled(Box)(({ theme }) => ({
    // border:"2px solid black",
display:"flex",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const InnerDiv = styled(Box)(({ theme }) => ({
    // border:"2px solid black",
    display:"grid",
    cursor:'pointer',
    gridTemplateColumns:"repeat(3,1fr)",
    justifyContent:"right",
    paddingTop:100,
    paddingBottom:100,
    padding:10,
    gap:20,
   
  
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
    background:"#F5F5F5	",
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
    width:"100%",
   
    gap:15,
    paddingTop:40,
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      display:"none"
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const Wrapper = styled(Box)(({ theme }) => ({
    // border:"2px solid green",
    position:"sticky",
    top:180,
    display:"grid",
    gap:10,
    padding:20,

   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));


function Adventure() {
    const mainData=useSelector((store)=>store.data.getMainData)
    const token = localStorage.getItem("token")
    const loading=useSelector((store)=>store.data.isLoading)
    const dispatch=useDispatch()
    const navigate=useNavigate()
   
    console.log("loading",loading)

    console.log("mainData",mainData)

    const handleProduct=(id)=>{
      navigate(`/detail/${id}`)
    }

    useEffect(()=>{
       dispatch(getData(token))
    },[])

    

   

  return (

<>
    {loading?<RefreshIcon/>:<OuterContainer>

      <MenuBox>
        <Wrapper>
        <ButtonMenu>TYPE</ButtonMenu>
        <ButtonMenu>CATEGORY</ButtonMenu>
        <ButtonMenu>COLOUR</ButtonMenu>
        <ButtonMenu>AGE GROUP</ButtonMenu>
        <ButtonMenu>COLLECTION</ButtonMenu>
        <ButtonMenu>PRICE</ButtonMenu>
        </Wrapper>
        </MenuBox>


        <InnerDiv>
    
    {mainData?.map((item)=>(
        <DataMap >

            <ImageBox onClick={()=>handleProduct(item.id)} as={"img"} src={item.images[2]}/>
            <TextBox>{item.name}</TextBox>
            <TextBox>₹{item.price}.00</TextBox>
        
        </DataMap>
    ))}
  

        </InnerDiv>


    </OuterContainer>}
    </>
  )
}

export default Adventure
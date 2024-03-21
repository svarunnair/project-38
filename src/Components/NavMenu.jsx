import { Box, Typography, styled } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const OuterContainer = styled(Box)(({ theme }) => ({

    // border:"2px solid red",
    padding:30,
    // position:"absolute",
    background:"white",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const InnerContainer = styled(Box)(({ theme }) => ({

    // border:"2px solid green",
    display:"flex",
    padding:30,
    
    justifyContent:"center",
    justifyContent:"space-between",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const FirstBox = styled(Box)(({ theme }) => ({

    // border:"2px solid blue",
    textAlign:"left",
    display:"flex",
    flexDirection:"column",
    gap:'10px',
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const ImageBox = styled(Box)(({ theme }) => ({

    // border:"2px solid blue",
    width:"20%",
  

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const TextBox = styled(Typography)(({ theme }) => ({

    cursor:"pointer",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));


function NavMenu() {
  const navigate=useNavigate()
  const token=localStorage.getItem("token")

  const handleMarvel=()=>{
    if(token){
      navigate('/marvel')
      window.location.reload()
    }
    else{
      alert("Please login")
    }
    
  }
  const handleFifa=()=>{
    if(token){
      navigate('/fifa')
      window.location.reload()
    }
    else{
      alert("Please login")
    }
  }
  const handleStudent=()=>{
    if(token){
      navigate('/students')
      window.location.reload()
    }
    else{
      alert("Please login")
    }
  }
  return (
    <OuterContainer>

        <InnerContainer>
            
            <FirstBox>
                <TextBox  sx={{fontSize:15,fontWeight:600}}>Type</TextBox>
                <TextBox>Hard lagauge</TextBox>
                <TextBox>Soft lagauge</TextBox>
               
            </FirstBox>
            <FirstBox>
                <TextBox  sx={{fontSize:15,fontWeight:600}}>Size</TextBox>
                <TextBox>Cabin</TextBox>
                <TextBox>Medium</TextBox>
                <TextBox>Large</TextBox>
               
            </FirstBox>
            <FirstBox>
                <TextBox  sx={{fontSize:15,fontWeight:600}}>Feature</TextBox>
                <TextBox>TSA Lock</TextBox>
                <TextBox>Anti-Thief</TextBox>
                <TextBox>Dual-Wheel</TextBox>
               
            </FirstBox>
            <FirstBox>
                <TextBox sx={{fontSize:15,fontWeight:600}}>Collection</TextBox>
                <TextBox onClick={handleFifa}>Fifa</TextBox>
                <TextBox onClick={handleMarvel}>Marvel</TextBox>
                <TextBox onClick={handleStudent}>Students</TextBox>
               
               
            </FirstBox>

            <ImageBox as={"img"} src="https://skybags.co.in/cdn/shop/files/ABSTRACT-A_540x.jpg?v=1676525095"/>
            <ImageBox as={"img"} src="https://skybags.co.in/cdn/shop/files/Banner_03_540x.jpg?v=1676525095"/>


        </InnerContainer>



    </OuterContainer>
  )
}

export default NavMenu
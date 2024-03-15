import { Box, Typography, styled } from '@mui/material';
import React, { useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import { useHref } from 'react-router-dom';
const OuterContainer = styled(Box)(({ theme }) => ({

    // border:"2px solid black",
    

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const InnerDiv = styled(Box)(({ theme }) => ({
    // 
    // border:"2px solid red",
    display:"grid",
    gridTemplateColumns:"repeat(5,1fr)",
    padding:8,
    gap:20,

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
        display:"flex",
        flexDirection:'column',
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const BoxOne = styled(Box)(({ theme }) => ({
    
    // border:"2px solid green",
    display:"flex",
    flexDirection:"column",
    padding:20,
    gap:10,

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextBox = styled(Typography)(({ theme }) => ({
    
    textAlign:"left",
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const TextShow = styled(Typography)(({ theme }) => ({
    
    textAlign:"left",
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    // border:'2px solid red',
    display:"flex",
    gap:15,
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const DetailBox = styled(Box)(({ theme }) => ({
    // border:'2px solid yellow',
    background:"#F0F0F0",
    padding:30,
    display:"flex",
    flexDirection:"column",
    gap:20,

   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const DivBox = styled(Box)(({ theme }) => ({
    // border:'2px solid yellow',
    paddingLeft:20,
    paddingTop:10,
    paddingBottom:30,
    
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const BottomDiv = styled(Box)(({ theme }) => ({
    // border:'2px solid blue',
    background:"#0373bc",
    height:80,
    display:'flex',
   
   justifyContent:"center",
    alignItems:'center',
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

function Footer() {
    const [about,setAbout]=useState(false)
    const [choose,setChoose]=useState(false)

    const handleYoutube=()=>{
      window.location.href = "https://www.youtube.com/channel/UCas7FFmlVSSExrUsMVvhMrw"
    }
    const handleFb=()=>{
      window.location.href = "https://www.facebook.com/Skybags/"
    }

    const handleInsta=()=>{
      window.location.href = "https://www.instagram.com/inskybags/"
    }

    const handleAbout=()=>{
        if(about===false){
            setAbout(true)
        }
        if(about===true){
            setAbout(false)
        }
    }
    const handleChoose=()=>{
        if(choose===false){
            setChoose(true)
        }
        if(choose===true){
            setChoose(false)
        }
    }

    
  return (
    <OuterContainer>

        <InnerDiv>

            <BoxOne>
                <TextBox sx={{fontWeight:600,paddingBottom:2}}>CATEGORIES</TextBox>
                <TextBox>Backpack</TextBox>
                <TextBox>Duffle</TextBox>
                <TextBox>Luggage</TextBox>
            </BoxOne>
            <BoxOne>
            <TextBox sx={{fontWeight:600,paddingBottom:2}}>OTHER LINKS</TextBox>
                <TextBox>About Us</TextBox>
                <TextBox>Store Locator</TextBox>
                <TextBox>Contact Us</TextBox>
                <TextBox>FAQ </TextBox>
            </BoxOne>
            <BoxOne>
            <TextBox sx={{fontWeight:600,paddingBottom:2}}>POLICIES</TextBox>
                <TextBox>Privacy Policy</TextBox>
                <TextBox>Cancellation, Return & Refund Policy</TextBox>
                <TextBox>Return & Exchange</TextBox>
                <TextBox>Terms of offers/promotions</TextBox>
                <TextBox>Warranty Terms and Conditions</TextBox>
            </BoxOne>

            <BoxOne>
            <TextBox sx={{fontWeight:600,paddingBottom:2}}>SUPPORT</TextBox>
                <TextBox>Enquiry</TextBox>
                <TextBox>Register Product</TextBox>
                <TextBox>Product Utility</TextBox>
               
            </BoxOne>

            <BoxOne >
            <TextBox sx={{fontWeight:600,paddingBottom:2}}>ADDRESS</TextBox>
                <TextBox>VIP INDUSTRIES LTD</TextBox>
                <TextBox>DGP House, 5th Floor, 88C, Old Prabhadevi Road, Mumbai - 400025</TextBox>
                <TextBox>Phone: 022-41724444</TextBox>
                <TextBox>Mail: talk2me@skybags.com</TextBox>
                <TextBox>(Monday To Sunday, 8.00 AM To 8 PM)</TextBox>
            </BoxOne>
            

        </InnerDiv>

<DivBox>
<TextBox sx={{fontWeight:600}}>Find us on</TextBox>
<IconBox>
<FacebookIcon  onClick={handleFb} sx={{color:"#0373bc",cursor:"pointer",fontSize:30,}}/>
<InstagramIcon onClick={handleInsta} sx={{color:"#0373bc",cursor:"pointer",fontSize:30,}}/>
<YouTubeIcon onClick={handleYoutube} sx={{color:"#0373bc",cursor:"pointer",fontSize:30,}}/>
<XIcon sx={{color:"#0373bc",cursor:"pointer",fontSize:30,}}/>

</IconBox>
</DivBox>

<DetailBox>

    {about?<TextBox onClick={handleAbout} sx={{fontWeight:600,paddingLeft:2,cursor:"pointer",}}>- About Us</TextBox>:<TextBox onClick={handleAbout} sx={{fontWeight:600,paddingLeft:2,cursor:"pointer",}}>+ About Us</TextBox>}
    {about&&<TextShow>Skybags is the first choice for millions of Indians who like to make a fashion statement wherever they go. We offer quality travel and lifestyle accessories tailored for the young, adventurous, and trendy people who want to go the extra mile. Our collection includes trolleys, backpacks, laptop bags, and more – all designed to elevate your style like never before. All of this is with the legacy of VIP Industries, the market leader for over 50 Years.</TextShow>}

    {choose?<TextBox onClick={handleChoose} sx={{fontWeight:600,paddingLeft:2,cursor:"pointer"}}>- Why Choosse Us ?</TextBox>:<TextBox onClick={handleChoose} sx={{fontWeight:600,paddingLeft:2,cursor:"pointer"}}>+ Why Choosse Us ?</TextBox>}
    {choose&&<TextShow>At Skybags, we are your first choice for fashion-forward travel and lifestyle accessories. Our products are tailored for the young, adventurous, and trendy individuals who want to make a statement wherever they go. Behind The Stylish Aesthetics, Lies Over Four Decades Of Design And Engineering Innovation, Resulting In Durable and Reliable Products made from the superior materials. </TextShow>}


</DetailBox>

<BottomDiv>
    <TextBox sx={{color:"white"}}>© 2024 Skybags. All Rights Reserved.</TextBox>
</BottomDiv>



    </OuterContainer>
  )
}

export default Footer
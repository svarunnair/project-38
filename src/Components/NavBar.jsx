import { Box, Typography, styled } from '@mui/material';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const OuterContainer = styled(Box)(({ theme }) => ({

    // border:"2px solid black",
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const InnerDiv = styled(Box)(({ theme }) => ({

    // border:"2px solid red",
    display:"flex",
    background:"#0373bc",
    height:100,
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const BoxOne = styled(Box)(({ theme }) => ({

    // border:"2px solid red",
    width:"12%",
    display:"flex",
    justifyContent:"center",
    alignItems:'center',
    gap:20,
    
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const BoxTwo = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    width:"28%",
    display:"flex",
    justifyContent:"right",
    alignItems:'center',
    gap:23,
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
        display:"none"
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const BoxThree = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    width:"20%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {
        
    },
    [theme.breakpoints.down("md")]: {
        width:"60%",
        paddingLeft:10,
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const IconBox = styled(Box)(({ theme }) => ({
   width:"50%",
   cursor:"pointer",
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const BoxFour = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    width:"20%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    gap:10,
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
        display:"none"
    },
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const FirstBox = styled(Box)(({ theme }) => ({
    // border:"2px solid green",
    display:"flex",
    justifyContent:"center",
    gap:10,

    
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const SubBox = styled(Typography)(({ theme }) => ({
    // border:"2px solid green",
    display:"flex",
    color:"white",
    fontSize:18,
    cursor:"pointer",
    
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const SecondBox = styled(Typography)(({ theme }) => ({
    // border:"2px solid green",
    color:"white",
    fontSize:18,
    cursor:"pointer",
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const BoxFive = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    width:"20%",
    display:"flex",
    justifyContent:"center",
    alignItems:'center',
    gap:20,
    
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const TextBox = styled(Typography)(({ theme }) => ({
    color:'white',
    fontSize:18,
    cursor:"pointer",
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

function NavBar() {
  return (
    <OuterContainer>
        <InnerDiv>
           <BoxOne>
           <SearchIcon sx={{color:"white",fontSize:28,cursor:"pointer"}}/>
           <LocationOnOutlinedIcon sx={{color:"white",fontSize:28,cursor:"pointer"}}/>
           </BoxOne>

           <BoxTwo>
            <TextBox>What's New </TextBox>
            <TextBox>Luggage <ArrowDropDownIcon/></TextBox>
           </BoxTwo>

           <BoxThree>
            <IconBox  as={"img"} src="https://skybags.co.in/cdn/shop/files/Image_1_0c0dbe99-a20b-4621-a8cf-54854a033dbd_140x.svg?v=1695290322"/>
           </BoxThree>

           <BoxFour>
            <FirstBox>
                <SubBox>Backpack<ArrowDropDownIcon/></SubBox>
                <SubBox>Duffles<ArrowDropDownIcon/></SubBox>

            </FirstBox>
            <SecondBox>Student Travel</SecondBox>
           </BoxFour>

           <BoxFive><PermIdentityOutlinedIcon sx={{color:'white',fontSize:35,  cursor:"pointer",}}/>
           <ShoppingCartOutlinedIcon sx={{color:'white',fontSize:35,  cursor:"pointer",}}/>
           </BoxFive>

        </InnerDiv>

    </OuterContainer>
  )
}

export default NavBar
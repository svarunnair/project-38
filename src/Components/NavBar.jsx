import { Box, Input, Typography, styled } from '@mui/material';
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

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
    // background:"rgba(255, 255, 255, 0.5)",
    // position:"absolute",

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

  const SearchBox = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    display:"flex",
    justifyContent:"space-between",
    height:"100%",
    alignItems:'center',
    width:"80%",

    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const InnerContainer = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    display:"flex",
    
    justifyContent:"center",
    
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const InputBox = styled(Box)(({ theme }) => ({
    // border:"2px solid red",
    display:"flex",
    width:"40%",
    padding:20,
   
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  

function NavBar() {
    const navigate=useNavigate()
    const [show,setShow]=useState(false)

    const handleAcc=()=>{
      navigate('/signin')
    }

const handleCart=()=>{
  navigate('/cart')
}

const handleSearch=()=>{
    setShow(true)
}

    const handleIcon=()=>{
        navigate('/home')
    }

    const handleClose=()=>{
      setShow(false)
    }

    // let show = sessionStorage.getItem("show")

console.log("show",show)

  return (
   <>

     { show===true ? <InnerContainer>
     
     <SearchBox>

      
      <InputBox>
      <SearchIcon/>
     <Input placeholder='Search our store'/>
      </InputBox>
    
     <CloseIcon onClick={handleClose}/>

     
     
     </SearchBox>

     </InnerContainer>
     
     
     :  <OuterContainer>
        <InnerDiv>
           <BoxOne>
           <SearchIcon onClick={handleSearch} sx={{color:"white",fontSize:28,cursor:"pointer"}}/>
           <LocationOnOutlinedIcon sx={{color:"white",fontSize:28,cursor:"pointer"}}/>
           </BoxOne>

           <BoxTwo>
            <TextBox>What's New </TextBox>
            <TextBox>Luggage <ArrowDropDownIcon/></TextBox>
           </BoxTwo>

           <BoxThree>
            <IconBox onClick={handleIcon}  as={"img"} src="https://skybags.co.in/cdn/shop/files/Image_1_0c0dbe99-a20b-4621-a8cf-54854a033dbd_140x.svg?v=1695290322"/>
           </BoxThree>

           <BoxFour>
            <FirstBox>
                <SubBox>Backpack<ArrowDropDownIcon/></SubBox>
                <SubBox>Duffles<ArrowDropDownIcon/></SubBox>

            </FirstBox>
            <SecondBox>Student Travel</SecondBox>
           </BoxFour>

           <BoxFive><PermIdentityOutlinedIcon onClick={handleAcc} sx={{color:'white',fontSize:35,  cursor:"pointer",}}/>
           <ShoppingCartOutlinedIcon onClick={handleCart} sx={{color:'white',fontSize:35,  cursor:"pointer",}}/>
           </BoxFive>

        </InnerDiv>

    </OuterContainer>}

    </>
  )
}

export default NavBar
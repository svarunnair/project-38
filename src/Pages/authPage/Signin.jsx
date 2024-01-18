import { InputOutlined } from '@mui/icons-material';
import { Box, Button, OutlinedInput, Typography, styled } from '@mui/material';
import React from 'react'

const OuterContainer = styled(Box)(({ theme }) => ({

    // border:"2px solid black",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",


    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const InnerDiv = styled(Box)(({ theme }) => ({

    // border:"2px solid red",
    width:"30%",


    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const InputDiv = styled(Box)(({ theme }) => ({

    // border:"2px solid yellow",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TitleBox = styled(Typography)(({ theme }) => ({
    padding:50,
    fontWeight:900,
    fontSize:25,

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextBox = styled(Typography)(({ theme }) => ({
//   border:"2px solid red",
  paddingTop:80,
  display:"flex",
  cursor:"pointer",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const InputText = styled(Typography)(({ theme }) => ({
display:"flex",
cursor:"pointer",


    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const DivBox = styled(Typography)(({ theme }) => ({
    display:"flex",
   
    gap:277,
    
    
        [theme.breakpoints.down("xl")]: {},
        [theme.breakpoints.down("lg")]: {},
        [theme.breakpoints.down("md")]: {},
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.down("xs")]: {},
      }));
  const ButtonBox = styled(Button)(({ theme }) => ({
    display:"flex",
    top:30,
    cursor:"pointer",
        [theme.breakpoints.down("xl")]: {},
        [theme.breakpoints.down("lg")]: {},
        [theme.breakpoints.down("md")]: {},
        [theme.breakpoints.down("sm")]: {},
        [theme.breakpoints.down("xs")]: {},
      }));

function Signin() {
  return (
    <OuterContainer>

        <InnerDiv>

            

            <TitleBox>Login</TitleBox>

            <InputDiv>
            <InputText sx={{paddingBottom:1,fontSize:10,fontWeight:600,}}>EMAIL</InputText>
            <OutlinedInput sx={{width:"100%",height:35,borderRadius:0}}/>
           <DivBox>
            <InputText sx={{paddingTop:2,fontSize:10,fontWeight:600,}}>PASSWORD</InputText>
            <InputText sx={{paddingTop:2,justifyContent:'right',fontSize:12}}>Forgot ?</InputText>
            </DivBox>
            <OutlinedInput sx={{width:"100%",height:35,borderRadius:0}}/>

            <ButtonBox sx={{color:'white',background:"black",width:"100%",borderRadius:0,":hover":{color:'white',background:"black"}}}>Sign in</ButtonBox>
            <TextBox>Create Account</TextBox>
            </InputDiv>
        </InnerDiv>

    </OuterContainer>
  )
}

export default Signin
import { Box, OutlinedInput, Typography, styled } from '@mui/material';
import React from 'react'


const OuterContainer = styled(Box)(({ theme }) => ({


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const InnerContainer = styled(Box)(({ theme }) => ({

  border:"2px solid red",
  width:"60%",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const CartDiv = styled(Box)(({ theme }) => ({

  border:"2px solid green",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InputDiv = styled(Box)(({ theme }) => ({

  border:"2px solid yellow",

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
const IconDiv = styled(Box)(({ theme }) => ({

  width:"15%",
  padding:60,
  display:"flex",
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

function Info() {
  return (
    <OuterContainer>

      <InnerContainer>

        <IconDiv as={"img"} src="https://cdn.shopify.com/s/files/1/0696/1011/1257/files/Skybags_Logo._120x_5d2632d5-f10c-4723-9362-94e066a323c8_x320.png?v=1677825186"/>

         <InputDiv>
         <TextBox>Contact</TextBox>
         <OutlinedInput placeholder='Email'/>
         
         </InputDiv>



      </InnerContainer>

      <CartDiv>

      </CartDiv>




    </OuterContainer>
  )
}

export default Info
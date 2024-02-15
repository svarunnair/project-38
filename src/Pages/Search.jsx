import { Box, styled } from '@mui/material';
import React from 'react'


const OuterContainer = styled(Box)(({ theme }) => ({
    // border:"2px solid black",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const InnerContainer = styled(Box)(({ theme }) => ({
    border:"2px solid black",

    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

function Search() {
  return (
    <OuterContainer>

        <InnerContainer>

        </InnerContainer>


    </OuterContainer>
  )
}

export default Search
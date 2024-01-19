import { Box, Button, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/data/action";

const OuterContainer = styled(Box)(({ theme }) => ({
  // border:"2px solid black",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const FirstBox = styled(Box)(({ theme }) => ({
//   border: "2px solid red",
  height: 40,
  background: "#f2f2f2",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const InnerDiv = styled(Box)(({ theme }) => ({
//   border: "2px solid blue",
  display: "flex",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const MenuBox = styled(Box)(({ theme }) => ({
//   border: "2px solid green",
  display: "flex",
  flexDirection: "column",
  gap: 10,
  paddingLeft: 35,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const DataMap = styled(Box)(({ theme }) => ({
      border: "2px solid green",
      
    
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    }));

const ItemDiv = styled(Box)(({ theme }) => ({
//   border: "2px solid black",

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImageBox = styled(Box)(({ theme }) => ({
    //   border: "2px solid black",
    
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    }));

const ButtonBox = styled(Box)(({ theme }) => ({
  // border:"2px solid black",
  borderRadius: 10,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const DetailBox = styled(Typography)(({ theme }) => ({
    // border:"2px solid black",
  
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));

function Students() {
  const mainData = useSelector((store) => store.data.getMainData);
  const dispatch = useDispatch();

  console.log("maiData", mainData);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <OuterContainer>
      <FirstBox></FirstBox>

      <InnerDiv>
        <MenuBox>
          <ButtonBox
            sx={{
              height: 50,
              padding: 1,
              width: 270,
              textAlign: "left",
              color: "white",
              background: "#0373bc",
              ":hover": { color: "white", background: "#0373bc" },
            }}
          >
            TYPE
          </ButtonBox>
          <ButtonBox
            sx={{
              height: 50,
              padding: 1,
              width: 270,
              textAlign: "left",
              color: "white",
              background: "#0373bc",
              ":hover": { color: "white", background: "#0373bc" },
            }}
          >
            CATEGORY
          </ButtonBox>
          <ButtonBox
            sx={{
              height: 50,
              padding: 1,
              width: 270,
              textAlign: "left",
              color: "white",
              background: "#0373bc",
              ":hover": { color: "white", background: "#0373bc" },
            }}
          >
            COLOR
          </ButtonBox>
          <ButtonBox
            sx={{
              height: 50,
              padding: 1,
              width: 270,
              textAlign: "left",
              color: "white",
              background: "#0373bc",
              ":hover": { color: "white", background: "#0373bc" },
            }}
          >
            AGE GROUP
          </ButtonBox>
          <ButtonBox
            sx={{
              height: 50,
              padding: 1,
              width: 270,
              textAlign: "left",
              color: "white",
              background: "#0373bc",
              ":hover": { color: "white", background: "#0373bc" },
            }}
          >
            PRICE
          </ButtonBox>
        </MenuBox>

        <ItemDiv>
    
    {mainData.map((item)=>(
        <DataMap>
            <ImageBox as={"img"} src={item.images[0]}/>
            <DetailBox>{item.name}</DetailBox>
        </DataMap>
    ))}
                   
        </ItemDiv>
      </InnerDiv>
    </OuterContainer>
  );
}

export default Students;

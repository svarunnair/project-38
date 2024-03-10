import { Box, Button, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/data/action";
import { useNavigate } from "react-router-dom";

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
  // border: "2px solid green",
  display: "flex",
  flexDirection: "column",
  gap: 10,
  paddingLeft: 35,
  paddingTop:30,
  
 
  

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const DataMap = styled(Box)(({ theme }) => ({
      // border: "2px solid green",
      background:"#F5F5F5	",
      borderRadius:20,
      cursor:"pointer",
      
    
      [theme.breakpoints.down("xl")]: {},
      [theme.breakpoints.down("lg")]: {},
      [theme.breakpoints.down("md")]: {},
      [theme.breakpoints.down("sm")]: {},
      [theme.breakpoints.down("xs")]: {},
    }));

const ItemDiv = styled(Box)(({ theme }) => ({
  // border: "2px solid black",
  display:"grid",
  gridTemplateColumns:"repeat(3,1fr)",
  padding:30,
  gap:10,


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const ImageBox = styled(Box)(({ theme }) => ({
    //   border: "2px solid black",
    width:"100%",
    
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
const Wrapper = styled(Box)(({ theme }) => ({
  // border:"2px solid black",
  display:"grid",
  gap:10,
  position:"sticky",
  top:180,
  
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

function Fifa() {
  // const mainData = useSelector((store) => store.data.getMainData);
  // const dispatch = useDispatch();
  // const navigate=useNavigate()


  const handleItem=(id)=>{
    navigate(`/detail/${id}`)
    sessionStorage.setItem("show", "one")
  }

  console.log("maiData", mainData);

  useEffect(() => {
    dispatch(getData());
  }, []);




  // useEffect(()=>{
  //   if(Object.keys(mainData).length>0){
  //     setData(mainData)
  //   }
  // },[mainData])

  return (
    <OuterContainer>
     

      <InnerDiv>
        <MenuBox>
          <Wrapper>
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
          </Wrapper>
        </MenuBox>


        <ItemDiv>
         {mainData?.map((item)=>(
          <DataMap>
          <ImageBox onClick={()=>handleItem(item.id)} as={"img"} src={item?.images[0]}/>
          <DetailBox>{item?.name}</DetailBox>
          <DetailBox>₹{item?.price}.00</DetailBox>
          </DataMap>
         ))}
   
           
        </ItemDiv>
        
      </InnerDiv>
    </OuterContainer>
  );
}

export default Fifa;
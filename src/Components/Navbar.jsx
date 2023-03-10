import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Flex, Image } from "@chakra-ui/react";


const Navbar = () => {


    const navigate = useNavigate();
  return (
<>
    <Flex bg="teal"
        color={"white"}
        align="center"
        justify="space-between"
        px={["1", "1", "7", "10"]}
        fontSize={["14px", "14px", "19px", "20px"]}
        py="4"
        >
        <Image
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Shopping_cart_icon.svg/1250px-Shopping_cart_icon.svg.png"
      w="3%"
      borderRadius={"full"}
      onClick={() => navigate("/")}
      cursor="pointer"
    />
        <Link to="/">Home Page</Link>
        <Link to="/puppy">Puppy</Link>
        <Link to="/search">Search Page</Link>

    </Flex>
        
    </>
  )
}

export default Navbar
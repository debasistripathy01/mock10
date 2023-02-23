import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import css from "./home.module.css"
import { Box } from '@chakra-ui/react';


const Home = () => {
    const [dogName, setDogNames] = useState([]);
    useEffect(() => {
        axios.get('https://dog.ceo/api/breeds/list/all')
          .then(response => {
            const breedNames = Object.keys(response.data.message);
            setDogNames(breedNames);


            // console.log(breedNames)
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
      console.log(dogName)
  return (
    <div>
        {dogName.map((el, index)=>(
            
        <div className={css.breed}>
            <Link to={`/puppy/${el}`}>
                <Box className={css.box}>
                    <h2 key={index}>{el}</h2>
                </Box>
            </Link>
          </div>
        ))}
    </div>
  )
}

export default Home
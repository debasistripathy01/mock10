import { Box } from '@chakra-ui/react'
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import css from "./home.module.css"

const Puppy = () => {
    // const { breed_name } = useParams();
  const [images, setImages] = useState([]);

  const location = useLocation()
  let breed_name = location.pathname.split("/")[2]


  const handleFetch=(breed_name)=>{

    axios.get(`https://dog.ceo/api/breed/${breed_name}/images`)
      .then(response => {
        setImages(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
}


  useEffect(() => {
    handleFetch(breed_name)
  }, [breed_name]);

console.log(images)
// useEffect(()=>{
//     handleFetch(breed_name);
// }, [])
  console.log("breed : ",breed_name)

  return (
    <Box className={css.puppy}>
        {images.map((el)=>(
            
            <div className={css.image}>
                
                    <Box >
                        <img src={el} alt={breed_name}/>
                    </Box>
              </div>
            ))}
    </Box>
  )
}

export default Puppy
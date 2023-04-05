import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from "../utils/fetchFromAPI"
import { Videos } from './'


const SearchFeed = () => {
  const { searchTerm} = useParams()
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetchData(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
    .catch((err) => console.log(err))
  }, [searchTerm])
  
  return (
      <Box p={2} sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2
      }}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{
          color: "#fff"
        }} >
          search Results for : <span style={{
            color: "#F31503"
          }}>{searchTerm}</span> Video
        </Typography>
        <Videos videos={videos} />
      </Box>
  )
}

export default SearchFeed
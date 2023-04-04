import React, { useEffect, useState } from 'react'
import {fetchData} from "../utils/fetchFromAPI"
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {Videos, ChannelCard} from './'

const ChannelDetails = () => {
  const {id} = useParams()
  const [channelDetails, setChannelDetails] = useState(null)
  const [videos, setVideos] = useState([])
  console.log(videos, channelDetails)
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchData(`channels?part=snippet&id=${id}`);
      setChannelDetails(data?.items[0]);
      const videosData = await fetchData(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      setVideos(videosData?.items);
    };
    fetchResults();
  }, [id])
  
  return (
    <Box minHeight="95vh">
      <Box>
        <div 
          style={{
            background: 
            `linear-gradient(90deg, 
            rgba(20,121,200,1) 0%, 
            rgba(9,100,121,1) 35%, 
            rgba(0,212,255,1) 100%)`,
            zIndex: 10, 
            height: "300px",
          }}
          
        />
        <ChannelCard channelDetails={channelDetails} marginTop="-100px"/>
      </Box>
      <Box display='flex' p="2">
        <Box sx={{mr: { sm: "100px"}}} />
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetails

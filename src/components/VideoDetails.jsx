import { CheckCircle } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactPlayer from "react-player"
import { Link, useParams } from 'react-router-dom'
import { fetchData } from '../utils/fetchFromAPI'
import { Videos } from "./"

const VideoDetails = () => {
  const {id} = useParams()
  const [videoDetails, setVideoDetails] = useState(null)
  const [videosLike, setVideosLike] = useState(null)
  useEffect(() => {
    fetchData(`video?part=snippet,statistics&id=${id}`)
    .then(result => setVideoDetails(result.items[0]))
    .catch(err => setVideoDetails(err.message));
    
    fetchData(`seaarch?part=snippet&relatedToVideoId${id}&type=video`)
    .then(result => setVideosLike(result.items[0]))
    .catch(err => setVideosLike(err.message));
  }, [id])
  
  const {snippet: {title, channelId, channelTitle}, statistics: {
    viewCount, likeCount }} = videoDetails;
  if(!videoDetails?.snippet) return "Loading..."

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row"}}>
        <Box flex={1}>
          <Box sx={{width: "100%", position: "sticky", top: "86px"}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player" controls />
              <Typography color="#fff" variant='h5' fontWeight="bold" p={2}>
                {title}
              </Typography>
              <Stack direction="row" justifyContent="space-between" sx={{color:"#fff"}} py={1}px={2}>
                <Link to={`/channel/${channelId}`}>
                  <Typography variant={{sm: "subtitle1", md: "h6"}} color="#fff" >
                    {channelTitle}
                    <CheckCircle sx={{color: "gray", fontSize: "12px", ml: "5px"}} />
                  </Typography>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center" >
                  <Typography variant='body1' sx={{opacity: 0.7}}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant='body2' sx={{opacity: 0.7}}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md: 1 ,xs: 5}} justifyContent="center" alignItems="center">
          <Videos videos={videosLike} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetails

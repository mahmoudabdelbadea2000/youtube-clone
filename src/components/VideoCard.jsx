import { CheckCircle } from '@mui/icons-material'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from "../utils/Constants"

const VideoCard = ({video: {id: {videoId},snippet}}) => {
  return (
    <Card sx={{width: {xs: '100%', sm: '358px', md: "320px"}, boxShadow: "none", borderRadius: "0"}}>
      <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px', md: "320px"}, height: 180 }}
        />
      </Link>
      <CardContent sx={{
        backgroundColor: "#1e1e1e", 
        height: "106px", display:'flex', flexDirection: 'column'}}>
      <Link 
        to={videoId ? `/video/${videoId}`: demoVideoUrl}>
          <Typography variant='subtitile1' fontWeight="bold" color="#fff" fontSize="14px">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
      </Link>
      <Link 
        to={snippet?.channelId ? `/channel/${snippet?.channelId}`: demoChannelUrl}>
          <Typography variant='subtitile2' fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle.slice(0, 60)}
          </Typography>
          <CheckCircle sx={{fontSize: "12px", color:"gray", ml: "5px", marginTop: "5px"}}/>
      </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard

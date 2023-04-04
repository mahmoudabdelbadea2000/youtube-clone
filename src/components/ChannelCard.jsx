import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {demoProfilePicture} from "../utils/Constants"
import { CheckCircle } from '@mui/icons-material'

const ChannelCard = ({channelDetails,marginTop}) => (
  <Box 
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop
    }}
    >
    <Link to={`/channel/${channelDetails?.id?.channelId}`}>
      <CardContent sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
      }}>
        <CardMedia 
          image={
            channelDetails?.snippet?.thumbnails?.high?.url 
            || demoProfilePicture}
          alt={channelDetails?.snippet?.title}
          sx={{
            width:"180px", 
            height:"180px", 
            borderRadius: "50%", 
            mb: 2, 
            border: "2px solid #e3e3e3"
          }}/>
          <Typography variant='h6'>
            {channelDetails?.snippet?.title}
            <CheckCircle sx={{fontSize: "12px", color:"gray", ml: "5px", marginTop: "5px"}}/>
          </Typography>
          {channelDetails?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString()} subscriber
            </Typography>
          )}
      </CardContent>
    </Link>
  </Box>
)


export default ChannelCard
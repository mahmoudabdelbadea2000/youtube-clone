import { Box, Stack } from '@mui/material'
import React from 'react'
import { ChannelCard, VideoCard } from './'

const Videos = ({videos, direction}) => {
  if(videos?.length) return "loading..."
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
        {
            videos.map((video, idx) => (
                <Box key={idx}>
                    {video.id.videoId && <VideoCard video={video}/>}
                    {video.id.channelId && <ChannelCard channelDetails={video}/>}
                </Box>
            ))
        }
    </Stack>
  )
}

export default Videos

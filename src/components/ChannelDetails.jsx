import React, { useEffect, useState } from 'react'
import {fetchData} from "../utils/fetchFromAPI"
import { useParams } from 'react-router-dom'

const ChannelDetails = () => {
  const {id} = useParams()
  const [channelDetails, setChannelDetails] = useState(null)
  const [videos, setVideos] = useState([])
  console.log(videos, channelDetails)
  useEffect(() => {
    fetchData(`channels?part=snippet&id=${id}`).then((data) => setChannelDetails(data?.items[0]))
    fetchData(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items))
  }, [id])
  
  return (
    <div>
      {videos}
    </div>
  )
}

export default ChannelDetails

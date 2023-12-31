import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import {Sidebar, Videos} from '../components';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('Featured');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  },[selectedCategory]);

  return (
    <Stack sx={{flexDirection: {sx: "column", md: "row"}}}>
      <Box sx={{height: {sx: 'auto', md: '92vh'}, px: { sx: 0, md: 2}, borderRight: '1px solid #3d3d3d'}}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

        <Typography className='copyright' variant='body2' sx={{mt: 1.5, color: '#fff'}}>
          SN Copyright 2023 
        </Typography>
      </Box>

      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white'}}>
          {selectedCategory} <span style={{color: '#fc1503'}}>Videos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed

import React, { useState } from 'react'
import { Box, Stack } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import '../App.css';

export default function Card({ data }) {

  const [isHovered, setIsHovered] = useState(false);
  if (data?.login === undefined) return <img src="https://cdni.iconscout.com/illustration/premium/thumb/no-search-found-2511608-2133696.png" style={{ width: '400px' }} />;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <Box
        className={`card ${isHovered ? 'rotate' : ''}`}
        sx={{
          margin: { xs: '10px', md: ' 50px 200px' },
          padding: '20px',
          border: '1px solid black',
          borderRadius: '10px',
          backgroundColor: 'white',
          onMouseEnter: { handleMouseEnter },
          onMouseLeave: { handleMouseLeave }
        }}>
        <Stack direction={{ xs: 'column', md: 'row' }} sx={{ alignItems: "center", justifyContent: 'space-evenly' }}>
          <img id="img-style" src={data.avatar_url} alt="logo" />
          <Box sx={{ textAlign: { xs: 'left', md: 'left' }, marginLeft: {xs:'50px',md:'0px'}, justifyContent: 'center' }}>
            <p className='text-style'>ID : <span className='data-style'>{data?.id}</span></p>
            <p className='text-style'>Login : <span className='data-style'>{data?.login}</span></p>
            <p className='text-style'>Name : <span className='data-style'>{data?.name || data?.login}</span></p>
            <p className='text-style'>Repos : <span className='data-style'>{data?.public_repos}</span></p>
            <p className='text-style'>Followers : <span className='data-style'>{data?.followers}</span></p>
            <p className='text-style'>Following : <span className='data-style'>{data?.following}</span></p>
            {data?.bio && <p className='text-style' style={{display:'flex'}}> Bio: <span className='data-style' style={{display:'flex'}}> {data?.bio}</span></p>}
            <a href={data?.html_url} target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }}><button className='btn'>Go to GitHub <GitHub sx={{ marginLeft: '3px', marginBottom: '-6px' }} /></button></a>
          </Box>
        </Stack>
      </Box>
      <p style={{ textAlign: 'center' }}>Made with love ❤️ by Surya Teja</p>
    </>
  )
}


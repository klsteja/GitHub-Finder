import React, { useState } from 'react';
import Card from './components/Card';
import { Box,CircularProgress } from '@mui/material';
import { PersonSearch } from '@mui/icons-material';
import errorImage from './images/error.png'

function UserInfo() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputUserId, setInputUserId] = useState('');

  const handleInputChange = (event) => {
    setInputUserId(event.target.value);
  };

  const fetchUserData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${inputUserId}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchUserData();
  };

  return (
    <Box sx={{ color: "blue",minHeight:'95vh' ,textAlign: 'center' }}>
      <div style={{marginTop:'-40px'}}>
       <br/>
        <h1 id='heading'>GitHub Finder <PersonSearch sx={{ fontSize: '40px',marginBottom:'-4px' }} /> </h1>
      </div>
      <form style={{ margin: '1cm' }} onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputUserId}
          onChange={handleInputChange}
          placeholder="Enter GitHub user ID"
          style={{
            width: '50%',
            height: '1.1cm',
            border: '1px solid white',
            fontSize:'14px',
            borderRadius: '10px',
            textAlign: 'center'
          }}
        />
        <button type="submit"
          id="btn"
          style={{
            width: '90px',
            cursor: 'pointer',
            marginLeft: '10px',
            textAlign:'center',
            height: '1.25cm',
            fontSize:'15px',
            border: '1px solid',
            borderRadius: '10px',
            backgroundColor:'#b55385',
            color:'white',
            fontWeight:'bold'

          }}>Find</button>
      </form>
        {loading && <CircularProgress color="inherit" /> }
        {error && <img src={errorImage} style={{width:'400px'}} />}
        {!loading && user && <Card data={user} />}
    </Box>
  );
}

export default UserInfo;

import React, { useState, useEffect } from 'react'
import './app.css';
import axios from 'axios';

const App = () => {


  useEffect(() => {
    
    const options = {
      method: 'GET',
      url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
      params: {Category: 'Cricket', Timezone: '0'},
      headers: {
        'X-RapidAPI-Key': '2A59D01B1AE64DFA9A05EE3742970F30',
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });

  }, []);




  return (
    <>
    
    </>
  )
}

export default App
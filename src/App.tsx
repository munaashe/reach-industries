import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Container, Card, CardMedia, Box, CardContent, Slider } from '@mui/material';
import './App.css';
import { Player } from 'react-tuby';
import "react-tuby/css/main.css";



const api1 = 'https://mockapi.lumi.systems/getdevices'
const api2 = 'https://mockapi.lumi.systems/getdevicedata'

function App() {
  const [theVideo, setTheVideo] = useState('');
  const [frameJson, setFrameJson] = useState('');



  useEffect(() => {
    axios.get(api1, {
      params: {
        userId: '100',
        orgId: 'Lumi'
      },
    }).then((response1) => {
    });

    axios.get(api2, {
      params: {
        deviceId: 'LabEye-dVr'
      },
    }).then((response2) => {
      setTheVideo(response2.data.output.videofiles)
      setFrameJson(response2.data.output.cvmdata)
    });
  }, []);



  return (
    <div className="App" style={{ height: '100vh' }}>
      <Container maxWidth='md' style={{ marginTop: '20px' }}>
        <Player src={theVideo} />
        <br />
        <Card sx={{ display: 'flex' }}>
          <Box width='600'>
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
          </Box>
        </Card>
        <Card sx={{ display: 'flex', marginTop: '20px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }} flexGrow={1}>
            <Typography variant='h6' align='center'>Frame Information</Typography>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography variant="subtitle1" color="text.secondary" align='left'>
                Frame Number:
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" align='left'>
                Bounding Box:
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" align='left'>
                Histogram:
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            </Box>
          </Box>
          <Typography variant="subtitle1" color="text.secondary">RGB</Typography>
          
        </Card>
      </Container>
    </div>
  );
}

export default App;





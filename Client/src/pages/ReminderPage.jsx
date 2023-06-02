import React, { useEffect, useState } from 'react';
import SideNav from '../components/SideNav';
import { Box, Grid, CircularProgress } from '@mui/material';
import ProfileBox from '../components/ProfileBox';
import ReminderList from '../components/ReminderList';
import PastMemoryBox from '../components/PastMemoryBox';
import Axios from '../AxiosInstance';

function ReminderPage() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await Axios.get("/shownote");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ height: "" }}></Box>
      {/* Sidebar */}
      <Box sx={{ width: { sm: "100px", md: "280px" } }}>
        <SideNav />
      </Box>

      <Grid
        container
        columns={28}
        sx={{ marginTop: { xs: "50px", sm: "0px" } }}
      >
        {/* Box1 */}
        <Grid item xs={20}>
          <h1 style={{ marginLeft: "20px" }}>Reminder</h1>
        </Grid>
        {/* Box2 */}
        <Grid item xs={8}>
          <ProfileBox />
        </Grid>
        {/* Box3 */}
        <Grid item xs={18} sm={15} sx={{ height: "100vh" }}>
          {isLoading ? (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{ height: "100%" }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <ReminderList data={data} />
          )}
        </Grid>
        {/* Box4 */}
        <Grid item xs={10} sm={13}>
          <PastMemoryBox data={data} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ReminderPage;

import { Box, Grid } from '@mui/material'
import React from 'react'
import SideNav from '../components/SideNav'
import ShowList from '../components/ShowList'
import ProfileBox from '../components/ProfileBox'
import EditCard from '../components/EditCard'

function EditNodePage() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ height: "20vh" }}></Box>
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
          <h1 style={{ marginLeft: "20px" }}>Back</h1>
        </Grid>
        {/* Box2 */}
        <Grid item xs={8}>
          <ProfileBox />
        </Grid>
        {/* Box3 */}
        <Grid item xs={27} sx={{ height: "80vh" }}>
          <EditCard />
        </Grid>
      </Grid>
    </Box>
  )
}

export default EditNodePage
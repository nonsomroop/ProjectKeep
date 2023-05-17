import { Box } from '@mui/material'
import React from 'react'
import RegisterForm from '../components/RegisterForm'

function RegisterPage() {
  return (
    <Box
      sx={{
        height: "calc(100vh - 20px)",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <RegisterForm />
    </Box>
  )
}

export default RegisterPage
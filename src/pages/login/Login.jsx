import React from 'react'
import { Grid, TextField } from '@mui/material'

const Login = () => {
	return (
		<Grid spacing={2}>
			<Grid item xs={12} md={4} lg={4}>
				<h1>Login</h1>
				<TextField
					id="outlined-basic"
					label="Username"
					variant="outlined"
					fullWidth
				/>
			</Grid>
			<Grid item xs={12} md={4} lg={4}>
				<TextField
					id="outlined-basic"
					label="Password"
					variant="outlined"
					fullWidth
				/>
			</Grid>
		</Grid>
	)
}

export default Login

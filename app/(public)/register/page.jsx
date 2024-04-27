'use client'
import {
  Alert,
  Button,
  Divider,
  Grid,
  Snackbar,
  TextField,
  Typography
} from '@mui/material'
import CardContainer from '../../_components/CardContainer'
import { pages } from '@/utils/constants'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useCreateUserMutation } from '@/libs/api/users'
import { useState } from 'react'
export default function Register() {
  const { register, handleSubmit } = useForm()
  const router = useRouter()
  const [error, setError] = useState(false)
  const [createUser, { isLoading }] = useCreateUserMutation()

  const handleCreateUser = async data => {
    try {
      const response = await createUser(data).unwrap()
      console.log('New user created:', response)
      sessionStorage.setItem('isLoggedIn', true)
      router.push(pages.Dashboard)
      /*
      since the api does not give anything back assuming the user creating is success
      in this case redirecting the user to dashboard page
      and saving a key in session to keep track of login status in this case just
      storing a true or false state
      otherwise might use JWT token for authentication.
      */
    } catch (error) {
      setError(true)
      console.error('Failed to create User:', error)
    }
  }
  const onSubmit = data => {
    handleCreateUser(data)
  }
  return (
    <CardContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <Typography
              align='center'
              variant='h5'
              color={'primary'}
              gutterBottom
            >
              Lets get you started !
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              size='small'
              {...register('fullname')}
              label='Full Name'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              size='small'
              {...register('username')}
              label='Username'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              size='small'
              {...register('password')}
              label='Password'
              type='password'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              fullWidth
              disabled={isLoading}
            >
              {isLoading ? 'Loading' : 'Register'}
            </Button>
          </Grid>
        </Grid>
      </form>
      <Divider flexItem>
        <Typography align='center' variant='overline'>
          OR
        </Typography>
      </Divider>
      <Button
        type='submit'
        variant='outlined'
        color='primary'
        fullWidth
        onClick={() => {
          router.push(pages.LOGIN)
        }}
      >
        Login
      </Button>
      <Snackbar
        open={error}
        autoHideDuration={5000}
        onClose={() => setError(false)}
      >
        <Alert
          onClose={() => setError(false)}
          severity='error'
          variant='filled'
          sx={{ width: '100%' }}
        >
          Something went wrong please try again.
        </Alert>
      </Snackbar>
    </CardContainer>
  )
}

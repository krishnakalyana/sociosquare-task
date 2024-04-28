'use client'
import { Button, Divider, Grid, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { pages } from '@/utils/constants'
export default function LoginForm() {
  const { register, handleSubmit } = useForm()
  const router = useRouter()
  const onSubmit = data => {
    console.log(data)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <TextField
              size='small'
              {...register('username')}
              label='Username'
              variant='outlined'
              fullWidth
              gutterBottom
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
              onClick={() => {
                router.push(pages.Dashboard)
              }}
            >
              Login
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
          router.push(pages.REGISTER)
        }}
      >
        Register
      </Button>
    </>
  )
}

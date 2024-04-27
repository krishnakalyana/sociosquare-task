'use client'
import { Button, Divider, TextField, Typography } from '@mui/material'
import CardContainer from '../_components/CardContainer'
import { pages } from '@/utils/constants'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import styles from '../public.module.css'
export default function Register() {
  const { register, handleSubmit } = useForm()
  const router = useRouter()
  const onSubmit = data => {
    console.log(data)
  }
  return (
    <CardContainer>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form__layout}>
        <Typography align='center' variant='h5' color={'primary'} gutterBottom>
          Lets get you started !
        </Typography>

        <TextField
          size='small'
          {...register('fullname')}
          label='Full Name'
          variant='outlined'
          fullWidth
        />
        <TextField
          size='small'
          {...register('username')}
          label='Username'
          variant='outlined'
          fullWidth
        />
        <TextField
          size='small'
          {...register('password')}
          label='Password'
          type='password'
          variant='outlined'
          fullWidth
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          fullWidth
          onClick={() => {
            router.push(pages.Dashboard)
          }}
        >
          Register
        </Button>
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
    </CardContainer>
  )
}

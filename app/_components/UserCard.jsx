'use client'
import {
  Alert,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Snackbar,
  Stack,
  Typography
} from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { useState } from 'react'
export default function UserCard({ user }) {
  const [copied, setCopied] = useState(false)
  console.log(user)
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(user?.email)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000) // Reset copied state after 2 seconds
  }
  return (
    <Card
      sx={{
        width: '100%'
      }}
    >
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' color='primary'>
            {user?.name[0] ?? 'J'}
          </Avatar>
        }
        title={<Typography>{user?.name}</Typography>}
        subheader={
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            spacing={2}
          >
            <Typography variant='caption' color='primary'>
              {user?.email}
            </Typography>
            <ContentCopyIcon
              fontSize='12px'
              sx={{ color: copied ? 'green' : 'inherit' }}
              onClick={copyEmailToClipboard}
            />
          </Stack>
        }
      />
      <CardContent>
        <Grid container columnGap={2}>
          <Grid item xs={12}>
            <Typography color='primary' variant='overline' align='center'>
              Phone
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='overline' gutterBottom>
              {user?.phone}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              color='primary'
              variant='overline'
              align='center'
              gutterBottom
            >
              Address{' '}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='caption'>{`${user?.address?.suite},${user?.address?.street}, ${user?.address?.city},(${user?.address?.zipcode}) `}</Typography>
          </Grid>
        </Grid>
      </CardContent>

      <Snackbar
        open={copied}
        autoHideDuration={2000}
        onClose={() => setCopied(false)}
      >
        <Alert
          onClose={() => setCopied(false)}
          severity='success'
          variant='filled'
          sx={{ width: '100%' }}
        >
          Email Id Copied
        </Alert>
      </Snackbar>
    </Card>
  )
}

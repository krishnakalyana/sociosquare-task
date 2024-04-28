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
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} lg={3}>
            <Typography variant='caption'>Phone :</Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={9}>
            <Typography variant='caption'>{user?.phone}</Typography>
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

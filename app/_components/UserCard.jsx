import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Paper,
  Typography
} from '@mui/material'

export default function UserCard({ user }) {
  return (
    <Paper
      sx={{
        width: '100%'
      }}
    >
      {/* <CardHeader
        avatar={
          <Avatar aria-label='recipe' color='primary'>
            {user?.name[0] ?? 'J'}
          </Avatar>
        }
        title={user?.name}
        subheader={user?.email}
      /> */}
      {/* <CardContent> */}
      <Typography variant='body2'>phone : 024-648-3804</Typography>
      {/* </CardContent> */}
    </Paper>
  )
}

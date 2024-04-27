import { Container, Paper } from '@mui/material'
export default function PrivateRootContainer({ children }) {
  return (
    <Paper
      // maxWidth='md'
      sx={{
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        overflow: 'auto'
      }}
    >
      {children}
    </Paper>
  )
}

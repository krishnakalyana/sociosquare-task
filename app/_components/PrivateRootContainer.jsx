import { Paper } from '@mui/material'
export default function PrivateRootContainer({ children }) {
  return (
    <Paper
      sx={{
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        overflow: 'auto',
        padding: '1rem'
      }}
    >
      {children}
    </Paper>
  )
}

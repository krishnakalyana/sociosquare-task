import { Paper } from '@mui/material'
export default function CardContainer({ children }) {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%'
      }}
    >
      {children}
    </Paper>
  )
}

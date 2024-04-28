import { Container, Paper } from '@mui/material'
export default function PrivateRootContainer({ children }) {
  return (
    <Container
      sx={{
        height: '100%',
        width: '100%',
        overflow: 'auto',
        padding: '1rem'
      }}
    >
      {children}
    </Container>
  )
}

import { Container } from '@mui/material'
export default function PrivateRootContainer({ children }) {
  return (
    <Container
      maxWidth='md'
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
    </Container>
  )
}

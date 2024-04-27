import { Container } from '@mui/material'
export default function PublicRootContainer({ children }) {
  return (
    <Container
      maxWidth='md'
      sx={{
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {children}
    </Container>
  )
}

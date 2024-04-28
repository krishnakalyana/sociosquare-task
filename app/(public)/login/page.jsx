import { Grid, Typography } from '@mui/material'
import CardContainer from '../../_components/CardContainer'
import LoginForm from './_components/LoginForm'
import LoginPoster from './_components/Poster'

export default function Login() {
  return (
    <CardContainer>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <Typography
            color='primary'
            variant='overline'
            align='center'
            gutterBottom
          >
            Welcome back
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <LoginForm />
        </Grid>
        <Grid item xs={0} sm={6} lg={6}>
          <LoginPoster />
        </Grid>
      </Grid>
    </CardContainer>
  )
}

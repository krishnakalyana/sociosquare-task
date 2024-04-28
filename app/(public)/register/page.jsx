import { Grid, Typography } from '@mui/material'
import CardContainer from '../../_components/CardContainer'
import RegisterForm from './_components/RegisterForm'
import RegisterPoster from './_components/Poster'
export default function Register() {
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
            Lets get you started
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <RegisterForm />
        </Grid>
        <Grid item xs={0} sm={6} lg={6}>
          <RegisterPoster />
        </Grid>
      </Grid>
    </CardContainer>
  )
}

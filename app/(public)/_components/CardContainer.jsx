import { Paper } from '@mui/material'
import styles from '../public.module.css'
export default function CardContainer({ children }) {
  return (
    <Paper elevation={3} className={styles.common__card__container}>
      {children}
    </Paper>
  )
}

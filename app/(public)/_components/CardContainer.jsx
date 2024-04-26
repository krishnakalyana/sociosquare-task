import { Paper } from "@mui/material";
import styles from "../public.module.css";
export default function CardContainer({ children }) {
  return (
    <Paper elevation={4} className={styles.common__card__container}>
      {children}
    </Paper>
  );
}

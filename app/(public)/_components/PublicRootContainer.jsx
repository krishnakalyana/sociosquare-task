import { Container } from "@mui/material";
import styles from "../public.module.css";
export default function PublicRootContainer({ children }) {
  return (
    <Container maxWidth="md" className={styles.public__container}>
      {children}
    </Container>
  );
}

"use client";
import { Button, Divider, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import CardContainer from "../_components/CardContainer";
import styles from "./login.module.css";
import { pages } from "@/utils/constants";
export default function Login() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <CardContainer>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.login__form}>
        <Typography align="center" variant="overline" color={"primary"}>
          Login
        </Typography>
        <TextField
          size="small"
          {...register("username")}
          label="Username"
          variant="outlined"
          fullWidth
        />
        <TextField
          size="small"
          {...register("password")}
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => {
            router.push(pages.Dashboard);
          }}
        >
          Login
        </Button>
      </form>
      <Divider flexItem>
        <Typography align="center" variant="overline">
          OR
        </Typography>
      </Divider>
      <Button
        type="submit"
        variant="outlined"
        color="primary"
        fullWidth
        onClick={() => {
          router.push(pages.REGISTER);
        }}
      >
        Register
      </Button>
    </CardContainer>
  );
}

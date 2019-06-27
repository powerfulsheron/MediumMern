import React from "react";
import { Container } from "@material-ui/core";
import { LoginPage } from "../auth/LoginPage";

export default function MainComponent() {
  return (
    <Container maxWidth="md">
      <LoginPage />
    </Container>
  );
}

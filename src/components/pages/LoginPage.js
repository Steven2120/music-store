import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { userContext } from "../../contexts/userContext";
import { sampleUserData } from "../../mockData";
import Layout from "../layout/Layout";

function LoginPage() {
  const { user, signIn, signOut } = useContext(userContext);

  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });

  const onSubmit = () => {
    signIn(sampleUserData);
  };

  if (user) {
    return (
      <Layout>
        <Box mb={4}>
          <Typography>Hi {user.firstName}!</Typography>
        </Box>
        <Box>
          <Button variant="contained" onClick={signOut}>
            Sign out
          </Button>
        </Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Box mb={4}>
        <Typography>Sign In</Typography>
      </Box>
      <Box mb={4}>
        <TextField
          id="email"
          label="Email"
          value={
            console.log("signInForm.email: ", signInForm.email) ||
            signInForm.email
          }
          onChange={(event) =>
            setSignInForm({ ...signInForm, email: event.target.value })
          }
        />
      </Box>
      <Box mb={4}>
        <TextField
          id="password "
          label="Password"
          type="password"
          value={signInForm.password}
          onChange={(event) =>
            setSignInForm({ ...signInForm, password: event.target.value })
          }
        />
      </Box>
      <Box>
        <Button variant="contained" onClick={onSubmit}>
          Sign In
        </Button>
      </Box>
    </Layout>
  );
}

export default LoginPage;

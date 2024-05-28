import React, { Suspense, useState } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./Services/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import "./app.css";

const Login = React.lazy(() => import("./Pages/LogIn"));
const SignUp = React.lazy(() => import("./Pages/SignUp"));
const Home = React.lazy(() => import("./Pages/Home"));
const Create = React.lazy(() => import("./Pages/CreateAccount"));
const Dash = React.lazy(() => import("./Pages/Dash"));
const Pro = React.lazy(() => import("./Pages/MVP/Profile"));

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#EFCFA9",
    },
    secondary: {
      main: "#EEB195",
    },
    tertiary: {
      main: "#B3423C",
    },
    background: {},
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "radial-gradient(circle at center center, rgba(46, 46, 46,0.05) 0%, rgba(46, 46, 46,0.05) 22%,rgba(136, 136, 136,0.05) 22%, rgba(136, 136, 136,0.05) 26%,rgba(106, 106, 106,0.05) 26%, rgba(106, 106, 106,0.05) 66%,rgba(196, 196, 196,0.05) 66%, rgba(196, 196, 196,0.05) 77%,rgba(166,166,166, 0.050980392156862744) 77%, rgba(166,166,166, 0.050980392156862744) 93%,rgb(57,48,49) 93%, rgb(57,48,49) 100%),radial-gradient(circle at center center, rgb(20,20,20) 0%, rgb(20,20,20) 8%,rgb(20,20,20) 8%, rgb(20,20,20) 46%,rgb(20,20,20) 46%, rgb(20,20,20) 60%,rgb(20,20,20) 60%, rgb(20,20,20) 80%,rgb(20,20,20) 80%, rgb(20,20,20) 82%,rgb(20,20,20) 82%, rgb(20,20,20) 100%); background-size: 43px 43px;",
        },
      },
    },
  },
});

const App = () => {
  return (
    <AuthContext>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<div>hi</div>} />
            <Route
              exact
              path="/home"
              element={
                // <ProtectedRoute>
                // <Home />
                // </ProtectedRoute>
                <Pro />
              }
            />
            <Route
              exact
              path="/dash"
              element={
                <ProtectedRoute>
                  <Dash />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/create-account"
              element={
                <ProtectedRoute>
                  <Create />
                </ProtectedRoute>
              }
            />
            <Route
              exact
              path="/login"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Login />
                </Suspense>
              }
            />
            <Route
              exact
              path="/signup"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <SignUp />
                </Suspense>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthContext>
  );
};

export default App;

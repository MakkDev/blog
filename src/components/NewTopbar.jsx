import {
  AppBar,
  Toolbar,
  CardMedia,
  Box,
  Card,
  CardContent,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import MakkTalksLogo from "../images/MakkTalksLogo.png";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

export default function NewTopbar() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [user, setUser] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth).catch((error) => alert(error.message));
  };
  const headers = ["HOME", "BLOG", "VIDEOS", "CONTACT"];
  return (
    <AppBar
      sx={{
        position: "static",
        backgroundColor: "#53c28b",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            flex: "1",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: isSmallScreen ? "6.5rem" : "9.6rem",
              marginLeft: -10,
            }}
            src={MakkTalksLogo}
          />
          <Container
            sx={{
              display: "flex",
              flex: "1",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {headers.map((header) => {
              const pageLink =
                header === "HOME" ? "/" : `/${header.toLowerCase()}`;

              return (
                <Button
                  size="small"
                  href={pageLink}
                  sx={{
                    mr: "3%",
                    fontWeight: "600",
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: isSmallScreen ? "65%" : "110%",
                    px: "1rem",
                    borderRadius: "1.9rem",
                    textDecoration: "none",
                    color: "#1e1e1e",
                    justifyContent: "center",
                    backgroundColor: "#5AA882",
                    "&:hover": {
                      backgroundColor: "#4EB683",
                      color: "#1e1e1e",
                      filter: "drop-shadow(0 0 0.2rem black)",
                    },
                  }}
                >
                  {header}
                </Button>
              );
            })}
          </Container>
        </Box>
      </Toolbar>{" "}
    </AppBar>
  );
}

{
  /* <Box sx={{  ml:"3%", mr:"1%"}}>
      <a style={{ textDecoration: 'none', color: "inherit" }} href="https://www.instagram.com/makk.eth/" target="_blank"> <i className="topIcon fab fa-instagram-square" /> </a>
      <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://www.youtube.com/channel/UCEnP8E_-fWRKPGxp48dDUkg" target="_blank"> <i className="topIcon fab fa-youtube-square"></i> </a>
      <a style={{ textDecoration: 'none', color: 'inherit' }} href="https://github.com/MakkDev" target="_blank"> <i className="topIcon fab fa-github-square"></i> </a>
  </Box> */
}

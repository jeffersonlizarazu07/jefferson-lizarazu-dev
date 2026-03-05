import {
  Box,
  Button,
  Typography,
  Container,
  Grid,
  Stack,
  Paper,
  Link,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CircleIcon from "@mui/icons-material/Circle";
import CodeIcon from "@mui/icons-material/Code";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
// import { useState } from "react";
import { Header } from "../components/layout/Header.jsx";
import { Footer } from "../components/layout/Footer.jsx";
import { TechRow } from "../components/home/TechRow.js";
import { CodeImage } from "../components/home/CodeImage.js";

export const HomePage = () => {
  // const [repos, setRepos] = useState([]);
  // const [data, setData] = useState([]);

  // const getRepositories = async () => {
  //   try {
  //     const response =
  //       await fetch`https://api.github.com/users/jeffersonlizarazu07/repos`;

  //     const data = await response.json();
  //     return data;
  //   } catch {
  //     const error = new Error("Repositorio no encontrado", error);
  //   }
  //   getRepositories();
  // };
  // console.log(data);

  // const ThemeConfigCode = () => {
  //   const symbolColor = "#89ddff";

  return (
    <Box
      sx={{
        bgcolor: "#0B1623",
        color: "white",
        overflowX: "hidden",
        p: 6,
      }}
    >
      <Header />

      {/* ================= HERO ================= */}
      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          pt: 10,
          marginTop: "6.25rem",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={10} alignItems="center">
            {/* LEFT CONTENT */}
            <Grid size={{ xs: 12, lg: 6 }}>
              <Stack spacing={4}>
                <Typography
                  sx={{
                    background: "rgba(15,31,48,0.7)",
                    px: 2,
                    py: 1,
                    borderRadius: 5,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#4a7cd2",
                    fontFamily: "sans-serif",
                  }}
                >
                  <CircleIcon sx={{ fontSize: "17px" }} />
                  AVAILABLE FOR WORK
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "2.5rem", lg: "4rem" },
                    lineHeight: 1.1,
                  }}
                >
                  Full Stack{" "}
                  <Box component="span" color="primary.main">
                    <br />
                    Developer.
                  </Box>
                  <br />
                  Building Digital
                  <br />
                  Experiences.
                </Typography>

                <Typography color="grey.400" maxWidth={500}>
                  Crafting high-performance web applications with modern tech
                  stacks. Focused on building scalable, user-centric solutions
                  that solve real-world problems.
                </Typography>

                <Stack direction="row" spacing={3}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                  >
                    View My Work
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    sx={{ color: "#ffffff" }}
                  >
                    Contact Me
                  </Button>
                </Stack>

                <Stack
                  direction="row"
                  spacing={4}
                  color="grey.500"
                  sx={{ display: "inline-flex", alignItems: "center" }}
                >
                  <Link
                    underline="none"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <CodeIcon />
                    GitHub
                  </Link>
                  <Link
                    underline="none"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <LinkedInIcon />
                    LinkedIn
                  </Link>
                  <Link
                    underline="none"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <EmailIcon />
                    Correo electrónico{" "}
                  </Link>
                </Stack>
              </Stack>
            </Grid>
            <CodeImage />
          </Grid>
        </Container>
      </Box>
      <TechRow />
      <Footer />
    </Box>
  );
};

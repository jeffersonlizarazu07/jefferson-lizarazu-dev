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
import { Footer } from "../components/Footer.jsx";
import { Profile } from "../components/Profile";
import { SocialLinks } from "../components/SocialLinks.jsx";
import { ProjectsButton } from "../components/ProjectsButton";
import { BottomNav } from "../components/BottomNav.jsx";

export const Home = () => {
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

  return (
    <Box
      sx={{
        bgcolor: "#0B1623",
        color: "white",
        overflowX: "hidden",
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
            <Grid item xs={12} lg={6}>
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

                  <Button variant="outlined" size="large" color="#ffffff">
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

            {/* RIGHT VISUAL */}
            <Grid
              item
              xs={12}
              lg={6}
              sx={{ display: { xs: "none", lg: "block" }, width: "50%" }}
            >
              <Paper
                elevation={10}
                sx={{
                  p: 4,
                  bgcolor: "#0F1F30",
                  borderRadius: 3,
                }}
              >
                <Typography variant="subtitle2" color="grey.500">
                  App.tsx
                </Typography>

                <Box
                  component="pre"
                  sx={{
                    mt: 2,
                    fontFamily: "monospace",
                    fontSize: 14,
                    color: "primary.main",
                  }}
                >
                  {`const Developer = () => {
  const [skills] = useState([
    "React", "Node.js", "TypeScript"
  ]);

  return <Hero title="Full Stack" />;
};`}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= TECH STRIP ================= */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          py: 10,
        }}
      >
        <Container maxWidth="xl">
          <Stack
            direction="row"
            spacing={8}
            justifyContent="space-between"
            flexWrap="wrap"
            sx={{ opacity: 0.5 }}
          >
            <Typography variant="h6">REACT</Typography>
            <Typography variant="h6">NEXT.JS</Typography>
            <Typography variant="h6">SUPABASE</Typography>
            <Typography variant="h6">TAILWIND</Typography>
            <Typography variant="h6">VERCEL</Typography>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

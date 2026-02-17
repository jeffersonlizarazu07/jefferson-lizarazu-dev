import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  Container,
  IconButton,
  Grid,
  Stack,
  Paper,
  Link,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Header } from "../components/layout/Header.jsx";
// import { useState } from "react";
// import Header from "../components/Header";
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
      {/* ================= HEADER ================= */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backdropFilter: "blur(12px)",
          background: "rgba(15,31,48,0.7)",
        }}
      >
        <Toolbar
          sx={{
            width: "97%",
            px: 3,
            height: 80,
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              sx={{
                width: 32,
                height: 32,
                bgcolor: "primary.main",
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              D
            </Box>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              DEV.FOLIO
            </Typography>
          </Stack>

          {/* Nav Links Desktop */}
          <Stack
            direction="row"
            spacing={4}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Link underline="none" color="inherit">
              Home
            </Link>
            <Link underline="none" color="grey.500">
              Projects
            </Link>
            <Link underline="none" color="grey.500">
              Skills
            </Link>
            <Link underline="none" color="grey.500">
              Contact
            </Link>
          </Stack>

          {/* Right Actions */}
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ ml: "auto" }}
          >
            <IconButton color="inherit">
              <DarkModeIcon />
            </IconButton>
            <Button variant="contained">Resume</Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* ================= HERO ================= */}
      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          pt: 10,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            {/* LEFT CONTENT */}
            <Grid item xs={12} lg={6}>
              <Stack spacing={4}>
                <Typography
                  variant="overline"
                  sx={{
                    bgcolor: "primary.main",
                    px: 2,
                    py: 1,
                    borderRadius: 5,
                    display: "inline-block",
                  }}
                >
                  Available for Work
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
                    Developer.
                  </Box>
                  <br />
                  Building Digital Experiences.
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

                  <Button variant="outlined" size="large">
                    Contact Me
                  </Button>
                </Stack>

                <Stack direction="row" spacing={4} color="grey.500">
                  <Link underline="none">GitHub</Link>
                  <Link underline="none">LinkedIn</Link>
                  <Link underline="none">Twitter</Link>
                </Stack>
              </Stack>
            </Grid>

            {/* RIGHT VISUAL */}
            <Grid
              item
              xs={12}
              lg={6}
              sx={{ display: { xs: "none", lg: "block" } }}
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
            <Typography variant="h6">RE-ACT</Typography>
            <Typography variant="h6">NEXT.JS</Typography>
            <Typography variant="h6">SUPABASE</Typography>
            <Typography variant="h6">TAILWIND</Typography>
            <Typography variant="h6">VERCEL</Typography>
          </Stack>
        </Container>
      </Box>

      {/* ================= FOOTER ================= */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          py: 6,
        }}
      >
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="body2" color="grey.500">
              © 2024 DEV.FOLIO. All rights reserved.
            </Typography>

            <Stack direction="row" spacing={4}>
              <Link underline="none" color="grey.500">
                Privacy Policy
              </Link>
              <Link underline="none" color="grey.500">
                Terms of Service
              </Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

import { Box } from "@mui/material";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { TechRow } from "../components/home/TechRow.js";
import { Hero } from "../components/home/Hero.js";

export const HomePage = () => {

  return (
    <Box
      sx={{
        bgcolor: "#0B1623",
        color: "white",
        overflowX: "hidden",
        pt: 6, px: 6, pb: 0
      }}
    >
      <Header />
      <Hero />
      <TechRow />
      <Footer />
    </Box>
  );
};

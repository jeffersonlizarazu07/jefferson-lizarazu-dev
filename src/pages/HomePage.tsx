import { Box } from "@mui/material";
import { TechRow } from "../features/home/TechRow.js";
import { Hero } from "../features/home/Hero.js";

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
      <Hero />
      <TechRow />
    </Box>
  );
};

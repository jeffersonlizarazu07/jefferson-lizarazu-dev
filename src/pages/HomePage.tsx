import { Box } from "@mui/material";
import { Hero } from "@/features/home/Hero";
import { TechRow } from "@/features/home/TechRow";

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

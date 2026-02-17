import { Box, Typography, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={3}
      py={2}
    >
      <Typography fontWeight={600}>DevPortfolio</Typography>

      <Box>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
